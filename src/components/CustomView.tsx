import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Spacings } from 'react-native-ui-lib';

type Props = {
  children: React.ReactNode;
  style?: any;
};

export const CustomView = ({ children, style }: Props) => <View style={[styles.margin, style]}>{children}</View>;

const styles = StyleSheet.create({
  margin: {
    margin: Spacings.s4,
  },
});
