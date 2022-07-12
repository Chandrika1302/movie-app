import { Component } from "react";
import ReactDOM from 'react-dom';
import Header from "../../common/header/Header";
import moviesData from "../../common/MoviesData";
import { Typography } from "@material-ui/core";
import "./Details.css";
import Home from "../home/Home";
class Details extends Component {
  constructor() {
    super();
    this.state = {
      movie: {},
    };
  }

  componentWillMount() {
    let currentState = this.state;
    currentState.movie = moviesData.filter((mov) => {
      return mov.imdbID === this.props.movieId;
    })[0];
    this.setState({ currentState });
    // console.log(this.state);
  }

  backToHomeHandler = () => {
    ReactDOM.render(<Home/>,document.getElementById('root'));
  }

  render() {
    let movie = this.state.movie;
    return (
      <div className="details">
        <Header />
        <div className="back">
          <Typography onClick={this.backToHomeHandler}>
             &#60; Back To Home
          </Typography>
        </div>
        <div className="flex-containerDetails">
          <div className="middleDetails">
          <div>
            <div>
              <Typography variant="headline" component="h3">
                {movie.Title}
              </Typography>
            </div>
            <img src={movie.Poster} alt={movie.Title} />
          <div>Year:{movie.Year}</div>

          </div>
         
          </div>

        </div>
      </div>
    );
  }
}
export default Details;
