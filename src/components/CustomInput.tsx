import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Spacings } from 'react-native-ui-lib';

type Props = {
  value: string | undefined;
  editable: boolean;
  placeholder: string;
  onChangeText: (e: string) => void;
};

export const CustomInput = ({ value, editable, placeholder, onChangeText }: Props) => (
  <TextInput
    value={value}
    editable={editable}
    onChangeText={onChangeText}
    placeholder={placeholder}
    style={{ height: 30, borderStyle: 'solid', borderColor: '#c9c9c9', borderWidth: 1, borderRadius: 5 }}
  />
);

const styles = StyleSheet.create({
  margin: {
    marginBottom: Spacings.s4,
  },
});
