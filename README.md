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

[@terra-money/feather.js](https://terra-money.github.io/feather.js/)
[@terra-money/wallet-provider v4](https://github.com/terra-money/wallet-provider)
[@terra-money/wallet-types] ()
[@terra-money/use-wallet] ()

### Routing

[React Router](https://reactrouter.com/)

### Styling

[Saas Design](https://saas-ui.dev/)

### Icons

[Google Material Symbols](https://fonts.google.com/icons)
```
<span class="material-symbols-outlined">face</span> <!-- Outlined -->
<span class="material-symbols-rounded">face</span>  <!-- Rounded -->
<span class="material-symbols-sharp">face</span>    <!-- Sharp -->
```

[Font Awesome](https://fontawesome.com/search?o=r&m=free)
* Remove this package
```
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  solid,
  regular,
  brands,
  icon
} from '@fortawesome/fontawesome-svg-core/import.macro';

export default function Icon() {
  return (
      <FontAwesomeIcon icon={solid('bell')} />
    );
}
```

[React Icons](https://react-icons.github.io/react-icons)
* remove this package

[Chakra Icons](https://chakra-ui.com/docs/components/icon)
* remove this package

### Charts

[Chart.js](https://www.chartjs.org/)

### Utility

[Date-FNS](https://date-fns.org/)

### Development
`typescript-plugin-css-modules`

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
