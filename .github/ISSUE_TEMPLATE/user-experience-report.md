---
name: User Experience Report
about: For reporting testing outcomes on Y-Foundry's UI / UX
title: "[ ISSUE - UI / UX ] "
labels: to review, UI-UX
assignees: ''

---

name: Y-Foundry User Experience Report
description: Submit an issue you had with the user experience on Y-Foundry
title: "[Bug]: "
labels: ["bug", "UI-UX", "to review"]
body:
  - type: markdown
    attributes:
      value: |
        Thanks for taking the time to fill out a user experience report!
  - type: input
    id: contact
    attributes:
      label: Contact Details
      description: How can we get in touch with you if we need more info?
      placeholder: ex. email@example.com
    validations:
      required: false
  - type: textarea
    id: what-happened
    attributes:
      label: What happened?
      description: Also tell us, what did you expect to happen?
      placeholder: Tell us what you see!
      value: "A bug happened!"
    validations:
      required: true
  - type: dropdown
    id: deployment
    attributes:
      label: Deployment
      description:  Where did you experience the issue?
      options:
        - pisco-1 Terra Testnet (Default)
    validations:
      required: true
  - type: dropdown
    id: browsers
    attributes:
      label: What browsers are you seeing the problem on?
      multiple: true
      options:
        - Firefox
        - Chrome
        - Safari
        - Microsoft Edge
        - Brave
        - Other
  - type: dropdown
    id: wallets
    attributes:
      label: What wallets were you using?
      multiple: true
      options:
        - Terra Station
        - xDefi
        - Kujira
        - Keplr
        - CosmoStation
        - Leap
        - Other (describe)
  - type: textarea
    id: screenshot
    attributes:
      label: Screenshots 
      description: Please copy and paste any relevant screenshots or output. 
  - type: checkboxes
    id: reproduce
    attributes:
      label: Reproduceable? 
      description: Could you reproduce the issue after disconnecting your wallet, closing and re-opening and reconnecting to the site? 
      options:
        - label: I was able to reproduce this issue more than once.
