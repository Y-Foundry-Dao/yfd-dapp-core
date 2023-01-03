import useContractForge from 'hooks/useContractForge';
import List from './List';
import EmptyList from './Empty';

function GovernanceParameters() {
  const { governanceParameters } = useContractForge();
  return (
    <>
      {governanceParameters.length === 0 ? (
        <EmptyList />
      ) : (
        <>
          <List items={governanceParameters} />
        </>
      )}
    </>
  );
}

export default GovernanceParameters;
