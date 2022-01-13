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

#### (Optional) (Starting Dev Environment)
```
npm run dev
```

#### 3. Running the Application
Go to the following address in your web browser: 
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
  
  <img src="https://user-images.githubusercontent.com/69671663/149321500-b85a407e-0fa3-42a9-8fba-2017edaa848a.png" />
  
  <img src="https://user-images.githubusercontent.com/69671663/149321513-509e153f-8da7-43e0-990a-2fbacb718ce7.png" />
</p>

<p align="center">
  <img src="https://user-images.githubusercontent.com/69671663/149321517-cbaf471c-d099-4cd5-a5dd-07965d9f2d48.png" />
  
  <img src="https://user-images.githubusercontent.com/69671663/149321523-81ac291c-e23f-4a05-9ef9-40908d0c2e12.png" />
</p>
