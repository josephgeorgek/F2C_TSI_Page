import React from "react";

const shapes = { round: "rounded" } as const;
const variants = {
  outline: {
    blue_gray_600:
      "border border-blue_gray-600 border-solid text-blue_gray-600",
  },
  gradient: {
    blue_gray_800_01_blue_gray_600_01: "bg-gradient  text-white-A700",
    blue_gray_700_blue_gray_600_01: "bg-gradient1  text-white-A700",
  },
  fill: {
    white_A700_b2: "bg-white-A700_b2 text-blue_gray-800",
    white_A700: "bg-white-A700 text-blue_gray-600",
  },
} as const;
const sizes = { xs: "p-1.5", sm: "p-[17px]" } as const;

export type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> &
  Partial<{
    className: string;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
  }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "sm",
  variant = "gradient",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
