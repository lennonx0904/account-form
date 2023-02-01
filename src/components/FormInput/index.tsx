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
        _disabled={{
          bgColor: "gray.200",
          color: "gray.300",
          opacity: 1,
          cursor: "not-allowed",
        }}
        _placeholder={{ color: "gray.700", fontSize: "14px" }}
        bgColor={isInvalid ? "red.400" : "white.100"}
        /**
         *  FIXME:
         *  When user typing, the cursor usually hover on the input.
         *  it will replace the UI when on focus.
         *  Using <PseudoBox as="input"/> maybe can fix the problem,
         *  but I got the error: Module '"@chakra-ui/react"' has no exported member 'PseudoBox'.
         *
         * ref: https://v0.chakra-ui.com/pseudobox
         */
        // _hover={{ borderColor: "gray.100" }}
        {...register}
      />
      <FormErrorMessage>
        <Text>{errors && errors.message}</Text>
      </FormErrorMessage>
    </FormControl>
  );
};

export default FormInput;
