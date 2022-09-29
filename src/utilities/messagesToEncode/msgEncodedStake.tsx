const msgEncodedStake = (duration: number) => {
  return `{"stake":{"lock_duration":${duration}}}`;
};

export default msgEncodedStake;
