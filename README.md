# BlueGenie Project

## What is the use of this Repo

This Project is a ReactJS Project which demonstrates the following

1. Teaching kids Arduino basics
2. Testing kids with quizs
3. Sending data through serial port to Arduino board

The project Template can be used to build bigger projects

## Live Application URL

###

This URL has the application deployed in

## Prerequisites

### Install Node JS

Refer to https://nodejs.org/en/ to install nodejs

### Install create-react-app

Install create-react-app npm package globally. This will help to easily run the project and also build the source files easily. Use the following command to install create-react-app

```bash
npm install -g create-react-app
```

## Live Application URL

The Application is deployed in

Click on the link to see the application

## Cloning and Running the Application in local

Clone the project into local

Install all the npm packages. Go into the project folder and type the following command to install all npm packages

```bash
npm install
```

In order to run the application Type the following command

```bash
npm start
```

The Application Runs on **localhost:3000**

## Application design

#### Components

1. **AccountBox** Component : This Component displays a login page.

2. **SubscribeBox** Component : This Component Displays a subscribe page.

3. **Quizpage** Component : This Component Displays a quiz. This Component gets its data from a data base.

4. **showScore** Component : This Component Displays the result . This Component gets its data fromthe component Quizpage.

#### HTTP client

**axios** library is used to make HTTP Calls

#### URL

The application has url /quiz which ties to Quizpage Component and url /showScore which ties to showScore Component.

## Resources

**create-react-app** : The following link has all the commands that can be used with create-react-app
https://github.com/facebook/create-react-app

**ReactJS** : Refer to https://reactjs.org/ to understand the concepts of ReactJS

**React Bootstrap** : Refer to https://react-bootstrap.github.io/getting-started/introduction/ to understand how to use React Bootstrap
