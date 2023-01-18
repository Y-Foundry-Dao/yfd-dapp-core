import axios from 'axios';
import { useRecoilState } from 'recoil';
import { useEffect } from 'react';
import { profileState } from '@recoil/profile/atoms';
import { PATH_PROFILE, PATH_PROFILE_SUFFIX } from '@var/profiles';

export default function useProfile(address: string) {
  const [profile, setProfile] = useRecoilState(profileState);

  const profileUrl = PATH_PROFILE + address + PATH_PROFILE_SUFFIX;

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
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [profileUrl, setProfile]);

  return profile;
}
