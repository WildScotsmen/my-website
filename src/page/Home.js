import React from 'react';
import SocialMedia from '../component/SocialMedia';

class Home extends React.Component {
    componentDidMount() {
        document.title = "Scoots | Home";
    }

    render() {
        return <SocialMedia />;
    }
}

export default Home;