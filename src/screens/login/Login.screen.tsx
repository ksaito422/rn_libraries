import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';

import { Button } from 'react-native-ui-lib';

import { FONT } from 'src/styles';

import { useDispatch } from 'react-redux';
import { login } from 'src/reducers/authSlice';

import { CustomView } from 'src/components/CustomView';

export const LoginScreen = () => {
  const dispatch = useDispatch();

  return (
    <>
      <SafeAreaView>
        <CustomView>
          <View>
            <Text style={FONT.medium}>Login</Text>
          </View>
          <View>
            <Button label="login" onPress={() => dispatch(login())} />
          </View>
        </CustomView>
      </SafeAreaView>
    </>
  );
};
