# terminal-weather
Displays the weather for your city in the terminal.

**Note:** the commandline-app uses the googlemaps API which you can now only access with an api key. The app will most likely not work without one. To get such, visit: [Google Developer](https://developers.google.com/maps/documentation/javascript/get-api-key).
Then you have to replace the variable ``const apiKey`` with your [darksky.com](https://www.darksky.com) api key. After these two changes you should run the code without any problems.

## Usage:
Navigate to the directory where the app.js file lives.

Type ``node app.js`` followed by ``--address="``_``{address}``_``"`` (or ``-a="``_``{address}``_``"``) into your console.
