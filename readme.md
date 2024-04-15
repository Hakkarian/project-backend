# Phonebook

A multipage application using React, Redux, Node.js, MongoDB, Mongoose and other minor technologies.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)

## Installation

!important (Make sure you've installed a backend locally. Check out: https://github.com/Hakkarian/project-frontend)

- git clone https://github.com/Hakkarian/project-backend.git app
- cd app
- npm i
- npm start
- Your app is up and running!

## Usage

The multipage application is used to register and login the user. After user succesfully passes the authentication, he will be redirected to the contacts page. In the contacts page user can add, delete, of filter contacts by name or phone number.

## Features

The multipage application consists of three pages - registration page, login page and contacts page.

Registration page

Allows user to login, after he passes necessary information (email, password).

Login page

Takes data from value, entered by user, sends it to the backend. If the request was succesful, user is redirecting to the contacts page. If data was incorrect, user fails to login and access to contacts page is denied.

Contacts page

Consists of form submit, filter functionality and list of contacts with name and number.






