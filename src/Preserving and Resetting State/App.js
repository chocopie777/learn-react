import React, {useState} from 'react';

const App = (props) => {
    const [to, setTo] = useState(contacts[0]);
    return (
        <div>
            <ContactList
                contacts={contacts}
                selectedContact={to}
                onSelected={contact => setTo(contact)}
            />
            <Chat key={to.id} contact={to}/>
        </div>
    )
};


const ContactList = ({contacts, onSelected, selectedContact}) => {
    return (
        <section>
            <ul>
                {contacts.map(contact =>
                    <li key={contact.id}>
                        <button onClick={() => {
                            onSelected(contact)
                        }}>
                            {contact.name}
                        </button>
                    </li>
                )}
            </ul>
        </section>
    )
};

function Chat({contact}) {
    const [text, setText] = useState('');
    return (
        <section className="chat">
            <textarea
                value={text}
                placeholder={'Chat to' + contact.name}
                onChange={e => setText(e.target.value)}
            />
            <br/>
            <button>Send to {contact.email}</button>
        </section>
    )
}

const contacts = [
    {id: 0, name: 'Taylor', email: 'taylor@mail.com'},
    {id: 1, name: 'Alice', email: 'alice@mail.com'},
    {id: 2, name: 'Bob', email: 'bob@mail.com'}
];

export default App;