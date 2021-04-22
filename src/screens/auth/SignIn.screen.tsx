import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';

import { Avatar } from 'react-native-ui-lib';
import { useRecoilState } from 'recoil';

import { useNav } from 'src/hooks/useNav';
import { COLOR, FONT, FLEX } from 'src/styles';

import { isSignedAtom } from 'src/recoil/isSigned';

import { CustomView } from 'src/components/CustomView';

export const SignInScreen = () => {
  const { navigate } = useNav();
  const [isSignedIn, setIsSignedIn] = useRecoilState(isSignedAtom);

  return (
    <>
      <SafeAreaView>
        <CustomView>
          <View style={[FLEX.row]}>
            <Text style={FONT.medium}>ログイン</Text>
            <Avatar backgroundColor={COLOR.tertiary} label="A" onPress={() => navigate('Profile')} />
          </View>
          <View>
            <Text>{isSignedIn}</Text>
            <TouchableOpacity
              onPress={() => {
                setIsSignedIn(!isSignedIn);
              }}>
              <Text>SignIn</Text>
            </TouchableOpacity>
          </View>
        </CustomView>
      </SafeAreaView>
    </>
  );
};
