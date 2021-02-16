# burger

This project is an application that allows the user to create a burger and put it on a list to devour.  The use can put as many burgers on this list to devour.  Once the use has "devoured" the burger, they can select the devoured button.  Once the devoured button is selected, the burger will move to the opposite side of the screen which shows that the burger has been eaten.  This process can be done as many times as the user would like.

## code

This application uses express, mysql, and express-handlebars.  A database was created using workbench to store the data made by the user.  There were many folders made for this application for the many files with different functionality to keep the developer organized.  

## config

The config folder contains the connection and orm javascript files.  The connection file contains basic mysql to link the database to the project.  The orm file is used to help organize the data base.

## controllers

The controller folder contains burger_controllers.js.  This controllers file routes the page using CRUD.

## db

The db folder contains the mysql database information that is pushed up to workbench and holds all of the data.

## models

The models folder contains the burger.js file.  This file contains the code that will call the ORM functions using the burger specific information.

## public

The public file contains the front end css and javascript used for the application.

## server.js

The server.js links all of the routes and files together giving the server access to them.

## Portfolio

Here is the link to my portfolio:

