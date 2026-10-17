import type { ImgHTMLAttributes } from "react";
import { imageData } from "../lib/images";

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "srcSet" | "width" | "height"> & {
  name: string;
  sizes: string;
  priority?: boolean; // true pour une image visible dès l'arrivée sur la page
};

export default function Img({ name, sizes, priority = false, alt = "", ...rest }: Props) {
  const d = imageData(name);
  return (
    <img
      src={d.src}
      srcSet={d.srcSet}
      sizes={sizes}
      width={d.width}
      height={d.height}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      {...rest}
    />
  );
}