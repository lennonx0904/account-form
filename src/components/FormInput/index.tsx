import {
  FormControl,
  FormLabel,
  Input,
  Text,
  FormErrorMessage,
} from "@chakra-ui/react";

import { FormInputProps } from "interface";

const FormInput = (props: FormInputProps) => {
  const {
    id,
    label,
    htmlFor,
    type,
    placeholder,
    register,
    errors,
    isDisabled,
    value,
  } = props;

  const isInvalid = Boolean(errors);

  return (
    <FormControl isInvalid={isInvalid}>
      <FormLabel htmlFor={htmlFor} fontSize="12px" color="gray.400">
        {label}
      </FormLabel>
      <Input
        id={id}
        value={value}
        type={type}
        placeholder={placeholder}
        isDisabled={isDisabled}
        _focus={{ borderColor: "red.100", boxShadow: "none" }}
        // _hover={{ borderColor: "gray.100" }}
        _disabled={{
          bgColor: "gray.200",
          color: "gray.300",
          opacity: 1,
          cursor: "not-allowed",
        }}
        {...register}
      />
      <FormErrorMessage>
        <Text>{errors && errors.message}</Text>
      </FormErrorMessage>
    </FormControl>
  );
};

export default FormInput;
