import { UseFormRegisterReturn, FieldError } from "react-hook-form";

export interface FormProps {
  password: string;
  confirmPassword: string;
}

export interface FormInputProps {
  id: string;
  label: string;
  htmlFor: string;
  isDisabled?: boolean;
  value?: string;
  register?: UseFormRegisterReturn<"password" | "confirmPassword">;
  errors?: FieldError;
}

export interface ButtonProps {
  text: string;
  type?: "button" | "submit" | "reset";
  size: string;
  color: string;
  bgColor: string;
  onClick: () => void;

  /**
   * Using `any` as the type is due to that I haven't confirm the UI design
   * 
   * it should be like: 
   *  onHoverStyle: {
   *    bgColor: string;
   *    boxShadow: string;
   *    // and more
   *  }
   *
   */
  onHoverStyle: any;
  onActiveStyle: any;
  onFocusStyle: any;
}
