import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Spacer,
  Heading,
  HStack,
  Text,
  VStack
} from '@chakra-ui/react';
import FinderContractLink from 'components/basic/finder/FinderContractLink';
import useContractProposal from 'hooks/useContractProposal';
import useContractVaultProposal from 'hooks/useContractVaultProposal';
import useContractVote from 'hooks/useContractVote';
import React, { useState } from 'react';
import ProposalFinalizeButton from 'components/pageBody/proposal/vaultProposals/proposalInfo/status/ProposalFinalizeButton';
import ProposalStatus from 'components/pageBody/proposal/vaultProposals/proposalInfo/status/ProposalStatus';
import InputVoteAmount from 'components/pageBody/proposal/vaultProposals/proposalInfo/voting/InputVoteAmount';
import VoteButtons from 'components/pageBody/proposal/vaultProposals/proposalInfo/voting/VoteButtons';
import VoteTokenBalance from 'components/pageBody/proposal/vaultProposals/proposalInfo/voting/VoteTokenBalance';
import FundingInfo from 'components/pageBody/proposal/vaultProposals/proposalInfo/funding/FundingInfo';
import VaultProposalInfo from 'components/pageBody/proposal/vaultProposals/proposalInfo/VaultProposalInfo';
import CurrentVotes from 'components/pageBody/proposal/vaultProposals/proposalInfo/voting/CurrentVotes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  solid,
  regular,
  brands,
  icon
} from '@fortawesome/fontawesome-svg-core/import.macro'; // <-- import styles to be used
import NFTInfo from '../proposalInfo/nfts/NFTInfo';

import styleList from 'styles/proplist.module.scss';
import styleBar from 'styles/progressbar.module.scss';

function VaultProposalListAccordionItem({
  proposalContract,
  proposalIndex
}: any) {
  const { vaultProposalInfo, voteContract, nftContractInfo } =
    useContractVaultProposal({
      proposalContract,
      proposalIndex
    });
  const { voteTokenBalance } = useContractVote({
    proposalContract
  });
  const [inputVoteTokenAmount, setInputVoteTokenAmount] = useState(0);
  return (
    <AccordionItem
      layerStyle="accordionProposalItem"
      className={styleList['content-section']}
    >
      <AccordionButton layerStyle="accordionHeader">
        <Flex width="100%">
          <Box>
            <br />
            <FontAwesomeIcon icon={solid('vault')} />
          </Box>
          <Box textAlign="left">
            <Text>{vaultProposalInfo.name}</Text> (
            <FinderContractLink contract={proposalContract} /> )
          </Box>
          <Spacer />
          <Box textAlign="right">
            <div
              className={[styleBar.chart, styleBar.grid, styleBar.join].join(
                ' '
              )}
            >
              <div
                className={[
                  styleBar['bar'],
                  styleBar['bar-70'],
                  styleBar['green']
                ].join(' ')}
              >
                <div className={[styleBar.face, styleBar.top].join(' ')}>
                  <div className={styleBar['growing-bar']}></div>
                </div>
                <div className={[styleBar.face, styleBar['side-0']].join(' ')}>
                  <div className={styleBar['growing-bar']}></div>
                </div>
                <div className={[styleBar.face, styleBar.floor].join(' ')}>
                  <div className={styleBar['growing-bar']}></div>
                </div>
                <div
                  className={[styleBar.face, styleBar['side-a']].join(' ')}
                ></div>
                <div
                  className={[styleBar.face, styleBar['side-b']].join(' ')}
                ></div>
                <div className={[styleBar.face, styleBar['side-1']].join(' ')}>
                  <div className={styleBar['growing-bar']}></div>
                </div>
              </div>
              <div
                className={[
                  styleBar['bar'],
                  styleBar['bar-25'],
                  styleBar['red']
                ].join(' ')}
              >
                <div className={[styleBar.face, styleBar.top].join(' ')}>
                  <div className={styleBar['growing-bar']}></div>
                </div>
                <div className={[styleBar.face, styleBar['side-0']].join(' ')}>
                  <div className={styleBar['growing-bar']}></div>
                </div>
                <div className={[styleBar.face, styleBar.floor].join(' ')}>
                  <div className={styleBar['growing-bar']}></div>
                </div>
                <div
                  className={[styleBar.face, styleBar['side-a']].join(' ')}
                ></div>
                <div
                  className={[styleBar.face, styleBar['side-b']].join(' ')}
                ></div>
                <div className={[styleBar.face, styleBar['side-1']].join(' ')}>
                  <div className={styleBar['growing-bar']}></div>
                </div>
              </div>
              <div
                className={[
                  styleBar['bar'],
                  styleBar['bar-5'],
                  styleBar['pink']
                ].join(' ')}
              >
                <div className={[styleBar.face, styleBar.top].join(' ')}>
                  <div className={styleBar['growing-bar']}></div>
                </div>
                <div className={[styleBar.face, styleBar['side-0']].join(' ')}>
                  <div className={styleBar['growing-bar']}></div>
                </div>
                <div className={[styleBar.face, styleBar.floor].join(' ')}>
                  <div className={styleBar['growing-bar']}></div>
                </div>
                <div
                  className={[styleBar.face, styleBar['side-a']].join(' ')}
                ></div>
                <div
                  className={[styleBar.face, styleBar['side-b']].join(' ')}
                ></div>
                <div className={[styleBar.face, styleBar['side-1']].join(' ')}>
                  <div className={styleBar['growing-bar']}></div>
                </div>
              </div>
            </div>
            <ProposalStatus
              proposalContract={proposalContract}
              proposalIndex={proposalIndex}
            />
          </Box>
          <Box p="4">
            <AccordionIcon />
          </Box>
        </Flex>
      </AccordionButton>
      <AccordionPanel layerStyle="accordionProposalPanel" pb="5">
        <Flex
          backgroundColor={'gray.7044'}
          borderRadius="md"
          align="center"
          justify="space-around"
          py="4"
        >
          <VaultProposalInfo
            proposalContract={proposalContract}
            proposalIndex={proposalIndex}
          />
          <FundingInfo
            proposalContract={proposalContract}
            proposalIndex={proposalIndex}
          />
          <ProposalFinalizeButton
            proposalContract={proposalContract}
            proposalIndex={proposalIndex}
          />
        </Flex>
        <Flex
          align="center"
          direction="column"
          borderRadius="md"
          backgroundColor={'gray.700'}
          py="4"
        >
          <VoteTokenBalance
            proposalContract={proposalContract}
            voteTokenBalance={voteTokenBalance}
          />
          <InputVoteAmount
            voteTokenBalance={voteTokenBalance}
            inputVoteTokenAmount={inputVoteTokenAmount}
            setInputVoteTokenAmount={setInputVoteTokenAmount}
          />
          <Flex
            align="center"
            justify="space-around"
            borderRadius="md"
            w="100%"
            py="4"
          >
            <VoteButtons
              contract={voteContract}
              voteTokenBalance={voteTokenBalance}
              inputVoteTokenAmount={inputVoteTokenAmount}
            />
            <CurrentVotes
              proposalContract={proposalContract}
              proposalIndex={proposalIndex}
            />
          </Flex>
        </Flex>

        {Object.keys(nftContractInfo).length > 0 ? (
          <Flex
            align="center"
            direction="column"
            borderRadius="md"
            border="1px solid black"
            py="4"
          >
            <NFTInfo nftContractInfo={nftContractInfo} />
          </Flex>
        ) : null}
      </AccordionPanel>
    </AccordionItem>
  );
}

export default VaultProposalListAccordionItem;
