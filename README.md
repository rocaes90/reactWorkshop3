# ABOUT THE TEST
I developed this test like part of the Sapient recruitment process.

## INSTRUCTIONS
```
You need to build a React app and associated components that allow a user to build queries based around an entity’s attributes. Once built, the query will be sent to an endpoint that’s underdevelopment.
The enclosed data.json file contains the set of predefined attributes, combinators, and operators to use in creating the queries.
The user must be able to change the entity dropdown to load the related attributes, the same behavior if you change the attribute value, you will see the operators related (keep in mind that you have all the operator values, so you can choose them at your discretion) and finally, for the input value the user will have the following possibilities:
    ● In the string/number case, you will have an input type.
    ● In the date case, you will have an input date type
    ● In the boolean case, you will have a dropdown with true/false values.
    ● In the enum case, you will have a multiselect input with the enum values
The plus button only appears if attribute, combinator, operator, and value are not empty.
The combinator dropdown only appears if you have a query added(See uiexample3 & uiexample4) and the default value should be AND.
If a user clicks on the add button the current query will be added above it (See uiexample3 & uiexample4), moreover, the delete button will restore the UI to its initial state (See uiexample1 or uiexample5).
The application must support adding multiple queries and must allow users to remove them using the X icon.
```

## WHAT TECHNOLOGIES ARE USING
```
- react
    - react-router
    - react-css-transitions
    - prop-types
- webpack
    - webpack-server
- sass
- babel
    - css-loader
    - sass-loader
    - style-loader
- ES6
```

## ABOUT STRUCTURE
```
1. app - [FOLDER]: all the code for the <app>: components [.js], styles [.scss] , data [.json], images [.png, .ico] and HTML
    1. component - [FOLDER]: all the used components for the app
        1. Generator - [FOLDER]: components used in the <generator> section.
            1. Attribute - Container
            2. Combinator - Container
            3. Entiy - Container
            4. Operator - Container
            5. UserParameter - Container
        2. App - [FILE]: Component <father>
        3. Header - [File]: Generic header 
        4. MultiSelectControl - [FILE]: Reusable component, render the <MultiSelect> control
        5. NotFound - [FILE]: Used in the <react-route>
    2. data - [FOLDER]: Data for the application.
    3. img - [FOLDER]: All the images for the app.
    4. sass - [FOLDER]: SASS files for the app style.
        1. main - [FILE]: Styles for all the page.
        2. variables - [FILE]: Sass variables.
2. NODE_MODULES - FOLDER: [auto-generated] Libraries for the application
```

### To test the APP
Actually its NOT in a online hosting, only run in dev environment.

## RUN INDICATIONS

## IMPORTANT!
### npm dependencies install 
```
npm install - its going to install all the npm dependencies in the <package.json> file
```

### webpack-dev-server command
```
npm run start - run the server and open a new tab in the browser <http://localhost:8080/>
```