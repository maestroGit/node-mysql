 Ejemplo de aplicación web con conexion de Node.js y mysql (base de datos SQL).

Inicio de sesión y registro con mysql

Mejoras:
Necesita tokens bcrypt y jwt para iniciar sesión. Métodos para evitar que los bots envíen formularios para evitar el spam y los usuarios falsos.

Prerequisites:
Node JS installed on your PC.
Basic understanding of Node JS and Express JS.
Knowledge of SQL, you should know and understand how to query a database.
phpmyadmin installed on your PC. I recommend installing xampp as it already contains phpmyadmin in it.
A text editor or IDE of your choice.

├── node-mqsql (main directory)   
    ├── node_modules
    ├── public
        ├── assets 
            ├── 
    ├── routes
        ├── 
        ├── 
    ├── views
        ├── 
            ├── 
        ├── 
    ├── index.js  

Creating the directory for the project
Open the command prompt in a suitable directory and type the following command:
mkdir node-mysql-crud-app 
then change to the directory by typing the following command
cd node-mysql-crud-app 

data base (xampp)

Initialize the Project
Open your command prompt in your project directory and type the command below:
npm init
Install required modules.
The following modules are going to be needed to successfully build the app.

express: used to create handle routing and process requests from the client.
express-fileupload: Simple express file upload middleware that wraps around busboy.
body-parser: used to parse incoming request from the client.
mysql: Node JS driver for MySQL.
ejs: templating engine to render html pages for the app.
req-flash: used to send flash messages to the view
nodemon: Installed globally. It is used to watch for changes to files and automatically restart the server.
Type the following command to install the first 7 modules as dependencies.
npm install express express-fileupload body-parser mysql ejs req-flash --save
Then type the following command to install the last module globally on your PC.
npm install nodemon -g
Creating the database for the app
Copy the command below and navigate to your phpmyadmin dashboard and execute the following query in the console (usually found at the bottom of the page) in order to create database and table for the app.

Instalamos las librerias
librerias:
- body-parser 

PARSER:
Un "parser" en el lenguaje de la computación, es un analizador sintáctico. Es decir, analíza la sintáxis de un documento o sentencia escritos en un lenguaje en particular. Lo que se haga con la información que se pueda obtener de esta manera es otro cuento.

- express

How to exit in Node.js
Call the global process object's exit method:
process.exit()

Press Ctrl + C twice, or
type .exit and press Enter, or
press Ctrl + D at the start of a line (Unix only)
