import styled from 'styled-components/native';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
`;

export const ScrollingContainer = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
    showsVerticalScrollIndicator: false,
    padding: 30,
  },
})`
  align-self: stretch;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;

  align-self: center;
  margin-top: 54px;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
`;

export const LogoutButton = styled(Button)`
  margin-top: 10px;
  background: #f64c75;
`;

export const Separator = styled.View`
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
  margin: 20px 0 30px;
`;
