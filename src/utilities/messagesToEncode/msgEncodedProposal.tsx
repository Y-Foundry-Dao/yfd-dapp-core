import { YFD_TEST } from 'utilities/variables/variables';

const msgEncodedProposal = (
  nameProposal: string,
  nameMsg: string,
  urlProposal: string,
  nftAmount: number,
  tvlLimit: number,
  developmentCost: number,
  statementOfWork: string,
  paymentSchedule: number,
  github: string,
  selfVouchedInformation: string,
  paymentFrequency: number,
  developer: string
) => {
  return `{
  "create_vault_proposal": {
    "msg": {
      "name": "${nameProposal}",
      "proposal_info": {
        "name": "${nameProposal}",
        "proposal_url": "${urlProposal}",
        "tvl_limit": "${tvlLimit}",
        "contact": [
          "nobody@www.exmaple.com"
        ],
        "developer": "${developer}",
        "development_cost": "${developmentCost}",
        "funding_denomination": "${YFD_TEST}",
        "nft_quantity": ${nftAmount},
        "statement_of_work": "${statementOfWork}",
        "payment_schedule": ${Number(paymentSchedule)},
        "payment_frequency": ${paymentFrequency},
        "github": "${github}",
        "self_vouched_information": "${selfVouchedInformation}"
      }
    }
  }
}`;
};

export default msgEncodedProposal;
