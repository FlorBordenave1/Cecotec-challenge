import React, { ElementType } from "react";

type Variant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "body"
  | "body-small"
  | "small";

interface Props {
  variant: Variant;
  label: string;
  className?: string;
  as?: ElementType;
}

const tags: Record<Variant, ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  body: "p",
  "body-small": "p",
  small: "span",
};

const sizes: Record<Variant, string> = {
  h1: "text-lg sm:text-xl md:text-2xl lg:text-[33px]", //
  h2: "text-[18px] md:text-[20px] sm:text-[24px] lg:text-[28px]", //
  h3: "text-[8px] md:text-[10px]  sm:text-[12px] lg:text-[16px]", //
  h4: "text-[20px] sm:text-[18px] md:text-[16px] lg:text-[14px]",
  h5: "text-[18px] sm:text-[16px] md:text-[14px] lg:text-[12px]",
  body: "text-[12px] sm:text-[14px] md:text-[16px]", //
  "body-small": "text-[10px] sm:text-xs] md:text-sm", //
  small: "text-[12px] sm:text-[10px] md:text-[8px]",
};

export const Typography = ({ variant, label, className, as }: Props) => {
  const sizeClasses = sizes[variant];
  const Tag = as || tags[variant];

  return (
    <Tag className={`${sizeClasses} font-montserrat ${className}`}>{label}</Tag>
  );
};
