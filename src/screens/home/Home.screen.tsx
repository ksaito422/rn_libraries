import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';

import { Avatar } from 'react-native-ui-lib';

import { useNav } from 'src/hooks/useNav';
import { COLOR, FONT, FLEX } from 'src/styles';

import { CustomView } from 'src/components/CustomView';

export const HomeScreen = () => {
  const { navigate } = useNav();

  return (
    <>
      <SafeAreaView>
        <CustomView>
          <View style={[FLEX.row]}>
            <Text style={FONT.medium}>ホーム</Text>
            <Avatar backgroundColor={COLOR.tertiary} label="A" onPress={() => navigate('Profile')} />
          </View>
        </CustomView>
      </SafeAreaView>
    </>
  );
};
