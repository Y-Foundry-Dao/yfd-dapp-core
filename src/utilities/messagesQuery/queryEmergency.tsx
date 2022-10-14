const queryEmergency = (index: any) => {
  return {
    emergency: {
      emergency_idx: `${index}`
    }
  };
};

export default queryEmergency;
