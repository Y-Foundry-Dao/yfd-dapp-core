import { YFD_TEST } from '@utilities/variables';

const msgEncodedProposal = (
  nameProposal: string,
  ticker: string,
  urlProposal: string,
  tvlLimit: number,
  developer: string,
  developmentCost: number,
  fundingOnly: boolean,
  nftAmount: number,
  statementOfWork: string,
  numberOfPayments: number,
  paymentFrequency: number,
  github: string,
  selfVouchedInformation: string
) => {
  return `{
  "create_vault_proposal": {
    "msg": {
      "proposal_info": {
        "name": "${nameProposal}",
        "ticker": "${ticker}",
        "proposal_url": "${urlProposal}",
        "tvl_limit": "${tvlLimit}",
        "contact": [
          "nobody@www.exmaple.com"
        ],
        "developer": "${developer}",
        "development_cost": "${developmentCost}",
        "funding_only": ${fundingOnly},
        "funding_denomination": "${YFD_TEST}",
        "nft_quantity": ${nftAmount},
        "statement_of_work": "${statementOfWork}",
        "num_payments": ${numberOfPayments},
        "payment_frequency": ${paymentFrequency},
        "github": "${github}",
        "self_vouched_information": "${selfVouchedInformation}"
      }
    }
  }
}`;
};

export default msgEncodedProposal;
