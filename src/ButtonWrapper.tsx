import { FC, DetailedHTMLProps, ButtonHTMLAttributes } from "react";
export const ButtonWrapper: FC<
  DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & {
    title: string;
  }
> = ({ title, ...props }) => <button {...props}>{title}</button>;
