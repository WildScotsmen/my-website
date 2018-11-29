import React from 'react';
import ContactForm from '../component/ContactForm';

class Contact extends React.Component {
    componentDidMount() {
        document.title = "Scoots | Contact";
    }

    render() {
        return <ContactForm />;
    }
}

export default Contact;