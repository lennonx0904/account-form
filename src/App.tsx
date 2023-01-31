import {
  Box,
  Flex,
  Center,
  Heading,
  Stack,
  FormControl,
  FormLabel,
  Alert,
  AlertIcon,
  AlertDescription,
  Input,
  Button,
} from "@chakra-ui/react";
import { RiErrorWarningLine } from "react-icons/ri";
import { useForm } from "react-hook-form";

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
  } = useForm<FormProps>();


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

              <FormControl>
                <FormLabel htmlFor="email" fontSize="12px" color="#585858">
                  Email (Your account)
                </FormLabel>
                <Input
                  id="email"
                  value="hello@branch8.com"
                  isDisabled
                  _disabled={{
                    bgColor: "#eeeeee",
                    color: "#d0d0d0",
                    opacity: 1,
                    cursor: "not-allowed",
                  }}
                />
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="password" fontSize="12px" color="#585858">
                  Set Password
                </FormLabel>
                <Input
                  id="password"
                  _focus={{ borderColor: "#f65e4e", boxShadow: "none" }}
                  {...register("password", {
                    required: "Password is required",
                    pattern: {
                      value:
                        /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$%^&*()_+])[A-Za-z0-9!@#$%^&*()_+]{8,}$/,
                      message:
                        "Minimum eight characters, at least one letter, one number and one special character.",
                    },
                  })}
                />
              </FormControl>

              {errors.password && <p>{errors.password.message}</p>}

              <FormControl>
                <FormLabel
                  htmlFor="confirmPassword"
                  fontSize="12px"
                  color="#585858"
                >
                  Confirm Password
                </FormLabel>
                <Input
                  id="confirmPassword"
                  _focus={{ borderColor: "#f65e4e", boxShadow: "none" }}
                  {...register("confirmPassword", {
                    required: "Confirm password is required",
                    validate: (value) => {
                      const { password } = getValues();
                      return password === value || "Password is not match.";
                    },
                  })}
                />
              </FormControl>

              {errors.confirmPassword && (
                <p>{errors.confirmPassword.message}</p>
              )}

              <FormControl>
                <Flex>
                  <Button
                    type="submit"
                    size="md"
                    color="white"
                    bgColor="#f65e4e"
                    _hover={{ bgColor: "#fc7365" }}
                    _active={{ bgColor: "#ee5140" }}
                    _focus={{ boxShadow: "none" }}
                    onClick={handleSubmit(onFormSumbit)}
                  >
                    Submit
                  </Button>
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
