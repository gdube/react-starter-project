## React Starter Project
A simple React based starter template to help you launch your next project.

The template uses Webpack 5 to compile React, JSX and SASS into a `build` directory which can then be used to run your project on GitHub Pages (or any other hosting server).

### Getting started
1. Select the "Use this template" button on the project page (top-right) to create a new project using these assets.
2. Clone the project on your local environment.
3. Run `npm install` to install the node modules needed to run this project.
4. Compile your project, watch for updates and automatically display changes in your browser using the following command:

#### Development
```
npm run watch
```

#### Production
```
npm run watch:production
```

### Deploying
The following command will deploy all the compiled code into the `build` directory which can then be used on a hosting service.

#### Development
```
npm run build
```

#### Production
```
npm run build:production
```

### Directory structure
```
build
  - index.html
  - main.css
  - main.js
src
  - components
   - App
     - App.jsx
     - App.module.scss
  - index.html
  - index.js
```

### Having issues?
If the `watch` and `build` commands aren't working for you, try to install Webpack globally to see if it resolves your issues.
```
npm install -g webpack
```

If you continue to have issues, log an issue on the project page and we'll take a look!
