import React from 'react';
import firebase from '../firebase';
import Typography from '@material-ui/core/Typography';

class MovieQuote extends React.Component {
    state = {
        quotes: [],
        number: 0
    }

    componentDidMount() {
        const quotesRef = firebase.database().ref('movie-quotes');
        var quotesList = [];

        quotesRef.on('value', (snapshot) => {
            snapshot.forEach(function (data) {
                quotesList.push(data.val());
            });

            this.setState({
                quotes: quotesList,
                number: Math.floor(Math.random() * quotesList.length)
            });
        });
    }

    render() {
        return (
            <div>
                <Typography variant="h4" component="h3" align="center">
                    {this.state.quotes[this.state.number]}
                </Typography>
            </div>
        );
    }
}

export default MovieQuote;