# Maps in the `@styling` package
## Presentation
### About 
The Naflows Styling package contains a set of functions and components that help to style the Naflows applications. The package is divided into two main parts: functions and components. The functions are used to generate CSS styles, while the components are used to create styled components. The package is designed to be used with the `@components` library.
While using the Naflows Library, you must keep the library up to date with the latest version. This will ensure that you have access to the latest features and bug fixes. You can update the library by running the following command in your project directory. 
### Notice
You may want to modify by yourself some of the components in the `@styling` package. If you do so, please make sure to follow the design guidelines and to test the components before using them in production.
You can also ask the design team for help if you need to make changes to the components.
<br>
Please make sure you know what you are doing before modifying the components in the `'@components'` package.
### Maintenance
The `'@styling'` package and the `'@components'` is maintained by the Naflows design team. If you have any questions or need help with the package, please contact the design team.<br>
The Naflows Library uses the SCSS extension to customize the styles of the components. This is why we cannot provide an external access to the library via our servers for now. 

## General Information
### Location
The main maps of the Naflows Library are located in the `@styling` package, at `@styling/main.scss`.<br>
Importing the main file will allow you to access all the styles maps of the Naflows Library. You can also import the maps individually if you only need a specific part of the library.
<br>
Please note that calling a single component will import all the maps of the library. This is why it is recommended to import the main file only.

### Functions
Basics functions are available at the top of the main file. These functions allows calculations and hues manipulations.

## Maps
### Colors
The colors maps contains the main colors of the application. These colors are used to style the components of the application. The colors are defined in the `@styling/maps/colors.scss` file.
<br>
The main variables are located at the top of the `colors` file. These variables are used to define the main colors and sizes of the components.
<br>
These are, but not limited to:
* `'$primary-color'`: The primary color of the application.
* `'$secondary-color'`: The secondary color of the application.
* `'$app-background-color'`: The background color of the application.
* `'$app-text-color-on-primary'`: The text color of the application on the primary color.
* `'$app-text-color-on-background'`: The text color of the application on the background.
* `'$functionnal-error'`: The color of the error message.
* `'$functionnal-warning'`: The color of the warning message.
* `'$functionnal-success'`: The color of the success message.

### Fonts
The fonts maps contains the main fonts of the application. These fonts are used to style the text of the components. The fonts are defined in the `@styling/maps/fonts.scss` file.

### Gaps
The gaps maps contains the main gaps of the application. These gaps are used to style the components of the application. The gaps are defined in the `@styling/maps/gaps.scss` file.

### Lengths
The lengths maps contains the main lengths of the application. These lengths are used to style the components of the application. The lengths are defined in the `@styling/maps/lengths.scss` file.

### Paddings
The paddings maps contains the main paddings of the application. These paddings are used to style the components of the application. The paddings are defined in the `@styling/maps/paddings.scss` file.

### Radiuses
The radiuses maps contains the main radiuses of the application. These radiuses are used to style the components of the application. The radiuses are defined in the `@styling/maps/radiuses.scss` file.

### Times 
The times maps contains the main times of the application. These times are used to style the components of the application. The times are defined in the `@styling/maps/times.scss` file.

