import useContract from 'hooks/useContractDGSF';
import queryPositions from 'utilities/messagesQuery/positions';
import queryMsgPositionState from 'utilities/messagesQuery/positionState';

const useQuery = () => {
  const { queryMsg } = useContract();
  const queryAllPositions = async (contract: string) => {
    try {
      const newQuery = queryPositions();
      return await queryMsg(contract, newQuery).then((result) => {
        return result;
      });
    } catch (error) {
      console.log(error);
    }
  };
  const queryPositionState = async (position: string, contract: string) => {
    try {
      const newQuery = queryMsgPositionState(position);
      return await queryMsg(contract, newQuery).then((result) => {
        return result;
      });
    } catch (error) {
      console.log(error);
    }
  };
  return {
    queryAllPositions,
    queryPositionState
  };
};

export default useQuery;
