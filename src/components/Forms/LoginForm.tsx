"use client";
import React from "react";
import { formOptions, useForm } from "@tanstack/react-form";
import Spacer from "@/components/Spacer";
import { Input, Button, Link } from "@nextui-org/react";
import { EyeSlashFilledIcon } from "../Icons/EyeSlashFilledIcon";
import { EyeFilledIcon } from "../Icons/EyeFilledIcon";
import { useCreataeUser } from "@/services/mutations";
// import { userTodoIds } from "@/services/query";

export interface LoginInformation {
  emailAddress: string;
  password: string;
};


const LoginForm: React.FC = (): React.ReactElement => {
  const createUserMutation = useCreataeUser();
  const focusRef = React.useRef<HTMLInputElement>(null);
  const [isVisible, setIsVisible] = React.useState(false);
  const [formSubmissionErrorMessage, setformSubmissionErrorMessage] = React.useState<string>("");
  const toggleVisibility = (): void => setIsVisible(!isVisible);

  const formOpts = formOptions<LoginInformation>({
    defaultValues: {
      emailAddress: "",
      password: "",
    },
  });

  const form = useForm({
    ...formOpts,
    onSubmit: async ({ value }) => {
      // createUserMutation.mutate(
      //   {
      //     emailAddress: value.emailAddress,
      //     password: value.password
      //   }, 
      //   {
      //     onSuccess: (data,) => {
      //       console.log("Mutaion successful. Data is: ", data.data);
      //       setformSubmissionErrorMessage("");
      //     },
      //     onError: (error) => {
      //       console.log("errrrrror", error);
      //       // @ts-ignore
      //       setformSubmissionErrorMessage(error.response.data.message);
      //     }
      //   }
      // );
    }
  });
  const emailAddress = form.useStore((state) => state.values.emailAddress);
  const password = form.useStore((state) => state.values.password);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    e.stopPropagation();
    form.handleSubmit();
  };

  React.useEffect(() => {
    focusRef.current?.focus();
  }, []);

  return (
    <div>
      <p className="pb-2 text-xl font-medium">Account Portal</p>
      <p className="text-small text-default-500">Log in to your account to continue</p>
      <Spacer y={10} />
      {/* <div className="flex w-full items-center gap-4 py-2">
        <hr className="bg-divider border-none w-full h-divider flex-1" role="separator" />
        <p className="shrink-0 text-tiny text-default-500">OR</p>
        <hr className="bg-divider border-none w-full h-divider flex-1" role="separator" />
      </div> */}
      <Spacer y={20} />
      <form
        onSubmit={onSubmit}
      >
        <div>
          <form.Field
            name="emailAddress"
          >
            {
              (field) => {
                return (
                  <>
                    <Input 
                      type="text" 
                      disabled={createUserMutation.isPending}
                      variant="underlined" 
                      label="Email Address"
                      labelPlacement="outside"
                      placeholder="Enter your email"
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      ref={focusRef}
                    />
                    {field.state.meta.errors ? (
                      <em role="alert" className="">{field.state.meta.errors.join(', ')}</em>
                    ) : null}
                  </>
                )
              }
            }
          </form.Field>
          <Spacer y={25} />
          <form.Field
            name="password"
          >
            {
              (field) => {
                return (
                  <>
                    <Input
                      type={isVisible ? "text" : "password"}
                      disabled={createUserMutation.isPending}
                      variant="underlined"
                      label="Password"
                      labelPlacement="outside"
                      placeholder="Enter your password"
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      endContent={
                        <button className="focus:outline-none" type="button" onClick={toggleVisibility} aria-label="toggle password visibility">
                          {isVisible ? (
                            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                          ) : (
                            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                          )}
                        </button>
                      }
                    />
                    {field.state.meta.errors ? (
                      <em role="alert" className="">{field.state.meta.errors.join(', ')}</em>
                    ) : null}
                  </>
                )
              }
            }
          </form.Field>
        </div>
        <Spacer y={10} />
        <em style={{ width: "100%", height: 20, textAlign: "center", display: "block", color: "#f31260" }} role="alert" className="text-center text-small">{formSubmissionErrorMessage ? formSubmissionErrorMessage : ""}</em>
        <Spacer y={10} />
        <Button 
          type="submit"
          color="primary"
          fullWidth={true}
          disabled={createUserMutation.isPending || !emailAddress || !password}
          isDisabled={createUserMutation.isPending || !emailAddress || !password }
        >
          {!createUserMutation.isPending ? "Log In" : "Logging In..."}
        </Button>
        <Spacer y={18} />
        <p className="text-center text-small">
          Need to create an account?&nbsp;<Link href="#" size="sm">Contact Us</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;