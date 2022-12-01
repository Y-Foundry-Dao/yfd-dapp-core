import { Box, Heading, Text } from '@chakra-ui/react';
import useContractVaultProposal from 'hooks/useContractVaultProposal';
import useContractVote from 'hooks/useContractVote';
import React from 'react';

import styleBar from 'styles/progressbar.module.scss';

function CurrentVotes({ proposalContract, proposalIndex }: any) {
  const { proposalVoteInfo, voteContract } = useContractVaultProposal({
    proposalContract,
    proposalIndex
  });

  const totalSupply = proposalVoteInfo.total_supply;
  const voteAffirm = proposalVoteInfo.affirm;
  const voteAbstain = proposalVoteInfo.abstain;
  const voteDeny = proposalVoteInfo.deny;
  const votePenalty = proposalVoteInfo.deny_with_penalty;

  const percentAffirm = (voteAffirm / totalSupply) * 100;
  const percentAbstain = (voteAbstain / totalSupply) * 100;
  const percentDeny = (voteDeny / totalSupply) * 100;
  const percentPenalty = (votePenalty / totalSupply) * 100;

  const styleAffirm = `bar-${percentAffirm}`;
  const styleDeny = `bar-${percentDeny}`;
  const stylePenalty = `bar-${percentPenalty}`;

  return (
    <>
      <div className={[styleBar.chart, styleBar.grid, styleBar.join].join(' ')}>
        <div
          className={[
            styleBar['bar'],
            styleBar.$percentAffirm,
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
          <div className={[styleBar.face, styleBar['side-a']].join(' ')}></div>
          <div className={[styleBar.face, styleBar['side-b']].join(' ')}></div>
          <div className={[styleBar.face, styleBar['side-1']].join(' ')}>
            <div className={styleBar['growing-bar']}></div>
          </div>
        </div>
        <div
          className={[
            styleBar['bar'],
            styleBar.$percentDeny,
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
          <div className={[styleBar.face, styleBar['side-a']].join(' ')}></div>
          <div className={[styleBar.face, styleBar['side-b']].join(' ')}></div>
          <div className={[styleBar.face, styleBar['side-1']].join(' ')}>
            <div className={styleBar['growing-bar']}></div>
          </div>
        </div>
        <div
          className={[
            styleBar['bar'],
            styleBar.$percentPenalty,
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
          <div className={[styleBar.face, styleBar['side-a']].join(' ')}></div>
          <div className={[styleBar.face, styleBar['side-b']].join(' ')}></div>
          <div className={[styleBar.face, styleBar['side-1']].join(' ')}>
            <div className={styleBar['growing-bar']}></div>
          </div>
        </div>
      </div>
      <Box>
        <Text> Vote Counts out of {proposalVoteInfo.total_supply}</Text>
        <Text>
          Affirm: {proposalVoteInfo.affirm} {percentAffirm})
        </Text>
        <Text>
          Abstain: {proposalVoteInfo.abstain}({percentAbstain})
        </Text>
        <Text>
          Deny: {proposalVoteInfo.deny} ({percentDeny})
        </Text>
        <Text>
          Deny with Penalty:
          {proposalVoteInfo.deny_with_penalty} ({percentPenalty})
        </Text>
      </Box>
    </>
  );
}

export default CurrentVotes;
