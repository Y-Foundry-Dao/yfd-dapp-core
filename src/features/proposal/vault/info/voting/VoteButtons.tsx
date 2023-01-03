import { Button, Flex } from '@chakra-ui/react';
import useHandleClicks from 'hooks/useHandleClicks';

function VoteButtons({
  contract,
  voteTokenBalance,
  inputVoteTokenAmount
}: any) {
  const {
    handleClickVoteAffirm,
    handleClickVoteDeny,
    handleClickVoteAbstain,
    handleClickVoteDenyWithPenalty
  } = useHandleClicks();

  return (
    <>
      {voteTokenBalance !== undefined && voteTokenBalance > 0 ? (
        <Flex direction="column" align="stretch" rowGap={4}>
          <Button
            onClick={async () =>
              await handleClickVoteAffirm(contract, inputVoteTokenAmount)
            }
          >
            Vote Affirm
          </Button>
          <Button
            onClick={async () =>
              await handleClickVoteDeny(contract, inputVoteTokenAmount)
            }
          >
            Vote Deny
          </Button>
          <Button
            onClick={async () =>
              await handleClickVoteAbstain(contract, inputVoteTokenAmount)
            }
          >
            Vote Abstain
          </Button>
          <Button
            onClick={async () =>
              await handleClickVoteDenyWithPenalty(
                contract,
                inputVoteTokenAmount
              )
            }
          >
            Vote Deny with Penalty
          </Button>
        </Flex>
      ) : null}
    </>
  );
}

export default VoteButtons;
