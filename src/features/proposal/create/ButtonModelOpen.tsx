import styles from '@scss/app.module.scss';
import { Icons } from '@var/icons';

const styleProposal = 'material-symbols-outlined';
function ProposalModalButton({ onOpen }: any) {
  return (
    <a href="#" title="Propose" onClick={onOpen}>
      <i className={styles['icon-action'] + ' ' + styleProposal}>
        {Icons.propose}
      </i>
    </a>
  );
}

export default ProposalModalButton;
