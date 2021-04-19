import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';

import { Avatar } from 'react-native-ui-lib';

import { useNav } from 'src/hooks/useNav';
import { COLOR, FONT, FLEX } from 'src/styles';

import { CustomView } from 'src/components/CustomView';
import { ErrorBoundary } from 'src/app/ErrorBoundary';

export const HomeScreen = () => {
  const { navigate } = useNav();

  const aqua = 'aqua';

  return (
    <>
      <SafeAreaView>
        <CustomView>
          <ErrorBoundary>
            <View style={[FLEX.row]}>
              <Text style={FONT.medium}>ホーム</Text>
              <Avatar backgroundColor={COLOR.tertiary} label="A" onPress={() => navigate('Profile')} />
            </View>
            <Text>{aqua}</Text>
            aaa
          </ErrorBoundary>
        </CustomView>
      </SafeAreaView>
    </>
  );
};
