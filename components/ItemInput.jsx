import React from 'react';
import { StyleSheet } from 'react-native';
import { Item, Input, Label } from 'native-base';
export default function ItemInput({ title, type, setFunc }) {
  return (
    <Item floatingLabel last>
      <Label style={styles.label}>{title}</Label>
      <Input
        style={styles.input}
        secureTextEntry={type == 'password' ? true : false}
        onChangeText={(text) => {
          setFunc(text);
        }}
      />
    </Item>
  );
}

const styles = StyleSheet.create({
  label: {
    color: 'gray',
  },
  input: {
    color: 'black',
  },
});
