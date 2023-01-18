import { atom } from 'recoil';

type Profile = {
  name: string;
  address: string;
  platform_preference: string;
  platforms: Array<{
    email: string;
    keybase: string;
    instagram: string;
    twitter: string;
    discord: string;
    telegram: string;
    github: string;
  }>;
};

export type dAppConfig = {
  snow: boolean;
};

export const snowState = atom({
  key: 'snowState',
  default: false
});

export const sparkState = atom({
  key: 'sparkState',
  default: false
});

export const profileState = atom<Profile>({
  key: 'profileState',
  default: {
    name: '',
    address: '',
    platform_preference: '',
    platforms: [
      {
        email: '',
        keybase: '',
        instagram: '',
        twitter: '',
        discord: '',
        telegram: '',
        github: ''
      }
    ]
  }
});
