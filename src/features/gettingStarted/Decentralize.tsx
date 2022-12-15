import styles from '@scss/app.module.scss';
import imgBot1 from '@images/bots/bot1.png';
import imgBot2 from '@images/bots/bot2.png';
import imgBot3 from '@images/bots/bot3.png';
import { Flex, Box, Spacer } from '@chakra-ui/react';
export default function GSDecentralize() {
  return (
    <div className={styles['content-feature-frame']}>
      <div className={styles['content-wrapper-header']}>
        <span className={styles['text-title']}>
          The Decentralized Economy of YFD
        </span>
      </div>
      <Flex className={[styles['gsBorder'], styles['gsContent']].join(' ')}>
        <Box>
          Blockchain technology is designed to help humans transact with one
          another without middlemen. By allowing individuals to fund each
          other’s ideas, this replaces the need for token sales or equity sales
          to start a project. YFD’s mechanism for community proposals and
          funding enables builders to get started without needing to deal with
          tokenomics, allocations, or valuation. Throughout this process, the
          community is involved, making sure that all parties act in good faith
          and deliver on their promises. Otherwise, they can take onchain action
          to penalize either the proposer, builder, or both.
          <ul>
            <li>No core team</li>
            <li>Community-governed</li>
            <li>Security with transparency</li>
            <li>Designed for growth</li>
          </ul>
        </Box>
      </Flex>
    </div>
  );
}
