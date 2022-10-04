import { YFD_TEST } from 'utilities/variables';

const msgEncodedProposal = (
  nameProposal: string,
  nameMsg: string,
  urlProposal: string,
  tvlLimit: number,
  developmentCost: number,
  statementOfWork: string,
  paymentSchedule: number,
  github: string,
  quorumPercent: number,
  selfVouchedInformation: string,
  expiration: number,
  paymentFrequency: number,
  developer: string
) => {
  return `{
  "create_proposal": {
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
        "statement_of_work": "${statementOfWork}",
        "payment_schedule": ${Number(paymentSchedule)},
        "payment_frequency": ${paymentFrequency},
        "github": "${github}",
        "expiration": ${expiration},
        "quorum_percent": ${quorumPercent},
        "self_vouched_information": "${selfVouchedInformation}"
      }
    }
  }
}`;
};

export default msgEncodedProposal;
