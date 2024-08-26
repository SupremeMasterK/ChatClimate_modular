import React from "react";

const shapes = {
  round: "rounded-[24px]",
} as const;

const variants = {
  fill: {
    indigo_A700:
      "bg-[#3057e4] shadow-[0_25px_20px_-13px_#1f68b37a] text-[#ffffff]",
  },
} as const;

const sizes = {
  xs: "h-[40px] px-[22px] text-[16px]",
  lg: "h-[56px] px-[34px] text-[24px]",
  sm: "h-[48px] px-[22px] text-[20px]",
  md: "h-[48px] px-[22px] text-[16px]",
} as const;

type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> &
  Partial<{
    className: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: keyof (typeof variants)["fill"];
  }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "md",
  color = "indigo_A700",
  children,
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap 
      ${shape ? shapes[shape] : ""} 
      ${variant ? variants[variant]?.[color] : ""} 
      ${size ? sizes[size] : ""}`}
      {...restProps}
    >
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};

export { Button };
