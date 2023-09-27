import React, {useRef, useState} from 'react';

// const App = (props) => {
//     let ref = useRef(0);
//
//     function handleClick() {
//         ref.current = ref.current + 1;
//         alert('You clicked ' + ref.current + ' times!');
//     }
//
//     return (
//         <button onClick={handleClick}>
//             Click me!
//         </button>
//     )
// };

const App = () => {
    const [startTime, setStartTimer] = useState(null);
    const [now, setNow] = useState(null);
    const intervalRef = useRef(null);

    function handleStart() {
        setStartTimer(Date.now());
        setNow(Date.now());

        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setNow(Date.now());
        }, 10);
    }

    function handleStop() {
        clearInterval(intervalRef.current);
    }

    let secondsPassed = 0;
    if (startTime !== null && now !== null) {
        secondsPassed = (now - startTime) / 1000;
    }

    return (
        <>
            <h1>Passed time: {secondsPassed.toFixed(3)}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </>
    )

};
export default App;