const queryAddressWhitelist = (address: any) => {
  return {
    address_whitelist: {
      name: `${address}`
    }
  };
};

export default queryAddressWhitelist;
