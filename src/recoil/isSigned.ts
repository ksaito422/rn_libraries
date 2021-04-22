import { atom, selector } from 'recoil';

export const isSignedAtom = atom({
  key: 'isSignedAtom',
  default: false,
});

export const isSignedSelector = selector({
  key: 'isSignedSelector',
  get: ({ get }) => get(isSignedAtom),
});
