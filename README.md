# Thunderbite-test

"Showdown" header and "Wheel" spinner developed using Pixi JS, with minimal dependencies. Includes an integrated web server.


## Requirements
* Node JS
* Pixi JS (installed automatically)
* Bootstrap (installed automatically)
* Express framework (installed automatically)


## Features
* A visual demonstration of animation and frontend-backend communications.
* Cross-platform compatible and responsive for all deveices, including IPhone 7 and newer, Desktop Chrome ( latest ), Mac Safari ( latest ), Windows  IE ( 10 and newer ) etc.
* Integrated web server that hosts the application.
* The "showdown" header lightning bolt keeps flickering at a 10 sec interval, while everything else remains lit.
* The "wheel" spinner requests on an endpoint from the JSON file, which returns a JSON object, based on which the wheel spins and stops randomly in range of the given position. This position can be changed in the `test.json` file.
* The wheel's start position is always randomized to give a dynamic feel. The wheel's stop position is also randomized in range of the given position quadrant specified in the json file.
* A preloader animation for visual effects and to load resources efficiently upon startup.


## How to run

#### 1. Installing Dependencies
`npm install`

#### 2. Starting Web Server
`npm start`

#### 3. Running the Application
Go to the address: `localhost:8000`

#### (Spinning the wheel)
The wheel can be spinned by:
* Clicking on the "Spin" button.
* Clicking on the wheel itself.
* Pressing `Enter` or `Space`.

#### (Optional) (Changing the wheel stop position)
Go to the path`\public\json\` and edit the `test.json` file. Change the value of the position attribute. (current valid values are 1 - 4)


## Screenshots

![s1](https://user-images.githubusercontent.com/69671663/148763516-e9d4c41f-23f6-4607-b9b7-1e91d6b9678a.png)

![s2](https://user-images.githubusercontent.com/69671663/148763521-7adba411-66f1-49ac-bded-1aad462ef1b1.png)

![s3](https://user-images.githubusercontent.com/69671663/148763570-32f2fdd3-f330-44af-84b9-9a840693d836.png)


