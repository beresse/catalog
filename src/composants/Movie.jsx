import React from "react"


class Movie extends React.Component {
    render() {
        return (
            <div>
                <p>Titre du film: {this.props.moviesTitle}</p>
                <p>Réalisateur: {this.props.realisator}</p>
                <p>Stars: {this.props.actor}</p>
                <img src={this.props.image}></img>
                <p>Synopsis: {this.props.description}</p>
            </div>
        )
    }
}
export default Movie
