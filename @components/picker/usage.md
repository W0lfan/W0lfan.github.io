## Important note
This particular component requires to install `uuid` package.

## Usage
Call this component as a function and pass the following props:
* `values`: An array of objects with the following structure:
    * `value`: The value of the option.
    * `content`: The content of the option (use a simple string or a JSX component).
* `parameters` : An object containing customization parameters.
* `onChange`: A function that will be called when the value of the picker changes.
* `value`: The value of the picker. Must always come from a `useState` hook.
<br><br>

### Normal picker
```javascript

const [selectedValue, setSelectedValue] = useState('option_1')

<Picker
    values={[
        {content: /* Insert String or JSX content*/ },
        {content: /* Insert String or JSX content*/ },
        ...
    ]}
    parameters={{
        /* Adjust picker parameters */
    }}
    onChange={(value) => {
        setSelectedValue(value);
        // Do something with the selected value
    }}
    value={setSelectedValue}
/>  
```
<br><br>

### Menu picker
```javascript

const [selectedValue, setSelectedValue] = useState('option_1')

<Picker
    values={[
        {"option_1": [
            {content: /* Insert String or JSX content*/ },
            {content: /* Insert String or JSX content*/ },
            ...
        ]},
        {"option_2": [
            {content: /* Insert String or JSX content*/ },
            {content: /* Insert String or JSX content*/ },
            ...
        ]}
    ]}
    parameters={{
        /* Adjust picker parameters */
    }}
    onChange={(value) => {
        setSelectedValue(value);
        // Do something with the selected value
    }}
    value={setSelectedValue}
/>  
```
<br><br>

## Parameters
The `parameters` object can contain the following properties:
* `slideType`: The type of slide animation. Can be either `horizontal` (horizontal) or `vertical`.
* `slideStyle`: The style of the slide. Can be either `highlight` or `line`.
* `justifyContent`: The alignment of the options. Can be either `center`, `flex-start`, `flex-end`, `space-between`, `space-around`, `space-evenly`.

If needed, please ask the design team for more customization options.
