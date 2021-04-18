import React from 'react';
import { SafeAreaView, View, Text, FlatList } from 'react-native';

import { Avatar } from 'react-native-ui-lib';

import { useNav } from 'src/hooks/useNav';
import { useTodo } from 'src/hooks/useTodo';
import { COLOR, FONT, FLEX } from 'src/styles';

import { CustomView } from 'src/components/CustomView';

export const HomeScreen: React.FC = () => {
  const { navigate } = useNav();

  const { todo, isLoading, isError } = useTodo();

  // console.log(todo);
  // console.log(isLoading);
  // console.log('error', isError);

  if (isError) {
    return <Text>failed to load</Text>;
  }

  const renderItem = ({ item }: any) => {
    return (
      <View>
        <Text>・{item.task}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <CustomView>
        {isLoading ? (
          <Text>loading...</Text>
        ) : (
          <>
            <View style={[FLEX.row]}>
              <Text style={FONT.medium}>ホーム</Text>
              <Avatar backgroundColor={COLOR.tertiary} label="A" onPress={() => navigate('Profile')} />
            </View>
            <View>
              <Text style={{ fontSize: 20, marginBottom: 8 }}>タスク</Text>
              <FlatList data={todo.data} renderItem={renderItem} />
            </View>
          </>
        )}
      </CustomView>
    </SafeAreaView>
  );
};
