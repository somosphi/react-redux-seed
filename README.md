[![Coverage Status](https://coveralls.io/repos/github/4alltecnologia/react-redux-seed/badge.svg?branch=master)](https://coveralls.io/github/4alltecnologia/react-redux-seed?branch=master) [![Known Vulnerabilities](https://snyk.io/test/github/4alltecnologia/react-redux-seed/badge.svg)](https://snyk.io/test/github/4alltecnologia/react-redux-seed)

# react-redux-seed
> This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Stack
  - React
  - React Router Dom
  - Redux
  - Redux-thunk
  - axios
  - Styled Components


## Structure
```
├── __tests__
│   ├── __mocks__
│   ├── helpers  
│   └── store
├── components
│   └── Button
│       ├── index.js
│       └── index.test.js
├── containers
├── helpers
├── images
├── screens
│   ├── Home
│   │   └── index.js
│   └── NotFound
│       └── index.js
├── services
├── store
│   ├── actions.js
│   ├── error
│   │   ├── actions.js
│   │   └── reducer.js
│   ├── loading
│   │   ├── actions.js
│   │   └── reducer.js
│   └── reducers.js
├── styles
├── index.js
├── registerServiceWorker.js
├── router.js
```

### Dependencies
```
npm i 
```

### Development
```
npm run start
```

### Building

Production:
```
npm run build:production
```

Homologation:
```
npm run build:homologation
```