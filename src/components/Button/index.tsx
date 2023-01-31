import { Button as ButtonComponent } from "@chakra-ui/react";

const Button = (props: any) => {
  const {
    text,
    type,
    size,
    color,
    bgColor,
    onHoverStyle,
    onActiveStyle,
    onFocusStyle,
    onClick,
  } = props;

  return (
    <ButtonComponent
      type={type}
      size={size}
      color={color}
      bgColor={bgColor}
      _hover={onHoverStyle}
      _active={onActiveStyle}
      _focus={onFocusStyle}
      onClick={onClick}
    >
      {text}
    </ButtonComponent>
  );
};

export default Button;
