import React, { useRef, useEffect } from 'react';
import { Image, Keyboard } from 'react-native';

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

export default function SignUp({ navigation }) {
  const emailRef = useRef();
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
              icon="person-outline"
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Nome completo"
              blurOnSubmit={false}
              returnKeyType="next"
              onSubmitEditing={() => emailRef.current.focus()}
            />

            <FormInput
              icon="mail-outline"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Digite seu email"
              ref={emailRef}
              blurOnSubmit={false}
              returnKeyType="next"
              onSubmitEditing={() => passwordRef.current.focus()}
            />

            <FormInput
              icon="lock-outline"
              secureTextEntry
              placeholder="Digite sua senha"
              ref={passwordRef}
            />

            <SubmitButton onPress={handleSubmit}>Acessar</SubmitButton>
          </Form>
          <SignLink
            onPress={() => {
              navigation.navigate('SignIn');
            }}
          >
            <SignLinkText>Já possuo uma conta</SignLinkText>
          </SignLink>
        </Container>
      </ScrollingContainer>
    </Background>
  );
}
