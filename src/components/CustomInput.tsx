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
  <TextInput value={value} editable={editable} onChangeText={onChangeText} placeholder={placeholder} />
);

const styles = StyleSheet.create({
  margin: {
    marginBottom: Spacings.s4,
  },
});
