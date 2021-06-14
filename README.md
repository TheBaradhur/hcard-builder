# Hcard Builder
## Pre thoughts
On the design, we can clearly see that there's 2 different sections that needs to communicate. To do that, what comes to mind instantly would be to create 2 components that communicates via vuex store to share a state. That allows for reusability and keeps the information consistant throughout the app. 

## Tools breakdwon
I'm using the following elements to achieve different purpose:
- `Vue.js` as the main JS framework
- `Vue-router` to handle routing in the app
- `Vuex` to handle the state of the hcard info
- `Jest` for unit testing
- `Tailwind` is used for CSS

## Required Improvements
- The CSS needs to be finished to match exactly the design, especially the responsive side of things
- I planned to add some unit tests to test each component but couldn't get to it 
- The state doesn't work well when you switch to the about page, that needs fixing
- Adding more validation on each fields

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

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```