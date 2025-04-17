import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type ItemsProps = {
  id: number;
  name: string;
  url: string;
  like: string;
};

export type CookieProps = {
  listData?: string;
};
