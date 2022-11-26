const msgEmergencyCancel = (withPenalty: boolean) => {
  return {
    emergency_cancel: {
      with_penalty: withPenalty
    }
  };
};

export default msgEmergencyCancel;
