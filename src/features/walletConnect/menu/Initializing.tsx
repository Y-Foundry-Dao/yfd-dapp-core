import { Button, MenuGroup, MenuButton, MenuList } from '@chakra-ui/react';
import styles from '@scss/app.module.scss';
import NoticeLoading from '@components/NoticeLoading';
import { Icons } from '@utilities/variables/icons';

export default function MenuInitializing() {
  return (
    <>
      <MenuButton
        minW={120}
        as={Button}
        rightIcon={
          <span className="material-symbols-outlined">{Icons.expand_down}</span>
        }
      >
        <NoticeLoading title="Initializing" />
      </MenuButton>
      <MenuList className={styles.menuWrapper}>
        <MenuGroup title="Options">
          <Button key={'siteMenuReload'} onClick={() => location.reload()}>
            {<div>Reload dApp</div>}
          </Button>
        </MenuGroup>
      </MenuList>
    </>
  );
}
