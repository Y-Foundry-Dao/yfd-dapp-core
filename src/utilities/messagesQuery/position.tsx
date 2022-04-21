const queryPosition = (index: any) => {
  return {
    mirror_position: {
      position_index: `${index}`
    }
  };
};

export default queryPosition;
