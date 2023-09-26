import React, {createContext, useContext} from 'react';

const ProfilePage = (props) => {
    return (
        <Section>
            <Heading>
                My Profile
            </Heading>
            <Post
                title="Hello traveller!"
                body="Read about my adventures"
            />
            <AllPosts/>
        </Section>
    )
};

function AllPosts() {
    return (
        <Section>
            <Heading>Posts</Heading>
            <RecentPosts/>
        </Section>
    )
}

function RecentPosts() {
    return (
        <Section>
            <Heading>Recent Posts</Heading>
            <Post
                title="Flavors of Lisbon"
                body="...those pastéis de nata!"
            />
            <Post
                title="Buenos Aires in the rhythm of tango"
                body="I loved it!"
            />
        </Section>
    )
}

function Post({title, body}) {
    return (
        <Section isFancy={true}>
            <Heading>
                {title}
            </Heading>
            <p><i>{body}</i></p>
        </Section>
    )
}

const LevelContext = createContext(0);

function Section({children, isFancy}) {
    const level = useContext(LevelContext);
    return (
        <section>
            <LevelContext.Provider value={level + 1}>
                {children}
            </LevelContext.Provider>
        </section>
    )
}

function Heading({children}) {
    const level = useContext(LevelContext)
    switch(level) {
        case 1:
            return <h1>{children}</h1>;
        case 2:
            return <h2>{children}</h2>;
        case 3:
            return <h3>{children}</h3>;
        case 4:
            return <h4>{children}</h4>;
        case 5:
            return <h5>{children}</h5>;
        case 6:
            return <h6>{children}</h6>;
        default:
            throw Error('Unknown level' + level)
    }
}

export default ProfilePage;