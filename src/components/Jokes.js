import React from "react";
import { connect } from "react-redux";
import { getJoke } from "../actions/JokesActions";

const Jokes = (props) => {
    const { joke, getJoke, error, isFetching } = props;

    const onClick = () => {
        getJoke();
        console.log('joke')
    }

    if (error) {
        return <h2>We got an error: {error}</h2>;
      }
    
      if (isFetching) {
        return <h2>Fetching person for ya!</h2>;
      }

    return (
        <>
        <div>
        <h2>Here's how it goes: {joke.setup} {joke.punchline}</h2>
        <button onClick={onClick}>Click for a new joke!</button>
        </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        joke: state.joke,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps, {getJoke})(Jokes);