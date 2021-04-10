import React from 'react';
import { Text, Button } from 'react-native';

import { useNav } from 'src/hooks/useNav';

import { CustomView } from 'src/components/CustomView';

export const EventListScreen = () => {
  const { navigate } = useNav();

  return (
    <CustomView>
      <Button title="イベント詳細へ" onPress={() => navigate('EventDetail')} />
    </CustomView>
  );
};
