import styles from '@scss/paper.module.scss';
import { Flex, Box, Spacer } from '@chakra-ui/react';

export default function InitiativesFeatured() {
  return (
    <Box className={styles['content-section']}>
      <Box className={styles.letter}>
        <p>Hello, dear reader!</p>
        <div className={styles['letter-title']}>
          How to use this document as a Strategist
        </div>
        <p>
          If this is your first time using this document as a strategist,
          congratulations on taking the first step into creating your very own
          vault on Y-Foundry.
        </p>
        <p>
          First of all, take a look at the Table of Contents in the previous
          section. This is a bird’s eye view of the document.
        </p>

        <p>
          In each section of this sample prospectus, we’ve included some
          examples as well as suggestions on how to best outline and provide
          information for each section.
        </p>

        <p>
          Your objective as a strategist with this document is to accomplish the
          following:
        </p>

        <p>
          To present your strategy idea as clearly as possible, in layman’s
          terms wherever possible, or providing links to definitions, adding
          illustrations when necessary such that the average reader may
          understand its operation.
        </p>
        <p>
          To provide accurate details on the mechanics of your strategy
          (step-by-step execution, timing, frequency, amounts, triggers, and
          functionality), such that the developers building the vault can make a
          technical assessment of how to reproduce it in smart contract form.
        </p>
        <p>
          To provide suggested risk parameters for this strategy as well as
          mathematically modeled financial projections such that it can be shown
          to be financially viable and advantageous to be funded and built as a
          vault.
        </p>
        <p>
          To provide a detailed overview of the financial costs and milestones
          of development,such that Boosters and Boule members can be
          well-informed of the expected expenditure and schedule of delivery for
          the vault.
        </p>

        <p>
          If you have any doubts or if anything is unclear, please do reach out
          in the YFD Discord server. This is a living document, and will be
          continuously improved for a better experience.
        </p>

        <p>
          Lastly but most importantly, if you feel like you might not know
          enough to fill in this entire document by yourself:
        </p>

        <p>
          <b>
            You do not need to work on this alone. Building a vault is a
            collaborative effort, and there are many willing hands to help in
            the Y-Foundry community. Ask and you shall receive.
          </b>
        </p>
      </Box>
    </Box>
  );
}
