# SkyScanner - Weather App

It is a web app created using ReactJS, HTML and Tailwind CSS. It detects your current location and gives the weather forecast and time in your area.
You can also search for any location, and it will detect its coordinates to give the real time weather data and time in that location. All this is done using API available from Open Weather and API Ninjas.

## Steps to run this on your local machine

### `Step 1`

Clone the repository using the command "git clone https://github.com/sanskar9067/SkyScanner.git"

### `Step 2`

Open terminal or command prompt and go to the location of this project in your machine.

### `Step 3`

**Note: Node should be installed in your system in order to run this.**

Run the command "npm i" or "npm install" to install all the node modules in the project.

### `Step 4`

Run the command "npm start" to run the react app.

## Live Link

https://skyscanner-weather-app.netlify.app/

## Approach and Technology Used

In this project, all the data has been fetched using APIs thanks to Open Weather and API Ninjas.

Firstly, for your current location data, JavaScript program was written to get your current latitude and longitude. The using the Open Weather API, I fetched the weather data using React axios and used the react useState() to set all these data to their respective states. Also using these coordinates, I was able to fetch the real time of that coordinate.

For searching a location, I created a simple input which accepts the name of the place and that is passed on to another API, which gives coordinates based on the name of the location and using those coordinates, I fetched the weather and time data just like I did previously.

To create the dark mode, I created a dark mode context API which handles the state globally across the app. And I created the dark mode toggler which toggles the dark mode when click on that button present on the navbar.

For smoother navigation across the two modes i.e weather report of your location and weather report based on user input, I used react-tabs library which created two tabs and user can navigate according to his needs.

### Limitations

While giving input, user is currently only bound to enter the name. In near future, I can add more versatality so that user can search places based on pin code of that area or by simply entering the exact coordinates.

## Screenshots

https://drive.google.com/drive/folders/1-2laLrMdfutwHaczWTkYDdsNALyeTB_w?usp=sharing