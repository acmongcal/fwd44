function Rename() {

    const renameYourApp = () => {
        let newAppName = prompt('What is the new name of your app?');

        if( newAppName !== null) {
            newAppName = newAppName.trim();
        }

        while( newAppName === null || newAppName === '') {
            newAppName = prompt('Invalid name. Please enter a new name for your app.');

            if( newAppName !== null) {
                newAppName = newAppName.trim();
            }
        }

        console.log({ newAppName });
    }

    return (
        <div>
            <p>Click the button below to rename your app.</p>
            <button onClick={renameYourApp}>Rename</button>
        </div>
    )
}

export default Rename
