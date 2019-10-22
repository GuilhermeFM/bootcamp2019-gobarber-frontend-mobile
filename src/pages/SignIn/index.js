import React, { useRef, useEffect } from 'react';
import { Image, Keyboard } from 'react-native';
import PropTypes from 'prop-types';

import logo from '~/assets/logo.png';

import Background from '~/components/Background';

import {
  ScrollingContainer,
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

export default function SignIn({ navigation }) {
  const passwordRef = useRef();
  const refScrollingContainer = useRef();

  useEffect(() => {
    const keyboardDidShowListenner = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        refScrollingContainer.current.scrollToEnd({ animated: true });
      }
    );
    return () => {
      keyboardDidShowListenner.remove();
    };
  }, []);

  function handleSubmit() {}

  return (
    <Background>
      <ScrollingContainer ref={refScrollingContainer}>
        <Container>
          <Image source={logo} />
          <Form>
            <FormInput
              icon="mail-outline"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Digite seu email"
              blurOnSubmit={false}
              returnKeyType="next"
              onSubmitEditing={() => passwordRef.current.focus()}
            />

            <FormInput
              icon="lock-outline"
              secureTextEntry
              placeholder="Digite sua senha"
              ref={passwordRef}
              returnKeyType="send"
            />
            <SubmitButton onPress={handleSubmit}>Acessar</SubmitButton>
          </Form>

          <SignLink
            onPress={() => {
              navigation.navigate('SignUp');
            }}
          >
            <SignLinkText>Criar conta gratuita</SignLinkText>
          </SignLink>
        </Container>
      </ScrollingContainer>
    </Background>
  );
}

SignIn.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
