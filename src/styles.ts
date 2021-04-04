import { Dimensions, StyleSheet } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

const { width, height } = Dimensions.get('window');
const wp = (percentage: number) => width * percentage;
const hp = (percentage: number) => height * percentage;

export const WINDOW = {
  height,
  width,
};

export const SIZE = {
  radius: 8,
  paddingHorizontal: wp(0.04),
  paddingVertical: hp(0.02),
};

export const FONTSIZE = {
  tiny: 14,
  small: RFPercentage(2.8),
  medium: RFPercentage(3.6),
  large: RFPercentage(4.5),
};

export const SHADOW = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
};

export const COLOR = {
  gray: '#555',
};

export const FLEX = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  flex: {
    flex: 1,
  },
});

export const BOX = StyleSheet.create({
  ph: {
    paddingHorizontal: SIZE.paddingHorizontal,
  },
  pv: {
    paddingVertical: SIZE.paddingVertical,
  },
  mh: {
    marginHorizontal: SIZE.paddingHorizontal,
  },
  mv: {
    marginVertical: SIZE.paddingVertical,
  },
});

export const FONT = StyleSheet.create({
  tiny: {
    fontSize: FONTSIZE.tiny,
  },
  small: {
    fontSize: FONTSIZE.small,
  },
  medium: {
    fontSize: FONTSIZE.medium,
  },
  large: {
    fontSize: FONTSIZE.large,
  },
});
