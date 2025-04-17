import { useState } from "react";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/modal";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { Form } from "@heroui/form";

import { useCookies } from "react-cookie";
import { ItemsProps, CookieProps } from "@/types/types";

import { EditIcon } from "./Icons";


export default function EditButton(props: ItemsProps) {
  const { id, name, url, like } = props;

  const [cookies, setCookie] = useCookies<"listData", CookieProps>([
    "listData",
  ]);

  const [inputName, setInputName] = useState<string>(name || "");
  const [inputUrl, setInputUrl] = useState<string>(url || "");
  const [errors, setErrors] = useState({});

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data: ItemsProps = {
      id,
      name: inputName.trim(),
      url: inputUrl.trim(),
      like: like,
    };
    console.log("Form data:", data);

    if (data.name.length < 3) {
      setErrors({ name: "Ім'я має містити не менш 3 символів" });
      return;
    }

    const urlRegex = /^https:\/\/.+\.jpg$/;

    if (!urlRegex.test(data.url)) {
      setErrors({ url: "Некоректне посилання" });
      return;
    }

    const items: ItemsProps[] = Array.isArray(cookies.listData)
      ? cookies.listData
      : [];

    const updatedUsers = items.map((elem: any) =>
      elem.id === id ? { ...data } : elem
    );

    setCookie("listData", JSON.stringify(updatedUsers), {
      path: "/",
    });

    onOpenChange();
  };
  const handleOpen = () => {
    setErrors({});
    setInputName(name || "");
    setInputUrl(url || "");
    onOpen();
  };

  return (
    <>
      <Button
        className="text-[10px] md:text-[12px] lg:text-[14px] px-1 md:px-3 lg:px-5 py-1 md:py-1.5 lg:py-2 min-w-[40px] md:min-w-[80px] lg:min-w-[100px] h-6 md:h-8 lg:h-10"
        color="primary"
        onPress={handleOpen}
        endContent={
          <EditIcon className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
        }
      >
        <span className="hidden sm:inline">Edit mem</span>
        <span className="inline sm:hidden">Edit</span>
      </Button>

      <Modal
        isOpen={isOpen}
        placement="top-center"
        onOpenChange={onOpenChange}
        backdrop="blur"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
              <Form validationErrors={errors} onSubmit={onSubmit}>
                <ModalBody className="w-full flex flex-col gap-3">
                  <Input
                    name="id"
                    label="ID"
                    variant="bordered"
                    value={id.toString() || ""}
                    disabled
                  />
                  <Input
                    name="name"
                    label="Ім'я"
                    placeholder="Введіть ім'я"
                    variant="bordered"
                    value={inputName}
                    onChange={(e) => setInputName(e.target.value)}
                  />
                  <Input
                    name="url"
                    label="Посилання"
                    placeholder="Введіть посилання"
                    variant="bordered"
                    value={inputUrl}
                    onChange={(e) => setInputUrl(e.target.value)}
                  />
                </ModalBody>
                <ModalFooter className="ml-auto">
                  <Button color="danger" variant="flat" onPress={onClose}>
                    Закрити
                  </Button>
                  <Button color="primary" type="submit">
                    Зберегти
                  </Button>
                </ModalFooter>
              </Form>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
