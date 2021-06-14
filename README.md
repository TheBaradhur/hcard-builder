# Hcard Builder
## Pre thoughts
On the design, we can clearly that there's 2 different sections that needs to communicate. To do that, what comes to mind instantly would be to create 2 components that communicates via vuex store to share a state. That allows for reusability and keeps the information consistant throughout the app. 

## Tools breakdwon
I'm using the following elements to achieve different purpose:
- `Vue.js` as the main JS framework
- `Vue-router` to handle routing in the app
- `Vuex` to handle the state of the hcard info
- `Jest` for unit testing
- `Eslint/prettier` to have consistant coding rules
- `Tailwing` is used for CSS

## What's next?

Next step would be to add the backend. You can wire the vuex store actions with axios to interact with the backend through API calls.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```
Then access the following url:
```
http://localhost:8080/
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```