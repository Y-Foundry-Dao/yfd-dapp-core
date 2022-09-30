import { YFD_TEST } from 'utilities/variables';

const msgEncodedProposal = (
  nameProposal: string,
  urlProposal: string,
  tvlLimit: string,
  developmentCost: string,
  statementOfWork: string,
  developer: string
) => {
  return `{
  "create_proposal": {
    "msg": {
      "name": "Foo_name",
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
        "payment_schedule": 2,
        "payment_frequency": 1000,
        "github": "www.example.com",
        "expiration": 43200,
        "quorum_percent": 25,
        "self_vouched_information": "www.example.com"
      }
    }
  }
}`;
};

export default msgEncodedProposal;
