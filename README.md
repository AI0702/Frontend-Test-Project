# Thunderbite-test

`Showdown` header and `Wheel` spinner developed using Pixi JS, with minimal dependencies. Includes an integrated web server.

## Requirements
* Node JS [(download link)](https://nodejs.org/en/download/)
* Pixi JS [(see installation step 1)](#1-installing-dependencies)
* Bootstrap [(see installation step 1)](#1-installing-dependencies)
* Express framework [(see installation step 1)](#1-installing-dependencies)

## Features
* A visual demonstration of animation and frontend-backend communications.
* Extremely light-weight, cross-platform compatible, pixel-perfect responsiveness for all deveices, including IPhone 7 and newer, Desktop Chrome ( latest ), Mac Safari ( latest ), Windows  IE ( 10 and newer ) etc.
* Integrated web server that hosts the application.
* Minified js files.
* Appropriate error handling and debug messages.
* The showdown header lightning bolt keeps flickering at a 10 sec interval, while everything else remains lit.
* The wheel spinner requests on an endpoint from the JSON file, which returns a JSON object, based on which the wheel spins and stops randomly in range of the given position. This position can be changed in the `test.json` file.
* The wheel's start position is always randomized to give a dynamic feel. The wheel's stop position is also randomized in range of the given position quadrant specified in the json file.
* A prize win screen depending on where the wheel stopped.
* A preloader animation & splash screen for visual effects and to load resources efficiently on page load.
* (more coming soon...)

## How to run
(make sure your internet is connected.)

#### 1. Installing Dependencies
```
npm install
```

#### 2. Starting Web Server
```
npm start
```

#### 3. Running the Application
Go to the address: 
```
localhost:8000
```

#### (Spinning the wheel)
The wheel can be spinned by:
* Clicking on the `Spin` button.
* Pressing `Enter` or `Space`.

#### (Optional) (Changing the wheel stop position)
From the project folder, go to the path`\public\json\` and edit the `test.json` file. Change the value of the position attribute. (current valid values are 1 - 4)

## Screenshots

<p align="center">
  <img src="https://user-images.githubusercontent.com/69671663/149233950-a3ecae35-711c-4c2f-80eb-d1aeeaecf5a3.png" />
  
  <img src="https://user-images.githubusercontent.com/69671663/149233960-ee0170f2-27b2-4312-a12c-24f784806c1b.png" />
  
  <img src="https://user-images.githubusercontent.com/69671663/149233965-08137f08-51d3-46d1-9a60-69af5389f4b0.png" />
  
  <img src="https://user-images.githubusercontent.com/69671663/149233966-67444c76-2d8d-4e54-99a0-17490f59c3fa.png" />
</p>

<p align="center">
  <img src="https://user-images.githubusercontent.com/69671663/149233970-f0c68401-08a7-4dd2-935b-9b9db82eb77e.png" />
  
  <img src="https://user-images.githubusercontent.com/69671663/149233972-fc88739e-d621-4045-908d-f19548b0b213.png" />
</p>
