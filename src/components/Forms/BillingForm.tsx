"use client";
import React from "react";
import { formOptions, useForm } from "@tanstack/react-form";
import Spacer from "@/components/Spacer";
import { Sanitize, Validate } from "@/utils/validate";
import Select from "@/components/Inputs/Dropdown";
// import { userTodoIds } from "@/services/query";

export interface BillingInformation {
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address: string;
  city: string; 
  zipcode: string;
  state: string;
};

export const stateNames: string[] = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
  "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas",
  "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota",
  "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey",
  "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon",
  "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah",
  "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
];

const BillingForm: React.FC = (): React.ReactElement => {
  const focusRef = React.useRef<HTMLInputElement>(null);
  // const todoIdsQuery = userTodoIds();

  // if ( todoIdsQuery.isPending ) {
  //   return <span>loading...</span>;
  // };

  // if ( todoIdsQuery.isError ) {
  //   return <span>there is an error!</span>;
  // };

  // return <> { todoIdsQuery.data.map((id, index) => <div key={index}>{id}</div>) } </>

  const formOpts = formOptions<BillingInformation>({
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      address: "",
      city: "",
      zipcode: "",
      state: "",
    },
  });

  const form = useForm({
    ...formOpts,
    onSubmit: async ({ value }) => {
      // Do something with form data
      console.log(value);
    }
  });

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
      <h3 className="text-[30px] sm:text-[34px] font-bold">Let's Get You Sorted With <br /> Billing Details 👋</h3>
      <Spacer y={40} />
      <p className="text-[16px] text-[#5A5A5A] mb-[30px]">* All information is required.</p>
      <Spacer y={10} />
      <form
        onSubmit={onSubmit}
      >
        <div>
          <form.Field
            name="email"
            validators={{
              onChange: ({ value }) => Validate().email(value),
            }}

          >
            {
              (field) => {
                return (
                  <>
                    <label className="block text-[16px] text-[#444444] mb-[11px]">Email</label>
                    <div className="relative flex w-[100%] h-[50px] bg-[#F6F6F6] items-center">
                      <input
                        className="w-[100%] h-[100%] bg-[#F6F6F6] pl-[20px] pr-[20px] text-[15px]"
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(Sanitize().email(e.target.value))}
                        ref={focusRef}
                      />
                    </div>
                    {field.state.meta.errors ? (
                      <em role="alert" className="">{field.state.meta.errors.join(', ')}</em>
                    ) : null}
                  </>
                )
              }
            }
          </form.Field>
          <Spacer y={30} />
          <div className="flex flex-row">
            <div className="w-full">
              <form.Field
                name="firstName"
                validators={{
                  onChange: ({ value }) => Validate().firstName(value),
                }}
              >
                {
                  (field) => (
                    <>
                      <label className="block text-[16px] text-[#444444] mb-[11px]">First Name</label>
                      <input
                        className="w-[100%] h-[50px] bg-[#F6F6F6] px-[20px] text-[15px]"
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                      />
                      {field.state.meta.errors ? (
                        <em role="alert" className="">{field.state.meta.errors.join(', ')}</em>
                      ) : null}
                    </>
                  )
                }
              </form.Field>
            </div>
            <div className="px-[10px]"></div>
            <div className="w-full">
              <form.Field
                name="lastName"
                validators={{
                  onChange: ({ value }) => Validate().lastName(value),
                }}
              >
                {
                  (field) => (
                    <>
                      <label className="block text-[16px] text-[#444444] mb-[11px]">Last Name</label>
                      <input
                        className="w-[100%] h-[50px] bg-[#F6F6F6] px-[20px] text-[15px]"
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                      />
                      {field.state.meta.errors ? (
                        <em role="alert" className="">{field.state.meta.errors.join(', ')}</em>
                      ) : null}
                    </>
                  )
                }
              </form.Field>
            </div>
          </div>
          <Spacer y={30} />
          <form.Field
            name="phoneNumber"
            validators={{
              onChange: ({ value }) => Validate().phoneNumber(value),
            }}
          >
            {
              (field) => (
                <>
                  <label className="block text-[16px] text-[#444444] mb-[11px]">Phone</label>
                  <div className="relative flex w-[100%] h-[50px] bg-[#F6F6F6] items-center">
                    <div className="absolute flex justify-center items-center w-[50px] h-[100%] text-[15px]">+1</div>
                    <input
                      className="w-[100%] h-[100%] bg-[#F6F6F6] pl-[50px] pr-[20px] text-[15px]"
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(Sanitize().phoneNumber(e.target.value))}
                    />
                  </div>
                  {field.state.meta.errors ? (
                    <em role="alert" className="">{field.state.meta.errors.join(', ')}</em>
                  ) : null}
                </>
              )
            }
          </form.Field>
          <Spacer y={30} />
          <form.Field
            name="address"
            validators={{
              onChange: ({ value }) => Validate().address(value),
            }}
          >
            {
              (field) => (
                <>
                  <label className="block text-[16px] text-[#444444] mb-[11px]">Address</label>
                  <input
                    className="w-[100%] h-[50px] bg-[#F6F6F6] px-[20px] text-[15px]"
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    placeholder="Street address, apartment, suite, floor, etc"
                  />
                  {field.state.meta.errors ? (
                    <em role="alert" className="">{field.state.meta.errors.join(', ')}</em>
                  ) : null}
                </>
              )
            }
          </form.Field>
          <Spacer y={30} />
          <form.Field
            name="city"
            validators={{
              onChange: ({ value }) => Validate().city(value),
            }}
          >
            {
              (field) => (
                <>
                  <input
                    className="w-[100%] h-[50px] bg-[#F6F6F6] px-[20px] text-[15px]"
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    placeholder="City"
                  />
                  {field.state.meta.errors ? (
                    <em role="alert" className="">{field.state.meta.errors.join(', ')}</em>
                  ) : null}
                </>
              )
            }
          </form.Field>
          <Spacer y={30} />
          <form.Field
            name="zipcode"
            validators={{
              onChange: ({ value }) => Validate().zipcode(value),
            }}
          >
            {
              (field) => (
                <>
                  <input
                    className="w-[100%] h-[50px] bg-[#F6F6F6] px-[20px] text-[15px]"
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(Sanitize().digit(e.target.value))}
                    placeholder="Zip"
                  />
                  {field.state.meta.errors ? (
                    <em role="alert" className="">{field.state.meta.errors.join(', ')}</em>
                  ) : null}
                </>
              )
            }
          </form.Field>
          <Spacer y={30} />
          <form.Field
            name="state"
            mode="array"
            validators={{
              onChange: ({ value }) => Validate().state(value),
            }}
          >
            {
              (stateField) => (
                <div>
                  <Select
                    field={stateField}
                    items={stateNames}
                  />
                  {stateField.state.meta.errors ? (
                    <em role="alert" className="">{stateField.state.meta.errors.join(', ')}</em>
                  ) : null}
                </div>
              )
            }
          </form.Field>
        </div>
        <Spacer y={56} />
        <button className="text-[#FFF] bg-[#1472B2] w-[295px] h-[54px] rounded-[30px]">
          To Checkout
        </button>
      </form>
    </div>
  );
};

export default BillingForm;