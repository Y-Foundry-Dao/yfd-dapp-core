const msgSendNFT = (contractAddress: string, tokenId: string, encodedMessage: string) => {
  return {
  send_nft: {
    contract: contractAddress,
    token_id: tokenId,
    msg: encodedMessage
  }
};
};

export default msgSendNFT;
