# YFD Governance dApp Frontend

## Installation

Use the package manager [yarn](https://yarnpkg.com/) to install the dependencies.

```bash
yarn install
```

## Usage

#### localhost:3000

```typescript
yarn start
```

#### storybook design system

```typescript
yarn storybook
```

#### unit/integration tests

```typescript
yarn test
```

#### end to end tests

```typescript
yarn e2etest
```

# Packages

### Core packages needed for Terra Development

[Terra.js](https://terra-money.github.io/terra.js/)

[wallet-provider](https://github.com/terra-money/wallet-provider)

### Routing

[React Router](https://reactrouter.com/)

### Styling

[Styled Components](https://styled-components.com/)

### Testing

[Playwright](https://playwright.dev/)

[React-testing-library](https://testing-library.com/docs/react-testing-library/intro)

[Jest](https://jestjs.io/)

### Lint/Format

[Eslint](https://eslint.org/)

[Prettier](https://prettier.io/)

[Lint-staged](https://github.com/okonet/lint-staged)

### Pre-Commit Hooks

[Husky](https://typicode.github.io/husky/#/)

### Override Webpack

[React-app-rewired](https://github.com/timarney/react-app-rewired)

# Notes

This repo has minimal setup done in the Eslint and Prettier files with the intention that the developer using the template can set up the rules how they would like

[Eslint Rules](https://eslint.org/docs/developer-guide/working-with-rules)

[Prettier Rules](https://prettier.io/docs/en/options.html)

Most projects tend to use the [AirBNB style guide](https://github.com/airbnb/javascript) but this template uses minimal rules to allow the user the ability to to customize it as they want.
