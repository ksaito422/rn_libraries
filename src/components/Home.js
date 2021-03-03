import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import i18n from 'i18next';
import {useTranslation, initReactI18next} from 'react-i18next';
import enJson from '../i18n/en.json';
import jaJson from '../i18n/ja.json';

i18n.use(initReactI18next).init({
  resources: {
    // インポートした言語ファイルを設定
    // 辞書情報
    en: {translation: enJson},
    ja: {translation: jaJson},
  },
  lng: 'ja', // 初期設定した言語
  fallbackLng: 'ja', // 選択した言語に関する辞書情報がない時に、かわりに表示する言語

  interpolation: {
    escapeValue: false,
  },
});

export const Home = () => {
  const [lang, setLang] = useState('ja');

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  const {t, i18n} = useTranslation();

  return (
    <>
      <View>
        <Text>{t('おはよう')}</Text>
        <TouchableOpacity
          onPress={() => {
            setLang(lang === 'ja' ? 'en' : 'ja');
          }}>
          <Text>{t('言語を切り替え')}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
