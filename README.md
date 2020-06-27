# TODO APP

Live app: [todo.yago.pw](https://todo.yago.pw)

## Getting Started

### Prerequisites

Have installed `nvm` and `yarn`

**Important: When running the project don't use a incognito browser or with extensions that may block service workers.
The projects has been created with a service worker that fake an API endpoint so there's no need for a server.**

### Set up local enviroment

- Run `nvm use` to use the node version\* which this projects uses (defined in `.nvmrc`).
- Run `yarn` to install all the necesary dependencies.

\* Based on the node version that you have already installed you may skip this step

### Quick start

To quickly check the app functionality, after the yarn installation, run `yarn e2e:open:prod`.

This will open a Cypress and run the tests covering some of the functionality of the website against the live app at [todo.yago.pw](https://todo.yago.pw)
Cypress has a time machine, so it's poosible to go back into the different steps covered by the tests.

Note: Remember not to use a browser in Incongnito.

### Available Scripts

#### `yarn start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### `yarn test`

Launches the test runner in the interactive watch mode.

#### `yarn build`

Builds the app for production to the `build` folder.

## Notes

Some notes from myself regarding a few things

### React

This app has been created with `create react app`, for a quicker start. Personally this days I prefer to use or either Gatsby or Next.

### Testing

I just created a few tests, a lot of things hasn't been tested for this. The libraries I have used are:

- @testing-libary/react: for react components tests
- @testing-libary/user-event: to test user events/interactions
- jest-styled-components: for styled components tests
- jest-localstorage-mock: to mock local storage

Also for static testing, I have automated w/ husky the running of ESLint and Prettier on every pre-commit.

If given the time, I would had implemented E2E test with Cypress

### Styling / UI

- I have used Styled-Components for the project.
- No CSS Framework or Design Library is used
- Icons: [Github Octicons](https://primer.style/octicons/)

### State management

Client State: Given the size of this project I have choosed to use the Context API of React, if the scope of the project were bigger I problaby have used Redux (w/ Redux Toolkit).

Persistence Layer: Local storage is being used to persist the data.

### Scaffolding

This one is a big topic, with no right or wrong approaches. In this case I used a `/folder/index` structure in this project because it's the one I'm used to do, but personally I'm not completly sold on it.

---
