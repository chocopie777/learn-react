import logo from '../logo.svg';
import '../App.css';
import { people } from '../data.js';
import { getImageUrl } from '../utils.js'

function Profile() {
    return (
        <img src="https://i.imgur.com/MK3eW3Am.jpg" alt="Katherine Johnson"/>
    )
}

export default function Gallery() {
    return (
        <section>
            <h1>Amazing scientists</h1>
            <Profile />
            <Profile />
            <Profile />
        </section>
    )
}

