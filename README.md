# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## npm install

In the project directory, you can run:
it will install all packages in package.json 

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


I have used three components on the TaskInput.js,TaskList.js,List.js to create a to-do list and created stores and reducers for state management. When users type the input the stores in store call todos which array of objects the item will store in from that I will store it in local storage so that when the user refreshes the page the details do not disappear from that I will display it in the rect using map function and store it another store called all store for deletion purpose. when the user clicks the delete button the item will disappear and the user also has the option to  check and uncheck the item it can marked and unmarked
