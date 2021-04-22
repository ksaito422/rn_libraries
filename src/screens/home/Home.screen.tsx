import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';

import { Avatar } from 'react-native-ui-lib';
import { useRecoilValue } from 'recoil';

import { useNav } from 'src/hooks/useNav';
import { COLOR, FONT, FLEX } from 'src/styles';

import { CustomView } from 'src/components/CustomView';
import { isSignedSelector } from 'src/recoil/isSigned';

export const HomeScreen = () => {
  const { navigate } = useNav();
  const isSignedIn = useRecoilValue(isSignedSelector);

  console.log(isSignedIn);

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
