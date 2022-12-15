import styles from '@scss/color.module.scss';

function ProposalModalButton({ onOpen }: any) {
  return (
    <a href="#" onClick={onOpen}>
      <span className={styles['icon-create'] + ' material-symbols-outlined'}>
        add_box
      </span>
      Propose
    </a>
  );
}

export default ProposalModalButton;
