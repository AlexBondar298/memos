import { useState } from "react";

import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Link } from "@heroui/link";
import { Image } from "@heroui/image";

import { ItemsProps } from "@/types/types";

import { LikeIcon } from "./Icons";

export default function CardItem(props: ItemsProps) {
  const { name, url, like } = props;
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <Card
      isPressable
      shadow="sm"
      className="relative overflow-hidden"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      <CardHeader
        className={`absolute top-0 left-0 w-full px-4 py-2 bg-white/80 dark:bg-black/70 text-black dark:text-white flex-col items-start z-20 transition-all duration-500 ease-in-out transform ${visible ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4"} `}
        style={{ pointerEvents: "none" }}
      >
        <h4 className="font-medium text-lg">{name}</h4>
      </CardHeader>

      <CardBody className="overflow-visible p-2 z-10">
        <figure className="flex h-full">
          <Image
            alt={name}
            // className="w-full object-cover h-[200px]"
            className="w-full object-cover h-full"
            radius="lg"
            shadow="sm"
            src={url}
            width="100%"
          />
        </figure>
      </CardBody>

      <CardFooter className="text-small justify-between z-10">
        <div className="flex items-center gap-2">
          <LikeIcon />
          <b className="text-[12px] md:text-[16px]">{like}</b>
        </div>
        <Link onPress={() => window.open(url, "_blank")}>
          <span className="text-[12px] md:text-[16px]">Посилання</span>
        </Link>
      </CardFooter>
    </Card>
  );
}
