import React from 'react';
import { SafeAreaView, Text, Button } from 'react-native';
import { useNav } from 'src/hooks/useNav';

export const EventListScreen = () => {
  const { navigate } = useNav();

  return (
    <>
      <SafeAreaView>
        <Text>イベント一覧</Text>
        <Button title="ホームへ" onPress={() => navigate('Home')} />
        <Button title="イベント詳細へ" onPress={() => navigate('EventDetail')} />
        <Button title="参加イベント一覧" onPress={() => navigate('EntryEventList')} />
      </SafeAreaView>
    </>
  );
};
