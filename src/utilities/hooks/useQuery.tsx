import useContract from './useContract';
import queryPosition from 'utilities/messagesQuery/position';

const useQuery = () => {
  const { queryMsg } = useContract();
  const queryPositionFromStorage = async (contract: string) => {
    try {
      if (localStorage.getItem('position_idx') !== null) {
        const position_idx: string | null =
          localStorage.getItem('position_idx');
        const newQuery = queryPosition(position_idx);
        await queryMsg(contract, newQuery).then((result) => {
          console.log('Open Position:', result);
          return result;
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return {
    queryPositionFromStorage
  };
};

export default useQuery;
