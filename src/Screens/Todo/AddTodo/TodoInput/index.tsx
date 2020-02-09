import React from 'react';
import Styled from 'styled-components/native';

import Background from './Background';
import TextInput from './TextInput';

const Container = Styled.KeyboardAvoidingView`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  justify-content: flex-end;
`;

const ButtonContainer = Styled.TouchableOpacity`
  box-shadow: 4px 4px 8px #999;
`;

interface Props {
  hideTodoInput: () => void;
}

const TodoInput = ({ hideTodoInput }: Props) => {
  return (
    <Container behavior="padding">
      <Background onPress={hideTodoInput} />
      <TextInput hideTodoInput={hideTodoInput} />
    </Container>
  );
};

export default TodoInput;
