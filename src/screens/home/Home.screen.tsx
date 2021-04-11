import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';

import { Avatar, Button } from 'react-native-ui-lib';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useNav } from 'src/hooks/useNav';
import { COLOR, FONT, FLEX } from 'src/styles';

import { CustomView } from 'src/components/CustomView';

export const HomeScreen = () => {
  const { navigate } = useNav();

  const storeData = async (value: string) => {
    try {
      await AsyncStorage.setItem('key', value);
    } catch (e) {
      console.log('Set error');
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('key');
      console.log(value);
    } catch (e) {
      console.log('Get error');
    }
  };

  const clear = async () => {
    try {
      await AsyncStorage.clear();
    } catch (e) {
      console.log('Clear error');
    }
  };

  return (
    <>
      <SafeAreaView>
        <CustomView>
          <View style={[FLEX.row]}>
            <Text style={FONT.medium}>ホーム</Text>
            <Avatar backgroundColor={COLOR.tertiary} label="A" onPress={() => navigate('Profile')} />
          </View>
          <Button
            backgroundColor="blue"
            label="保存"
            onPress={() => {
              storeData('save');
            }}
          />
          <Button
            backgroundColor="red"
            label="読み込む"
            onPress={() => {
              getData();
            }}
          />
          <Button
            backgroundColor="yellow"
            label="storageクリア"
            onPress={() => {
              clear();
            }}
          />
        </CustomView>
      </SafeAreaView>
    </>
  );
};
