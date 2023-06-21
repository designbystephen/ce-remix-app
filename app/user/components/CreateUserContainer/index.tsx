import React from 'react';
import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import CreateUser from '../CreateUser';

export type UserInput = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

/**
 * Business logic for creating a user
 */
function CreateUserContainer() {
  const {
    register,
    handleSubmit,
    // watch,
    formState: {
      // errors,
      isValid,
    },
  } = useForm<UserInput>();

  const onSubmit: SubmitHandler<UserInput> = (data) => console.log(data);

  return (
    <CreateUser
      register={register}
      onSubmit={handleSubmit(onSubmit)}
      hasErrors={!isValid}
    />
  );
}

export default CreateUserContainer;
