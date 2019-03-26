Just like any other React Native app, get started with:

First, [install yarn](https://yarnpkg.com/en/docs/install).

Then, navigate to the directory you've cloned this repo into.

```bash
$ git clone https://github.com/riyadshauk/rn-api-data-list-app.git
$ cd rn-api-data-list-app.git
```

And run the following commands:

```bash
$ yarn # installs dependencies into node_modules
$ yarn start
```

It should run out of the box; you should see a browser window pop up with buttons to launch the app in a simulator (if you run into issues at that step, you just need to make sure your developer environment is propery configured – search common issues on Google / Stack Overflow).

Check the [React](https://reactjs.org/) and [React Native](https://facebook.github.io/react-native/) docs for more info.

As a side note, I generated this scaffold using `create-react-native-app` (there may currently be better ways to do that – check the official [React Native Getting Started Guide](https://facebook.github.io/react-native/docs/getting-started) for more info).

That said, I only modified a few files (so don't feel overwhelmed):
- .eslintrc
- .flowconfig
- .gitignore
- package.json (and yarn.lock by running `yarn`)
- screens/HomeScreen.js
- screens/DataListScreen.js
- navigation/MainTabNavigator.js