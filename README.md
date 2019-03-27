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
- constants/urlRequestInfo.js **
- components/CustomFlatList.js **

** NOTE: You will need to modify constants/urlRequestInfo.js and components/CustomFlatList.js to get this example working out of the box with a POST request. Otherwise, you will see the following message when you run the app `Error:Network request failed`, or you will see another error for attempting to render properties of objects that don't exist.

However, if you have the password for `constants/urlRequestInfo.7z` and `components/CustomFlatList.7z`, you simply need to run `7z e constants/urlRequestInfo.7z` and `7z e components/CustomFlatList.7z` and rename the resulting `.7z.js` extentions to just `.js`.