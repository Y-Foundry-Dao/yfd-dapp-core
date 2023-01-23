import styles from '@scss/app.module.scss';
import { Flex, Box } from '@chakra-ui/react';

export default function GSDecentralize() {
  return (
    <div className={styles['content-feature-frame']}>
      <div className={styles['heading']}>The Economy of YFD</div>
      <Flex className={[styles['gsBorder'], styles['gsContent']].join(' ')}>
        <Box>
          <p>
            Blockchain technology is designed to help humans transact with one
            another without middlemen. By allowing individuals to fund each
            other’s ideas, this replaces the need for token sales or equity
            sales to start a project.
          </p>
          <p>
            YFD’s mechanism for community proposals and funding enables builders
            to get started without needing to deal with tokenomics, allocations,
            or valuation.
          </p>
          <p>
            Throughout this process, the community is involved, making sure that
            all parties act in good faith and deliver on their promises.
            Otherwise, they can take onchain action to penalize either the
            proposer, builder, or both.
          </p>
        </Box>
      </Flex>
    </div>
  );
}
