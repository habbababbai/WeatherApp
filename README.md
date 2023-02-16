# Weather App

This is simple app made in React Native with Typescript and Redux (Redux Toolkit).
It fetches data from [Open Weather Map](https://openweathermap.org/) and displays it in form of chart. It takes users string input and tries to fetch city data from the API. The App is using Redux Toolkit and RTK Query for fetching the data, as this approach seems most modern.

# How to run

This application uses expo for app preview :

1.  Download repo
2.  Inside app directory run this command

```
npm i
npx expo start
```

If command above doesn't work try using command below (it can get a bit slow at times)

```
npx expo start --tunnel
```

3. Once dev server start scan QR code shown in terminal to preview App on your phone
4. Enjoy :)

# Packages used

-   [Expo](https://expo.dev/)
-   [Typescript](https://www.typescriptlang.org/)
-   [React](https://en.reactjs.org/)
-   [React Native](https://reactnative.dev/)
-   [Redux](https://redux.js.org/)
-   [Redux Toolkit](https://redux-toolkit.js.org/)
-   [RTK Query](https://redux-toolkit.js.org/rtk-query/overview)
-   [React-Native-Chart-Kit](https://www.npmjs.com/package/react-native-chart-kit)

# Folder structure
- assets - hold projects assets
- src
    - components - React components are stored here
    - features - Redux store slices
    - redux - Redux store and its hooks