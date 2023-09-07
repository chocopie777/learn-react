// export default function Button() {
//     function handleClick() {
//         alert('you clicked me');
//     }
//     return (
//         <button onClick={handleClick}>
//             click
//         </button>
//     )
// }

export default function Toolbar() {
    return(
        <div className="Toolbar" onClick={() => {
            alert('You clicked on the toolbar!')}}>
            <button onClick={() => alert('Playing!')}>
                Play Movie
            </button>
            <button onClick={() => alert('Uploading!')}>
                Upload Image
            </button>
        </div>
    )
}