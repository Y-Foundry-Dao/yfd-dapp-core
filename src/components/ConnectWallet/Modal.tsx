import { useWallet } from '@terra-money/use-wallet';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  SimpleGrid,
  GridItem,
  Spacer,
  Wrap,
  WrapItem
} from '@chakra-ui/react';
import styles from '@scss/app.module.scss';
import { Icons } from '@var/icons';

export default function ModalConnectWallet({ isOpen, onClose }: any) {
  const { network, availableConnections, connect, availableInstallations } =
    useWallet();

  return (
    <Modal
      size={['lg', '2xl', '3xl', '4xl']}
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      useInert={false}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader className={styles.modalHeading}>
          Connect A Wallet...
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody className={styles.modalContent}>
          <Wrap spacing="2rem" justify="center" className={styles.modalHeading}>
            {availableConnections.map(
              ({ type, name, icon, identifier = '' }) => (
                <>
                  <WrapItem
                    key={'connection-' + type + identifier}
                    className={styles.modalContentItem}
                  >
                    <div onClick={onClose} className={styles.modalLink}>
                      <a
                        href="#"
                        onClick={() => {
                          connect(type, identifier);
                        }}
                      >
                        <img
                          src={icon}
                          alt={name}
                          className={styles.imgModalFeatured}
                        />
                        {name}
                      </a>
                    </div>
                  </WrapItem>
                </>
              )
            )}
          </Wrap>
          <div className={styles.modalBorderTop}></div>
          <div className={styles.modalHeadingText}>- OR -</div>
          <div className={styles.modalBorderBottom}></div>
          <div className={styles.modalHeadingText}>
            Install A Wallet...
            <Wrap
              spacing="2rem"
              justify="center"
              className={styles.modalContent}
            >
              {availableInstallations.map(
                ({ icon, type, url, identifier, name }) => (
                  <>
                    <WrapItem
                      key={`${type}:${identifier}`}
                      className={styles.modalContentItem}
                    >
                      <div onClick={onClose} className={styles.modalLinkSmall}>
                        <a href={url}>
                          <img src={icon} />
                          {name}
                        </a>
                      </div>
                    </WrapItem>
                  </>
                )
              )}
            </Wrap>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
