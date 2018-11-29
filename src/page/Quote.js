import React from 'react';
import MovieQuote from '../component/MovieQuote';

class Quote extends React.Component {
    componentDidMount() {
        document.title = "Scoots | Quote";
    }

    render() {
        return <MovieQuote />;
    }
}

export default Quote;