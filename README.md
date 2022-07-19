Weather-Journal App Project

website can `detect user location` and diplay weather news automaticly,using `navigator.geolocation` on `windows.load`

=> `app.js` (line 29) _need permission to start_ ;)

user can enter `Postal code` and `Feelings`.

user can enter 'country name' input as an optioal input field.

if the user let the input field empty it will be "USA" as a default value,(User Gets Alert mouse over 'Country Name inupt Field').

=> `app.js` (line 390)

if user let any fields empty except of "Country Name" => User will get an alert to know which input field should fill.

=> `app.js` (line 398)

when user choose to type a country name `app.js` will prepare the the input value to be able to process and get Country code.

=> `app.js` (line 290)

I created a file to contain array of objects `[{country,code}]` and Export it using `module.exports`

=> `./countries.js`

I created a new route `GET` with ability to take country name as "a parameter" and check if the country is exist or not and send response like : {code : "us"} or {code: "none"}.

=> `server.js` (line 33)

if code is "none" alert message will abear to user.
if code is correct so a `Get` function will start to get Weather Data.

after reciving data another `Get` function will start to get "Town background images" from api.unsplash.com`.

=> `app.js` (line 85)

create a list with maxmum 5 background images for the website
create navigation slider and loop them every 10 seconds.

=> `app.js` (line 276)

create CSS Variable `var(--name)` and controle them using `DOM`.

change website logo color based on background brightness algorithm.

=> `app.js` (line 354)
