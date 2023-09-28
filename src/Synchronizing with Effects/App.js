import React, {useEffect} from 'react';

function App(props) {
    useEffect(() => {
        const connection = createConnection();
        connection.connect();
        return () => connection.disconnect();
    }, [])
    return (
        <h1>Welcome to the chat!</h1>
    );
}

function createConnection() {
    return {
        connect() {
            console.log('Connecting');
        },
        disconnect() {
            console.log('Disconnected');
        }
    }
}

export default App;