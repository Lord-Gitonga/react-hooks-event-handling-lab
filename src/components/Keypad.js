// Code Keypad Component Here

function Keypad() {
    function handleEvent(event) {
        console.log('Entering password...')
    }
    return (
        <div>
            <input type="password" placeholder="Add input here" onChange={handleEvent}></input>
        </div>
    )
}

export default Keypad;