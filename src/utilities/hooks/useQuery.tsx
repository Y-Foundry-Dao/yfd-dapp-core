import useContract from './useContract';

const useQuery = () => {
  const { queryMsg } = useContract();
  const query = async (contract: string) => {
    try {
      if (localStorage.getItem('position_idx') !== null) {
        const position_idx: string | null =
          localStorage.getItem('position_idx');
        const newQuery = {
          mirror_position: {
            position_index: position_idx
          }
        };
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
    query
  };
};

export default useQuery;
