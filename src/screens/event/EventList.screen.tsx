import React from 'react';
import { SafeAreaView, Text, Button } from 'react-native';
import { useNav } from 'src/hooks/useNav';
import { Spacing } from 'src/components/Spacing';

export const EventListScreen = () => {
  const { navigate } = useNav();

  return (
    <>
      <SafeAreaView>
        <Text>イベント一覧</Text>

        <Spacing />

        <Button title="イベント詳細へ" onPress={() => navigate('EventDetail')} />

        <Spacing />

        <Button title="参加イベント一覧" onPress={() => navigate('EntryEventList')} />
      </SafeAreaView>
    </>
  );
};
