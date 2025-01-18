## Usage
Call this component as a function and pass the following props:
* `onUserInput`: A function that will be called when the user inputs text.
* `placeholder`: The placeholder text of the input.
* `fillCondition`: A function that determines if the input should be filled or not.
* `warning`: A function that determines if the input should display a warning or not (the function returns a String based on the conditions inside itself).

```javascript
<NaflowsInput
    onUserInput={(value) => {
        // Do something when the user inputs text
    }}
    placeholder='Type something here'
    fillCondition={(value) => {
        // Return true if the input should be filled
        /*
            Examples:
            return value.length > 0;

        */
    }}
    warning={(value) => {
        // Return a String if the input should display a warning
        /*
            Examples:
            return value.length > 10 ? 'Input too long (10 char. max.)' : '';
        */
    }}
/>
```

If needed, please ask the design team for more customization options.
<br><br>
