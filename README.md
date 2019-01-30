## Generator react-redux

Yeomans generator to quickly scaffold a react app, based on create-react-app, with some extra key libraries on top; redux, redux-thunk, react-router-dom

> This generator add **redux**, **redux-thunk**, **react-router-dom** and other useful libraries and tools, on top of the most common React starter [Create React App](https://github.com/facebookincubator/create-react-app).

## Installation

Clone this repository: `git clone git@github.com:gwolverson/generator-react-redux.git`

Run `npm link` - this will link the yeomans generator into your global npm modules

Then generate your new project:

```bash
mkdir project-name
cd project-name
yo react-redux
```

Once the installation is done, you can run some commands inside the project folder:

### `npm start` or `yarn start`

Runs the app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will see the build errors and lint warnings in the console.

### `npm test` or `yarn test`

Runs the test watcher in an interactive mode.<br>
By default, runs tests related to files changes since the last commit.

[Read more about testing.](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#running-tests)

### `npm run build` or `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

