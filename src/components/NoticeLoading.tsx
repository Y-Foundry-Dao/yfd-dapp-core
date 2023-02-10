import { Spinner } from '@chakra-ui/react';
import styles from '@scss/app.module.scss';
interface LoadingProps {
  title?: string;
}
export default function NoticeLoading({ title = '' }: LoadingProps) {
  return (
    <Spinner as="span" size="sm" className={styles.spinner} label={title} />
  );
}
