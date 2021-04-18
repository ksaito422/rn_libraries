import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';

import { useNav } from 'src/hooks/useNav';
import { useTodo } from 'src/hooks/useTodo';
import { FLEX } from 'src/styles';

import { CustomInput } from 'src/components/CustomInput';
import { CustomView } from 'src/components/CustomView';

export const ProfileScreen = ({ navigation }: any) => {
  const { navigate } = useNav();

  const { todo, isLoading, isError } = useTodo();

  console.log(todo);

  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [tel, setTel] = useState('');
  const [is_edit, setIsEdit] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <Button onPress={() => setIsEdit(!is_edit)} title={is_edit ? '取り消す' : '編集'} />,
    });
  });

  return (
    <CustomView style={FLEX.flex}>
      <View style={[FLEX.flex]}>
        <View style={[FLEX.flex, { justifyContent: 'space-evenly' }]}>
          <Text>氏名</Text>
          <CustomInput value={name} editable={is_edit} onChangeText={(e) => setName(e)} placeholder="氏名" />
        </View>

        <View style={[FLEX.flex, { justifyContent: 'space-evenly' }]}>
          <Text>メールアドレス</Text>
          <CustomInput value={mail} editable={is_edit} onChangeText={(e) => setMail(e)} placeholder="メールアドレス" />
        </View>

        <View style={[FLEX.flex, { justifyContent: 'space-evenly' }]}>
          <Text>電話番号</Text>
          <CustomInput value={tel} editable={is_edit} onChangeText={(e) => setTel(e)} placeholder="電話番号" />
        </View>
      </View>
      <View style={[FLEX.flex, { flex: 1, alignItems: 'center', justifyContent: 'center' }]}>
        <Button
          title="登録"
          onPress={() => {
            setIsEdit(false), navigate('Home');
          }}
        />
      </View>
    </CustomView>
  );
};
