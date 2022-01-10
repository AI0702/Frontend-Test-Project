# Thunderbite-test

`Showdown` header and `Wheel` spinner developed using Pixi JS, with minimal dependencies. Includes an integrated web server.

## Requirements
* Node JS
* Pixi JS (installed automatically)
* Bootstrap (installed automatically)
* Express framework (installed automatically)

## Features
* A visual demonstration of animation and frontend-backend communications.
* Cross-platform compatible and responsive for all deveices, including IPhone 7 and newer, Desktop Chrome ( latest ), Mac Safari ( latest ), Windows  IE ( 10 and newer ) etc.
* Integrated web server that hosts the application.
* The showdown header lightning bolt keeps flickering at a 10 sec interval, while everything else remains lit.
* The wheel spinner requests on an endpoint from the JSON file, which returns a JSON object, based on which the wheel spins and stops randomly in range of the given position. This position can be changed in the `test.json` file.
* The wheel's start position is always randomized to give a dynamic feel. The wheel's stop position is also randomized in range of the given position quadrant specified in the json file.
* A preloader animation for visual effects and to load resources efficiently on page load.

## How to run

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
* Clicking on the `wheel` itself.
* Pressing `Enter` or `Space`.

#### (Optional) (Changing the wheel stop position)
Go to the path`\public\json\` and edit the `test.json` file. Change the value of the position attribute. (current valid values are 1 - 4)

## Screenshots

![s0](https://user-images.githubusercontent.com/69671663/148857215-78fa76ec-9721-4b32-93d7-ea8cdff8cf35.png)

![s1](https://user-images.githubusercontent.com/69671663/148857216-1e8c8383-738d-4575-98c4-5653798e9d9b.png)

<p align="center">
  <img src="https://user-images.githubusercontent.com/69671663/148857207-cc5d78c3-0243-4820-845c-175ff82c601d.png" />
</p>
