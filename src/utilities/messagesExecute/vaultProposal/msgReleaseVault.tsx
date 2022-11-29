const msgReleaseVault = (githubCommit: string, codeHash: string, codeId: string, msgEncodedVaultInstantiate: string, justification: string) => {
  return {
    release_vault: {
      github_commit: githubCommit,
      code_hash: codeHash,
      code_id: codeId,
      instantiate_msg: msgEncodedVaultInstantiate,
      justification_link: justification,
    },
  };
};

export default msgReleaseVault;
