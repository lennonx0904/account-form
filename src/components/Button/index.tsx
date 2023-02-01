import { Button as ButtonComponent } from "@chakra-ui/react";

import { ButtonProps } from "interface";

const Button = (props: ButtonProps) => {
  const {
    text,
    type,
    onClick,
  } = props;

  return (
    <ButtonComponent type={type} onClick={onClick} variant={"variants"}>
      {text}
    </ButtonComponent>
  );
};

export default Button;
