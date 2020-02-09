import React, { useContext } from 'react';
import Styled from 'styled-components/native';
import { ScrollView } from "react-native"

import { TodoListContext } from '~/Context/TodoListContext';

const Input = Styled.TextInput`
  width: 100%;
  height: 40px;
  background-color: #FFF;
  padding: 0px 8px;
`;

interface Props {
  hideTodoInput: () => void;
}

const TextInput = ({ hideTodoInput }: Props) => {
  const { addTodoList } = useContext<ITodoListContext>(TodoListContext);
  return (
    <Input
      autoFocus={true}
      autoCapitalize="none"
      autoCorrect={false}
      placeholder="입력해라 오바"
      returnKeyType="go"
      onSubmitEditing={({ nativeEvent }) => {
        addTodoList(nativeEvent.text);
        hideTodoInput();
      }}
    />
  );
};

export default TextInput;
