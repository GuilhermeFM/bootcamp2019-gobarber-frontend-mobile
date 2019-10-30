import React, { useRef, useState, useEffect } from 'react';
import { Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';

import {
  ScrollingContainer,
  Container,
  Title,
  Form,
  FormInput,
  Separator,
  SubmitButton,
} from './styles';

export default function Profile() {
  const emailRef = useRef();
  const oldPasswordRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function handleSubmit() {}

  return (
    <Background>
      <ScrollingContainer>
        <Container>
          <Title>Meu Perfil</Title>

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
              onSubmitEditing={() => oldPasswordRef.current.focus()}
              value={email}
              onChangeText={setEmail}
            />

            <Separator />

            <FormInput
              icon="lock-outline"
              secureTextEntry
              placeholder="Digite sua senha antiga"
              ref={oldPasswordRef}
              blurOnSubmit={false}
              returnKeyType="next"
              onSubmitEditing={() => passwordRef.current.focus()}
              value={oldPassword}
              onChangeText={setOldPassword}
            />

            <FormInput
              icon="lock-outline"
              secureTextEntry
              placeholder="Digite sua nova senha"
              ref={passwordRef}
              blurOnSubmit={false}
              returnKeyType="next"
              onSubmitEditing={() => confirmPasswordRef.current.focus()}
              value={password}
              onChangeText={setPassword}
            />

            <FormInput
              icon="lock-outline"
              secureTextEntry
              placeholder="Confirme sua senha"
              ref={confirmPasswordRef}
              returnKeyType="send"
              onSubmitEditing={handleSubmit}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />

            <SubmitButton onPress={handleSubmit}>Atualizar perfil</SubmitButton>
          </Form>
        </Container>
      </ScrollingContainer>
    </Background>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Meu perfil',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="person" size={20} color={tintColor} />
  ),
};
