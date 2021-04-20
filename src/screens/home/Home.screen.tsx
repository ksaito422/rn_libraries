import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';

import { Avatar } from 'react-native-ui-lib';
import LinearGradient from 'react-native-linear-gradient';

import { useNav } from 'src/hooks/useNav';
import { COLOR, FONT, FLEX } from 'src/styles';

import { CustomView } from 'src/components/CustomView';

export const HomeScreen = () => {
  const { navigate } = useNav();

  return (
    <>
      <LinearGradient
        // colors={['#cfd9df', '#e2ebf0']}
        // colors={['#f5f7fa', '#c3cfe2']}
        colors={['#eee', '#ccc', '#aaa']}
        start={{ x: 0.0, y: 0.0 }}
        end={{ x: 1, y: 1 }}
        style={{ flex: 1 }}>
        <SafeAreaView>
          <CustomView>
            <View style={[FLEX.row]}>
              <Text style={FONT.medium}>ホーム</Text>
              <Avatar backgroundColor={COLOR.tertiary} label="A" onPress={() => navigate('Profile')} />
            </View>
          </CustomView>
        </SafeAreaView>
      </LinearGradient>
    </>
  );
};
