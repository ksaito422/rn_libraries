import React from 'react';
import { SafeAreaView, Text, Button } from 'react-native';
import { useNav } from 'src/hooks/useNav';

export const EventDetailScreen = () => {
  const { navigate } = useNav();

  return (
    <>
      <SafeAreaView>
        <Text>イベント詳細</Text>
        <Button title="イベント一覧へ" onPress={() => navigate('EventList')} />
      </SafeAreaView>
    </>
  );
};
