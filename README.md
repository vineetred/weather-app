# weather-app

Building a weather app using the Google API and harnessing it with Node.js

It takes in one arguement, that is the location address you want to find the weather of. The address can be a partial address too.

How to use?

 ![alt text](https://i.imgur.com/8Hsczvi.png)


```
node app.js -a="ADDRESS IS ENTERED HERE"
```
Example:

```
node app.js -a="Empire State Building, NYC"
>350 5th Ave, New York, NY 10118, USA
>The temperature is -4.28 celsius and it feels like -8.59 celsius
```

Alternate argument parameter instead of ``` -a ``` is:

```
node app.js --address="ADDRESS IS ENTERED HERE"
```

