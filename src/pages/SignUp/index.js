import React, { useRef, useState, useEffect } from 'react';
import { Image, Keyboard } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import logo from '~/assets/logo.png';
import Background from '~/components/Background';

import { signUpRequest } from '~/store/modules/auth/actions';

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
  const dispatch = useDispatch();

  const emailRef = useRef();
  const passwordRef = useRef();
  const refScrollingContainer = useRef();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loading = useSelector(state => state.auth.loading);

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

  function handleSubmit() {
    dispatch(signUpRequest(name, email, password));
  }

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
              value={name}
              onChangeText={setName}
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
              value={email}
              onChangeText={setEmail}
            />

            <FormInput
              icon="lock-outline"
              secureTextEntry
              placeholder="Digite sua senha"
              ref={passwordRef}
              value={password}
              onChangeText={setPassword}
            />

            <SubmitButton loading={loading} onPress={handleSubmit}>
              Criar conta
            </SubmitButton>
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

SignUp.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
