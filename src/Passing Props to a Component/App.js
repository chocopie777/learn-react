import {getImageUrl} from "./utils";

function Avatar({person, size=100}) {
    return (
        <img
            className="avatar"
            src={getImageUrl(person)}
            alt={person.name}
            width={size}
            height={size}
        />
    );
}
//
// export default function Profile() {
//     return (
//         <>
//             <Avatar
//                 size={80}
//                 person={{
//                     name: 'Aklilu Lemma',
//                     imageId: 'OKS67lh'
//                 }}
//             />
//             <Avatar
//                 size={50}
//                 person={{
//                     name: 'Lin Lanying',
//                     imageId: '1bX5QH6'
//                 }}
//             />
//             <Avatar
//                 person={{name: 'Lin Lanying', imageId: '1bX5QH6'}}
//                 size={100}
//             />
//         </>
//     );
// }

function Card({children}) {
    return (
        <div className="card">
            {children}
        </div>
    );
}

export default function Profile() {
    return (
        <Card>
            <Avatar
                size={100}
                person={{
                    name: 'Katsuko Saruhashi',
                    imageId: 'YfeOqp2'
                }}
            />
        </Card>
    );
}