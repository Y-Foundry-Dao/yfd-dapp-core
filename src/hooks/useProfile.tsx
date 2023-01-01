import axios from 'axios';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { useEffect } from 'react';
import { profileState } from '@recoil/profile/atoms';
import {
  PATH_PROFILE,
  PATH_PROFILE_PFP,
  PATH_PROFILE_PFP_SUFFIX,
  PATH_PROFILE_SUFFIX
} from '@var/profiles';

export default function useProfile(address: any) {
  const [profile, setProfile] = useRecoilState(profileState);
  console.log('connected wallet address: ' + address);

  const profileUrl = PATH_PROFILE + address + PATH_PROFILE_SUFFIX;
  const profilePfpUrl = PATH_PROFILE_PFP + address + PATH_PROFILE_PFP_SUFFIX;
  console.log('profileUrl: ' + profileUrl);
  console.log('profilePfpUrl: ' + profilePfpUrl);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(profileUrl, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        if (response.data.profile) {
          setProfile((prevProfile) => ({
            ...prevProfile,
            ...response.data.profile
          }));
          if (response.data.profile.platform_preference) {
            const platformPreference =
              response.data.profile.platform_preference;
            const platformAddress =
              response.data.profile.platforms[platformPreference];
            setProfile((prevProfile) => ({
              ...prevProfile,
              platformAddress: platformAddress
            }));
          }
        } else {
          console.error('profile data missing');
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [profileUrl]);
  console.log('useProfile Loaded:', profile);
  return profile;
}
