import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';

import { useNav } from 'src/hooks/useNav';

import { CustomInput } from 'src/components/CustomInput';
import { CustomView } from 'src/components/CustomView';
import { Spacing } from 'src/components/Spacing';

export const ProfileScreen = () => {
  const { navigate } = useNav();

  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [tel, setTel] = useState('');

  return (
    <CustomView>
      <View>
        <Text>氏名</Text>
        <CustomInput value={name} editable onChangeText={(e) => setName(e)} placeholder="氏名" />

        <Spacing />

        <Text>メールアドレス</Text>
        <CustomInput value={mail} editable onChangeText={(e) => setMail(e)} placeholder="メールアドレス" />

        <Spacing />

        <Text>電話番号</Text>
        <CustomInput value={tel} editable onChangeText={(e) => setTel(e)} placeholder="電話番号" />

        <Spacing />
      </View>
      <Button title="登録" onPress={() => console.log(name)} />
    </CustomView>
  );
};
