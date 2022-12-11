import useContractForge from 'hooks/useContractForge';
import List from './List';
import EmptyList from './Empty';

function ListFyfdBalance() {
  const { balanceDetail } = useContractForge();
  alert(JSON.stringify(balanceDetail));
  return (
    <>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
    </>
  );
}

export default ListFyfdBalance;
