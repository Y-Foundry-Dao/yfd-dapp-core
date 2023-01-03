import styles from '@scss/app.module.scss';
import { Icons } from '@var/icons';

function ProposalModalButton({ onOpen }: any) {
  return (
    <a href="#" title="Propose" onClick={onOpen}>
      <i className={styles['icon-action'] + ' ' + ' material-symbols-outlined'}>
        {Icons.propose}
      </i>
    </a>
  );
}

export default ProposalModalButton;
