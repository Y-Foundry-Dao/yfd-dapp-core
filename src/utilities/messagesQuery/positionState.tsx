const queryMsgPositionState = (index: any) => {
  return {
    position_state: {
      position_index: `${index}`
    }
  };
};

export default queryMsgPositionState;
