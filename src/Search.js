import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class SearchForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            gameName: "",
            games: []
        };
    }

    handleSubmitForm(event) {
        axios.post(`http://localhost:8000/game/`+ this.state.gameName)
            .then(res => {
                const games = res.data;
                this.setState({ games });
            })
        event.preventDefault();
    }

    handleChange(event) {
        let value = event.target.value;

        this.setState({
            gameName: value
        });
    }

    render() {
        return (
            <form onSubmit={event => this.handleSubmitForm(event)}>
                <label>
                    Nom du jeu:
                    <input
                        type="text"
                        value={this.state.gameName}
                        onChange={event => this.handleChange(event)}
                    />
                </label>
                <input type="submit" value="Rechercher" />
                <ul>
                    { this.state.games.map(game => <Link key={game.appid} to={'/fiche/?appid='+ game.appid}><li>{game.name}</li></Link>)}
                </ul>
            </form>
        );
    }
}