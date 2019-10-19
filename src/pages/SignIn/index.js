import React from 'react';
import { Image, Platform, StatusBar } from 'react-native';

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

export default function SignIn() {
  function defineStatusBar() {
    if (Platform.OS === 'android' && Platform.Version > 22) {
      return (
        <StatusBar
          translucent
          barStyle="dark-content"
          backgroundColor="transparent"
        />
      );
    }

    return <StatusBar translucent backgroundColor="rgba(0, 0, 0, 0.1)" />;
  }

  return (
    <Background>
      {defineStatusBar()}
      <ScrollingContainer>
        <Container>
          <Image source={logo} />
          <Form>
            <FormInput
              icon="mail-outline"
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Digite seu email"
            />

            <FormInput
              icon="lock-outline"
              secureTextEntry
              placeholder="Digite sua senha"
            />

            <SubmitButton onPress={() => {}}>Acessar</SubmitButton>
          </Form>
          <SignLink onPress={() => {}}>
            <SignLinkText>Criar conta gratuita</SignLinkText>
          </SignLink>
        </Container>
      </ScrollingContainer>
    </Background>
  );
}
