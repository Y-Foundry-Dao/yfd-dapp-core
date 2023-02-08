import { useRecoilValue } from 'recoil';
import styles from '@scss/app.module.scss';
import { Icons } from '@var/icons';
import { minFYFDGovPropAtom } from '@recoil/governance/parameters/atoms';
const styleProposal = 'material-symbols-outlined';
function ProposalModalButton({ onOpen }: any) {
  const minProposal = useRecoilValue(minFYFDGovPropAtom);
  return (
    <a href="#" title={minProposal} onClick={onOpen}>
      <span className={styles['iconLockYFD-enable'] + ' ' + styleProposal}>
        {Icons.propose}
      </span>
    </a>
  );
}

export default ProposalModalButton;
