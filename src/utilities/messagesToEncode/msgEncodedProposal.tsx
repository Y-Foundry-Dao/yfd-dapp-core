import { YFD_TEST } from 'utilities/variables';

const msgEncodedProposal = (developer: string) => {
  return `{
  "create_proposal": {
    "msg": {
      "name": "Foo_name",
      "proposal_info": {
        "name": "Foo_name",
        "proposal_url": "www.example.com",
        "tvl_limit": "1000000",
        "contact": [
          "nobody@www.exmaple.com"
        ],
        "developer": "${developer}",
        "development_cost": "6000",
        "funding_denomination": "${YFD_TEST}",
        "statement_of_work": "www.example.com",
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
