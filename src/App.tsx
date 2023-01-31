import {
  Box,
  Flex,
  Center,
  Heading,
  Stack,
  FormControl,
  Alert,
  AlertIcon,
  AlertDescription,
} from "@chakra-ui/react";
import { RiErrorWarningLine } from "react-icons/ri";
import { useForm } from "react-hook-form";

import { FormInput, Button } from "components";

interface FormProps {
  password: string;
  confirmPassword: string;
}

const AccountForm = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FormProps>({ mode: "onBlur" });

  const onFormSumbit = (formObj: FormProps) => {
    console.log("Form Submitted", formObj);
  };

  return (
    <Box bgColor="#f3f3f3" h="100vh">
      <Center>
        <Flex width="464px" my="64px" direction="column" align="center">
          <Heading mb="16px" fontSize="24px">
            Account
          </Heading>
          <Stack w="full" spacing="16px">
            <Stack
              as="section"
              w="full"
              p="32px"
              spacing="24px"
              direction="column"
              bgColor="white"
              borderRadius="4px"
            >
              <Heading fontSize="16px">Set Password</Heading>

              <FormControl>
                <Alert status="error" bgColor="#feeeed">
                  <AlertIcon as={RiErrorWarningLine} />
                  <AlertDescription fontSize="12px" color="#f65e4e">
                    Your account don’t have password yet. Set password so you
                    can log in with your Layoutbase account.
                  </AlertDescription>
                </Alert>
              </FormControl>

              <FormInput
                id="email"
                value="hello@branch8.com"
                label="Email (Your account)"
                htmlFor="email"
                isDisabled
              />

              <FormInput
                id="password"
                label="Set Password"
                htmlFor="password"
                register={register("password", {
                  required: "Password is required",
                  pattern: {
                    value:
                      /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$%^&*()_+])[A-Za-z0-9!@#$%^&*()_+]{8,}$/,
                    message:
                      "Minimum eight characters, at least one letter, one number and one special character.",
                  },
                })}
                errors={errors.password}
              />

              <FormInput
                id="confirmPassword"
                label=" Confirm Password"
                htmlFor="confirmPassword"
                register={register("confirmPassword", {
                  required: "Confirm password is required",
                  validate: (value) => {
                    const { password } = getValues();
                    return (
                      password === value ||
                      "Please make sure your passwords match."
                    );
                  },
                })}
                errors={errors.confirmPassword}
              />

              <FormControl>
                <Flex>
                  <Button
                    text="Submit"
                    type="submit"
                    size="md"
                    color="white"
                    bgColor="red.100"
                    onHoverStyle={{ bgColor: "red.300" }}
                    onActiveStyle={{ bgColor: "red.200" }}
                    onFocusStyle={{ boxShadow: "none" }}
                    onClick={handleSubmit(onFormSumbit)}
                  />
                </Flex>
              </FormControl>
            </Stack>
          </Stack>
        </Flex>
      </Center>
    </Box>
  );
};

export default AccountForm;
