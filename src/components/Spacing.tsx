import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Spacings } from 'react-native-ui-lib';

export const Spacing = () => <View style={styles.margin} />;

const styles = StyleSheet.create({
  margin: {
    marginBottom: Spacings.s4,
  },
});
