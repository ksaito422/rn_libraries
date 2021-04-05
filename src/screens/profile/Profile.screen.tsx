import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNav } from 'src/hooks/useNav';

export const ProfileScreen = () => {
  const { navigate } = useNav();

  return (
    <>
      <View>
        <Text>Profile</Text>
        <Button title="ホームへ" onPress={() => navigate('Home')} />
      </View>
    </>
  );
};
