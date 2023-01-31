import { useForm } from "react-hook-form";

import { FormProps } from "interface";

export const useFormInput = () => {
  const { register, handleSubmit, getValues, formState } = useForm<FormProps>({
    mode: "onBlur",
  });

  const registerPassword = register("password", {
    required: "Password is required",
    pattern: {
      value:
        /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$%^&*()_+])[A-Za-z0-9!@#$%^&*()_+]{8,}$/,
      message:
        "Minimum eight characters, at least one letter, one number and one special character.",
    },
  });

  const registerConfirmPassword = register("confirmPassword", {
    required: "Confirm password is required",
    validate: (value: string) => {
      const { password } = getValues();
      return password === value || "Please make sure your passwords match.";
    },
  });

  return {
    register,
    handleSubmit,
    formState,
    registerPassword,
    registerConfirmPassword,
  };
};
