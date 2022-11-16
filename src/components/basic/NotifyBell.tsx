import styles from 'styles/app.module.scss';

export default function NotifyBell() {
  return (
    <div className={styles.notification}>
      <span className={styles['notification-number']}>3</span>
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className={[styles.feather, 'feather-bell'].join(' ')}
      >
        <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" />
      </svg>
    </div>
  );
}
