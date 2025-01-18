## Usage
Call this component as a function and pass the following props:
* `userChoices`: An array of String containing the choices the user can select.
* `onUserChange`: A function that will be called when the user selects a choice.
* `selectedChoice`: The selected choice. Must always come from a `useState` hook.

```javascript
const [selectedChoice, setSelectedChoice] = useState('Choice 1')

const MyPicker = () => {
    return (
        <NaflowsSelect
            userChoices={[
                'Choice 1',
                'Choice 2',
                'Choice 3',
                ...
            ]}
            onUserChange={(choice) => {
                setSelectedChoice(choice);
                // Do something with the selected choice
            }}
            selectedChoice={selectedChoice}
        />
    )
}
```

If needed, please ask the design team for more customization options.
<br><br>
