const queryNFTInfo = (tokenId: string) => {
  return {
    nft_info: {
      token_id: tokenId
    }
  };
};

export default queryNFTInfo;
