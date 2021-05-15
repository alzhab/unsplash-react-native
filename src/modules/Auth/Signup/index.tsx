import React from 'react';
import {observer} from 'mobx-react';
import {Button, Flex, FormGenerator, HeaderScroll, Loading} from '@components';
import {ButtonTypes, Navigations} from '@types';
import {useForm} from 'react-hook-form';
import {COLORS} from '@config/base';
import {
  defaultValues,
  fields,
  headerProps,
  signinTitle,
  submitTitle,
} from './constants';
import {authStore} from '@stores';
import {navigate} from '@utils';

const Signup = () => {
  const {
    control,
    handleSubmit,
    errors,
    formState: {isValid},
    getValues,
  } = useForm({
    reValidateMode: 'onChange',
    mode: 'onChange',
    defaultValues: defaultValues(),
  });

  const submit = () => {
    const values = getValues();
    authStore.signup(values);
  };

  return (
    <>
      <HeaderScroll headerProps={headerProps} containerBottom containerHor>
        <Flex full size={1}>
          <FormGenerator control={control} errors={errors} fields={fields} />
        </Flex>

        <Button
          type={isValid ? ButtonTypes.PRIMARY : ButtonTypes.DISABLED}
          size={16}
          click={handleSubmit(submit)}
          full
          title={submitTitle}
        />
        <Button
          type={ButtonTypes.EMPTY}
          size={16}
          click={() => navigate(Navigations.Auth_SignIn)}
          full
          styles={{marginTop: 10}}
          color={COLORS.PRIMARY.MAIN}
          title={signinTitle}
        />
      </HeaderScroll>

      <Loading show={authStore.loading} />
    </>
  );
};

export default observer(Signup);
