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

import { FormInput, Button } from "components";
import { useFormInput } from "hooks";
import { FormProps } from "interface";

const AccountForm = () => {
  const {
    handleSubmit,
    formState: { errors },
    registerPassword,
    registerConfirmPassword,
  } = useFormInput();

  const onFormSumbit = (formObj: FormProps) => {
    console.log("Form Submitted", formObj);
  };

  return (
    <Box bgColor="gray.600" h="100vh">
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
                <Alert status="error" bgColor="gray.500">
                  <AlertIcon as={RiErrorWarningLine} />
                  <AlertDescription fontSize="12px" color="red.100">
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
                type="email"
                placeholder="Please enter your email"
                isDisabled
              />

              <FormInput
                id="password"
                label="Set Password"
                htmlFor="password"
                type="password"
                placeholder="Please enter your password"
                register={registerPassword}
                errors={errors.password}
              />

              <FormInput
                id="confirmPassword"
                label=" Confirm Password"
                htmlFor="confirmPassword"
                type="password"
                placeholder="Please enter your password again"
                register={registerConfirmPassword}
                errors={errors.confirmPassword}
              />

              <FormControl>
                <Flex justifyContent="flex-end">
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
