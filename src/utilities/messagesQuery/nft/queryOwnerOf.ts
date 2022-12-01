const queryOwnerOf = (tokenId: string) => {
  return {
    owner_of: {
      token_id: tokenId
    }
  };
};

export default queryOwnerOf;
