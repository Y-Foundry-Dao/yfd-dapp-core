//social media
export const DISCORD = 'https://discord.gg/yfd';
export const TELEGRAM = 'https://t.me/yfoundrydao';
export const TWITTER = 'https://twitter.com/yieldfoundrydao';
export const MEDIUM = 'https://medium.com/@yfoundry/';

//contracts
export const FORGE_TEST_OLD =
  'terra1pmayk6e2zt78hlmkwyk6qxfhu390urw6prkd46jc9e7d8k45wq3sldycwz';
export const YFD_TEST =
  'terra1ss9zz4873vk4dd8dvua0vm83m6s8k7ctwp9efac0arytn6jthfgsy2d4a9';
export const FORGE_TEST =
  'terra168rvweaknfd7dhde02ex66fjsm9e3xppkj4xskvtnuql4vwr0ptsy444dx';

// cronological data
//export const CRONO_SECONDS_IN_TWO_YEAR = 31556952 * 2; // 63113904 // actual seconds
export const CRONO_SECONDS_IN_TWO_WEEK = 60 * 60 * 24 * 7 * 2;
export const CRONO_SECONDS_IN_ONE_MONTH = CRONO_SECONDS_IN_TWO_WEEK * 2;
export const CRONO_SECONDS_IN_THREE_MONTH = CRONO_SECONDS_IN_ONE_MONTH * 3;
export const CRONO_SECONDS_IN_SIX_MONTH = CRONO_SECONDS_IN_ONE_MONTH * 6;
export const CRONO_SECONDS_IN_ONE_YEAR = CRONO_SECONDS_IN_ONE_MONTH * 12;
export const CRONO_SECONDS_IN_EIGHTEEN_MONTH = CRONO_SECONDS_IN_ONE_MONTH * 18;
export const CRONO_SECONDS_IN_TWO_YEAR = 63072000; // what we're using
export const CRONO_SECONDS_YFD_MAX_LOCK = CRONO_SECONDS_IN_TWO_YEAR;

// date text
export const DATE_TWO_WEEK = new Date(
  Date.now() + 1000 * CRONO_SECONDS_IN_TWO_WEEK
);
export const DATE_ONE_MONTH = new Date(
  Date.now() + 1000 * CRONO_SECONDS_IN_TWO_WEEK * 2
);
export const DATE_TWO_MONTH = new Date(
  Date.now() + 1000 * CRONO_SECONDS_IN_TWO_WEEK * 4
);
export const DATE_THREE_MONTH = new Date(
  Date.now() + 1000 * CRONO_SECONDS_IN_TWO_WEEK * 6
);
export const DATE_SIX_MONTH = new Date(
  Date.now() + 1000 * CRONO_SECONDS_IN_TWO_WEEK * 12
);
export const DATE_NINE_MONTH = new Date(
  Date.now() + 1000 * CRONO_SECONDS_IN_TWO_WEEK * 18
);
export const DATE_EIGHTEEN_MONTH = new Date(
  Date.now() + 1000 * CRONO_SECONDS_IN_TWO_WEEK * 36
);
export const DATE_ONE_YEAR = new Date(
  Date.now() + 1000 * CRONO_SECONDS_IN_TWO_WEEK * 24
);
export const DATE_TWO_YEAR = new Date(
  Date.now() + 1000 * CRONO_SECONDS_IN_TWO_YEAR
);

// blockchain specific variables
export const CHAIN_SECONDS_PER_BLOCK = 6;
export const CHAIN_BLOCK_TWO_WEEK =
  CRONO_SECONDS_IN_TWO_WEEK / CHAIN_SECONDS_PER_BLOCK;
export const CHAIN_BLOCK_ONE_MONTH =
  (CRONO_SECONDS_IN_TWO_WEEK / CHAIN_SECONDS_PER_BLOCK) * 2;
export const CHAIN_BLOCK_TWO_MONTH =
  (CRONO_SECONDS_IN_TWO_WEEK / CHAIN_SECONDS_PER_BLOCK) * 4;
export const CHAIN_BLOCK_THREE_MONTH =
  (CRONO_SECONDS_IN_TWO_WEEK / CHAIN_SECONDS_PER_BLOCK) * 6;
export const CHAIN_BLOCK_SIX_MONTH =
  (CRONO_SECONDS_IN_TWO_WEEK / CHAIN_SECONDS_PER_BLOCK) * 12;
export const CHAIN_BLOCK_NINE_MONTH =
  (CRONO_SECONDS_IN_TWO_WEEK / CHAIN_SECONDS_PER_BLOCK) * 18;
export const CHAIN_BLOCK_EIGHTEEN_MONTH =
  (CRONO_SECONDS_IN_TWO_WEEK / CHAIN_SECONDS_PER_BLOCK) * 36;
export const CHAIN_BLOCK_ONE_YEAR =
  (CRONO_SECONDS_IN_TWO_WEEK / CHAIN_SECONDS_PER_BLOCK) * 24;
export const CHAIN_BLOCK_TWO_YEAR =
  CRONO_SECONDS_IN_TWO_YEAR / CHAIN_SECONDS_PER_BLOCK;
export const CHAIN_BLOCK_YFD_MAX_LOCK = CHAIN_BLOCK_TWO_YEAR; //10512000

// YFD locking data
export const FYFD_MULTIPLIER_MAX_LOCK = 2.5;
export const CRONO_FYFD_YFD_LOCK_VALUE_PARITY =
  1 / (FYFD_MULTIPLIER_MAX_LOCK / CRONO_SECONDS_YFD_MAX_LOCK);
export const DATE_FYFD_YFD_LOCK_VALUE_PARITY = new Date(
  Date.now() + 1000 * CRONO_FYFD_YFD_LOCK_VALUE_PARITY
);
export const CHAIN_BLOCK_FYFD_YFD_LOCK_VALUE_PARITY =
  CRONO_FYFD_YFD_LOCK_VALUE_PARITY / CHAIN_SECONDS_PER_BLOCK;

// default values
export const DEFAULT_YFD_LOCK_DURATION = CHAIN_BLOCK_NINE_MONTH; // for UI use only
