# Careersite

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Made for Grafikr as part of a test

This app is developed by Casper Knudsen. Design was developed by GRAFIKR APS.


## Comments
The project is made up of section components, thus reducing the time needed to take things out, if you need to rearange the layout this can be done simply by
moving the sections in app.component.ts this makes it easy to maintain and also easy to plug new sections in. The projekt was build with using mostly CSS, Js and HTML.

I thought about using BOOTSTRAP or angular materials, but came to the conclusion that i wanted to make it myself. Animations on the site is made with AOS(js library), and some custom css for other elements. 

The app is mostly responsive and is done using media queries in css and scaling units. 

I could have gone with IONICS framework that is buildt on Angular, then it would have been a breeze as IONIC takes care of it. Only flaw is that IONIC is not really good for building websites like the handed assignment.

Optimal conditions for the site is a resolution of 1920x1080 pixels, as most devices(PC and MAC) use this resolution today. 

## Future implementations

If the site had to go live, there needs to be cookie information.
Lazy loading on Video and images.
better media querys
optimized picture sizes

## BUGS
Slider is not fully responsive, there is some bug i cant seem to fix with the limited time i have for this project. As stated before, this app is optimized for desktop. i have tested on the phone, and it works, but something is wrong with the css rules



## Make the app work

To make this app work you need NODE on your system and Angular CLI. To get started go to https://nodejs.org/en/ and get node for global installation
Next get the Angular CLI which is found on https://cli.angular.io/.

Next type "npm install" when you have loaded the folder location of the app in your favorite command line interface(Power shell or CMD) This will install the
packages used for this project which are NGX-SWIPER. No other packages is needed. 