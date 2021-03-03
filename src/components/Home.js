import React from 'react';
import {View, Text} from 'react-native';
import i18n from 'i18next';
import {useTranslation, initReactI18next} from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        'welcome to React': 'welcome to React and react-18next',
      },
    },
  },
  lng: 'en',
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false,
  },
});

export const Home = () => {
  const {t} = useTranslation();

  return (
    <>
      <View>
        <Text>{t('welcome to React')}</Text>
      </View>
    </>
  );
};
