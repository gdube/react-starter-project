## React Starter Project
A simple React based starter template to help you launch your next project.

The template uses Webpack 5 to compile React, JSX and SASS into a `build` directory which can then be used to run your project on GitHub Pages (or any other hosting server).

### Getting started
1. Select the "Use this template" button on the project page (top-right) to create a new directory using these assets.
2. Clone the project on your local environment.
3. Run `npm install` to install the node modules needed to run this project.
4. Compile your project, watch for updates and automatically display changes in your browser using the following command:
```
npm run start
```

### Deploying
The following command will deploy all the compiled code into the `build` directory which can then be used on a hosting service.
```
npm run build
```

### Directory structure
```
build
  - bundle.js
  - index.html
src
  - components
   - Page
     - Page.jsx
     - Page.module.scss
  - index.html
  - index.js
```
