import { UseFormRegisterReturn, FieldError } from "react-hook-form";

export interface FormProps {
  password: string;
  confirmPassword: string;
}

export interface FormInputProps {
  id: string;
  label: string;
  htmlFor: string;
  type: string;
  placeholder: string;
  isDisabled?: boolean;
  value?: string;
  register?: UseFormRegisterReturn<"password" | "confirmPassword">;
  errors?: FieldError;
}

export interface ButtonProps {
  text: string;
  type: "button" | "submit" | "reset";
  onClick: () => void;
}
