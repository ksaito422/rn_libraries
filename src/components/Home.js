import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';

export const Home = () => {
  const [data, setData] = useState(['A', 'B', 'C']);

  return (
    <>
      <View>
        <View style={styles.title}>
          <Text>Home</Text>
        </View>
        <SwipeListView
          data={data}
          renderItem={({item, index}) => {
            return (
              <View style={styles.list} key={index}>
                <Text>{item}</Text>
              </View>
            );
          }}
          renderHiddenItem={(text) => (
            <View style={styles.left}>
              <View>
                <Text>Left</Text>
              </View>
            </View>
          )}
          leftOpenValue={75}
          disableLeftSwipe
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 24,
  },
  list: {
    backgroundColor: '#f0f0f0',
    height: 100,
  },
  hidden: {
    height: 100,
  },
  left: {
    height: 100,
    backgroundColor: 'red',
  },
  right: {
    backgroundColor: 'blue',
  },
});
