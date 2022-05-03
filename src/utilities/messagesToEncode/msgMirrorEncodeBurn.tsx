const msgMirrorBurnEncode = (position: string) => {
  return `{
      "burn": {
        "position_idx": "${position}"
      }
    }`;
};
export default msgMirrorBurnEncode;
