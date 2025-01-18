## Usage
Call this component as a function and pass the following props:
* `onUserClick`: A function that will be called when the user clicks the button.
* `content`: The content of the button (use a simple string or a JSX component).
* `type`: The type of the button. Can be either `primary`, `secondary`, `tertiary`. 
* `style`: The custom style of the button (usual CSS properties).

```javascript
<NaflowsPicker
    onUserClick={() => {
        // Do something when the user clicks the button
    }}
    content={
        /*  Insert String or JSX content */
        <div>
            <svg>/*SVG Path*/</svg>
            <span>Click me</span>
        </div>
    }
    type='primary'
    style={{
        /* Insert custom style */
    }}
/>
```

If needed, please ask the design team for more customization options.
<br><br>
