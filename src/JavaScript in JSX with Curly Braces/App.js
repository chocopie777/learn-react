// export default function Avatar() {
//     const avatar = 'https://i.imgur.com/7vQD0fPs.jpg';
//     const description = 'Gregorio Y. Zara';
//     return (
//         <img src={avatar} alt={description} className="avatar"/>
//     );
// }

// const today = new Date();
//
// function formatDate(date) {
//     return new Intl.DateTimeFormat(
//         'en-US',
//         { weekday: 'long' }
//     ).format(date);
// }
//
// export default function TodoList() {
//     return (
//         <h1>To Do List for {formatDate(today)}</h1>
//     );
// }

// export default function TodoList() {
//     return (
//         <ul style={{backgroundColor: 'black', color: 'green'}}>
//             <li>Improve the videophone</li>
//             <li>Prepare aeronautics lectures</li>
//             <li>Work on the alcohol-fuelled engine</li>
//         </ul>
//     )
// }

const person = {
    name: 'Gregorio Y. Zara',
    theme: {
        backgroundColor: 'black',
        color: 'pink'
    },
    url: 'https://i.imgur.com/7vQD0fPs.jpg',
};

export default function TodoList() {

    return (
        <div style={person.theme}>
            <h1>{person.name}'s Todos</h1>
            <img
                className="avatar"
                src={person.url}
                alt="Gregorio Y. Zara"
            />
            <ul>
                <li>Improve the videophone</li>
                <li>Prepare aeronautics lectures</li>
                <li>Work on the alcohol-fuelled engine</li>
            </ul>
        </div>
    );
}