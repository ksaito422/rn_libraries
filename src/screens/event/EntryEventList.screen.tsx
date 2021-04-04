import React from 'react';
import { SafeAreaView, Text, Button } from 'react-native';
import { useNav } from 'src/hooks/useNav';

export const EntryEventListScreen = () => {
  const { navigate } = useNav();

  return (
    <>
      <SafeAreaView>
        <Text>参加イベント一覧</Text>
        <Button title="イベント一覧" onPress={() => navigate('EventList')} />
      </SafeAreaView>
    </>
  );
};
