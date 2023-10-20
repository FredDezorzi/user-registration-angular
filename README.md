# Angular API Consumption Study Project

This is a study project developed in collaboration with Minsait. The main goal of this project is to learn about consuming an API in Angular, implementing HTTP methods for CRUD (Create, Read, Update, Delete) operations on a user resource. For the proper functioning of this project, you need to meet the following prerequisites and configurations:

## Prerequisites

Before you begin, make sure you have Angular installed on your machine. If you don't have the Angular CLI installed, you can install it using the following command:


  ```bash
  npm install -g @angular/cli
  ```
This project also uses two external libraries that need to be installed:

**- SweetAlert2: Used to create interactive user notifications:**

  ```bash
  npm install sweetalert2
  ```
**- Inputmask: Used to format input data fields such as dates:**

  ```bash
  npm install inputmask
  ```

## API Configuration

For the project to function correctly, you need an active RESTful API running at the "http://localhost:8080" endpoint. This API should provide a user resource with the following attributes:

- id
- name
- email
- password
- birthDay

We recommend using the following backend repository, which already contains the necessary configurations: https://github.com/FredDezorzi/cadastro-usuarios-minsait.git .

Clone the backend repository and follow the installation and execution instructions in the README of the repository to set up the API.

## Features

This project implements the following features:

- Listing all users (GET - getAllUsers)
- Querying a specific user by ID (GET - getUserById)
- Deleting a user by ID (DELETE - deleteById)
- Creating new users (POST - insertUser)
- Updating user information (PUT - editUser)

## Installation and Execution

Follow these steps to install and run the project:

**1. Clone this repository:**
  ```bash
    git clone https://github.com/FredDezorzi/user-registration-angular.git
  ```

**2. Install the dependencies:**
  ```bash
    cd user-registration-angular
    npm install
  ```

**3. Start the development server::**
  ```bash
    ng serve
  ```

You can now access the application in your browser at "http://localhost:4200". Make sure that the backend API is also running at "http://localhost:8080" to ensure the project functions properly.

## Contribution

If you wish to contribute to this study project, feel free to open issues, send pull requests, or discuss improvement ideas.

## Contact

If you have any questions or suggestions, please feel free to get in touch:

- Name: Frederico Dezorzi
- Email: fred.dezorzi@gmail.com
- LinkedIn: Frederico Dezorzi






