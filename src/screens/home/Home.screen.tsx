import React from 'react';
import { SafeAreaView, View, Text, Button } from 'react-native';
import { useNav } from 'src/hooks/useNav';
import { COLOR, FONT, FLEX } from 'src/styles';
import { Spacing } from 'src/components/Spacing';
import { Avatar } from 'react-native-ui-lib';

export const HomeScreen = () => {
  const { navigate } = useNav();

  return (
    <>
      <SafeAreaView>
        <View style={FLEX.row}>
          <Text style={FONT.medium}>ホーム</Text>
          <Avatar backgroundColor={COLOR.tertiary} label="A" onPress={() => navigate('Profile')} />
        </View>
      </SafeAreaView>
    </>
  );
};
