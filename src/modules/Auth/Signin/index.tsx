import React from 'react';
import {Button, Flex, FormGenerator, HeaderScroll, Loading} from '@components';
import {AI, ButtonTypes, JC, Navigations} from '@types';
import {useForm} from 'react-hook-form';
import {
  defaultValues,
  fields,
  forgotPasswordTitle,
  headerProps,
  signupTitle,
  submitTitle,
} from './constants';
import {authStore} from '@stores';
import {observer} from 'mobx-react';
import {LogoIcon} from '@icons';
import {COLORS} from '@config/base';
import {navigate} from '@utils';

const Signin = () => {
  const {
    control,
    handleSubmit,
    errors,
    formState: {isValid},
    getValues,
    reset,
  } = useForm({
    reValidateMode: 'onChange',
    mode: 'onChange',
    defaultValues: defaultValues(),
  });

  const submit = () => {
    const values = getValues();
    reset();
    authStore.login(values);
  };

  return (
    <>
      <HeaderScroll
        bg={COLORS.BG.TRETIARY}
        headerProps={headerProps}
        containerBottom
        containerHor>
        <Flex full size={0.3} ai={AI.center} jc={JC.center}>
          <LogoIcon color={COLORS.PRIMARY.MAIN} sizeHeight={80} />
        </Flex>

        <FormGenerator control={control} errors={errors} fields={fields} />

        <Flex full ai={AI.flexEnd}>
          <Button
            type={ButtonTypes.EMPTY}
            size={16}
            click={() => navigate(Navigations.Auth_SignUp)}
            color={COLORS.PRIMARY.MAIN}
            title={forgotPasswordTitle}
            paddings={{top: 16, right: 0}}
          />
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
          click={() => navigate(Navigations.Auth_SignUp)}
          full
          styles={{marginTop: 10}}
          color={COLORS.PRIMARY.MAIN}
          title={signupTitle}
        />
      </HeaderScroll>

      <Loading show={authStore.loading} />
    </>
  );
};

export default observer(Signin);
