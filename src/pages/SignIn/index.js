import React, { useRef, useEffect, useState } from 'react';
import { Image, Keyboard } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import logo from '~/assets/logo.png';

import Background from '~/components/Background';
import { singInRequest } from '~/store/modules/auth/actions';

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
  const dispatch = useDispatch();
  const passwordRef = useRef();
  const refScrollingContainer = useRef();

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
    dispatch(singInRequest(email, password));
  }

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
              value={email}
              onChangeText={setEmail}
            />

            <FormInput
              icon="lock-outline"
              secureTextEntry
              placeholder="Digite sua senha"
              ref={passwordRef}
              returnKeyType="send"
              value={password}
              onChangeText={setPassword}
            />
            <SubmitButton loading={loading} onPress={handleSubmit}>
              Acessar
            </SubmitButton>
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
