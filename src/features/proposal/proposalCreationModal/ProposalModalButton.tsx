import styles from '@scss/color.module.scss';
import { Icons } from '@var/icons';

function ProposalModalButton({ onOpen }: any) {
  return (
    <a href="#" onClick={onOpen}>
      <span className={styles['icon-create'] + ' material-symbols-outlined'}>
        {Icons.propose}
      </span>
      Propose
    </a>
  );
}

export default ProposalModalButton;
