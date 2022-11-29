const msgTransferNFT = (recipientAddress: string, tokenId: string) => {
  return {
    transfer_nft: {
      recipient: recipientAddress,
      token_id: tokenId
    }
  };
};

export default msgTransferNFT;
