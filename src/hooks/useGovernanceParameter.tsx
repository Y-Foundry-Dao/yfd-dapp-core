import { useEffect, useState } from 'react';
import queryGovernanceParameter from 'utilities/messagesQuery/forge/queryGovernanceParameter';
import { FORGE_TEST } from 'utilities/variables/contracts';
import useMsg from './useMsg';

const useGovernanceParameter = (governanceParameter: string) => {
  const [governanceParameterDetails, setGovernanceParameterDetails] =
    useState<any>({});
  const { queryMsg } = useMsg();

  const getGovernanceParameterDetails = async (name: string) => {
    const response = await queryMsg(FORGE_TEST, queryGovernanceParameter(name));
    return response;
  };

  const setGovernanceParameterDetailsToState = async () => {
    const governanceParameterDetailsResponse =
      await getGovernanceParameterDetails(governanceParameter);
    //console.log(governanceParameterDetailsResponse);
    setGovernanceParameterDetails(governanceParameterDetailsResponse);
  };

  useEffect(() => {
    setGovernanceParameterDetailsToState();
  }, []);

  return {
    governanceParameterDetails
  };
};

export default useGovernanceParameter;
