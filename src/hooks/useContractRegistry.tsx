import { CONTRACT_REGISTRY } from 'utilities/variables';
import { terra } from 'utilities/lcd';
import queryRegistryMsg from 'utilities/messagesQuery/registry';

const useContractRegistry = () => {
  const queryRegistry = async () => {
    try {
      const newQuery = queryRegistryMsg();
      return await terra.wasm.contractQuery(CONTRACT_REGISTRY, newQuery);
    } catch (error) {
      console.log(error);
    }
  };

  return { queryRegistry };
};

export default useContractRegistry;
