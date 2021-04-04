import React from 'react';
import { SafeAreaView, Text, Button } from 'react-native';
import { useNav } from 'src/hooks/useNav';

export const ProfileScreen = () => {
  const { navigate } = useNav();

  return (
    <>
      <SafeAreaView>
        <Text>Profile</Text>
        <Button title="ホームへ" onPress={() => navigate('Home')} />
      </SafeAreaView>
    </>
  );
};
