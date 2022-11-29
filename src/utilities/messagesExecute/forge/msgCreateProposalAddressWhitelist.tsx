const msgCreateProposalAddressWhitelist = (
  address: string,
  name: string,
  imageLink: string,
  roles: Array<string>,
  github: string,
  keybase: string,
  telegram: string,
  twitter: string,
  url: string,
  isEmergency: boolean,
  justificationLink: string
) => {
  return {
    create_proposal: {
      proposal_type: {
        address_whitelist: {
        address: address,
        change: {
          new: {
            name: name,
            image_link: imageLink,
            roles: roles,
            links: {
              github: github,
              keybase: keybase,
              telegram: telegram,
              twitter: twitter,
              url: url,
            }
          }
        }
      }
    },
      emergency: isEmergency,
      justification_link: justificationLink
    }
  };
};

export default msgCreateProposalAddressWhitelist;
