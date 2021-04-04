import React from 'react';
import { SafeAreaView, Text, Button } from 'react-native';
import { useNav } from 'src/hooks/useNav';

export const HomeScreen = () => {
  const { navigate } = useNav();

  return (
    <>
      <SafeAreaView>
        <Text>Home</Text>
        <Button title="マイページへ" onPress={() => navigate('Profile')} />
        <Button title="イベント一覧へ" onPress={() => navigate('EventList')} />
      </SafeAreaView>
    </>
  );
};
