import styles from '@scss/app.module.scss';
interface LoadingProps {
  title?: string;
}
export default function Loading({ title = 'Loading...' }: LoadingProps) {
  return (
    <>
      <span className={styles['notice-loading']}>
        <span className={styles.loaderBars}>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        </span>
        {title}
      </span>
    </>
  );
}
