import React from 'react';
import { useForm } from 'react-hook-form';
import type { SubmitHandler, SubmitErrorHandler } from 'react-hook-form';
import { useSubmit } from '@remix-run/react';
import { yupResolver } from '@hookform/resolvers/yup';
import CreateUser from '~/user/components/CreateUser';
import type { UserInput } from '~/user/models';
import schema from '~/user/utils/form';

/**
 * Business logic for creating a user
 */
function CreateUserContainer() {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors, isValid, isSubmitted, isSubmitting, isValidating },
  } = useForm<UserInput>({
    resolver: yupResolver(schema),
  });

  const handleAction = useSubmit();

  // must have user interaction AND be invalid before we show errors
  const hasErrors = isSubmitted && !isValid;

  // disable submit if we are validating or submitting
  const disabled = isValidating || isSubmitting;

  /**
   * Callback for submitting data, called only if form is valid
   */
  const onSubmit: SubmitHandler<UserInput> = (data) => {
    // calling the useSubmit hook so we can trigger the route action
    handleAction(data, { method: 'POST' });
  };

  /**
   * Callback for submitting invalid data
   */
  const onInvalid: SubmitErrorHandler<UserInput> = (err) => console.log(err);

  return (
    <CreateUser
      register={register}
      onSubmit={handleSubmit(onSubmit, onInvalid)}
      errors={errors}
      hasErrors={hasErrors}
      disabled={disabled}
    />
  );
}

export default CreateUserContainer;
