import { Component } from "react";
import ReactDOM from "react-dom";
import Header from "../../common/header/Header";
import "./Home.css";
import Details from "../details/Details";
import { GridList, withStyles } from "@material-ui/core";
import { Button } from "@material-ui/core";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import moviesData from "../../common/MoviesData";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import FormControl from "@material-ui/core/FormControl";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  gridListUpcomingMovies: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
    width: "100%",
  },
  gridListMain: {
    transform: "translateZ(0)",
    cursor: "pointer",
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 240,
    maxWidth: 240,
  },
  title: {
    color: theme.palette.primary.light,
  },
});
class Home extends Component {
  constructor() {
    super();
    this.state = {
      movieName: "",
    };
  }

  movieNameChangeHandler = (event) => {
    this.setState({ movieName: event.target.value });
  };
  movieClickHandler = (movieId) => {
    ReactDOM.render(
      <Details movieId={movieId} />,
      document.getElementById("root")
    );
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Header></Header>
        <div className="upcoming-movies">Upcoming Movies</div>
        <div>
          <GridList cols={5} className={classes.gridListUpcomingMovies}>
            {moviesData.map((movie) => (
              <GridListTile key={movie.imdbID}>
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  className="movie-poster"
                />
                <GridListTileBar title={movie.Title}></GridListTileBar>
              </GridListTile>
            ))}
          </GridList>
          <div className="flex-container">
            <div className="left">
              <GridList
                cellHeight={350}
                cols={4}
                className={classes.gridListMain}
              >
                {moviesData.map((movie) => (
                  <GridListTile
                    className="released-movie-grid-item"
                    key={"grid" + movie.imdbID}
                    onClick={() => this.movieClickHandler(movie.imdbID)}
                  >
                    <img
                      src={movie.Poster}
                      className="movie-poster"
                      alt={movie.Title}
                    />
                    <GridListTileBar
                      title={movie.Title}
                      subtitle={
                        <span>
                          Release Date: {new Date(movie.Year).toDateString()}
                        </span>
                      }
                    />
                  </GridListTile>
                ))}
              </GridList>
            </div>
            <div className="right">
              <Card>
                <CardContent>
                  <FormControl className={classes.formControl}>
                    <Typography className={classes.title} color="textSecondary">
                      FIND MOVIES BY:
                    </Typography>
                  </FormControl>
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="movieName">Movie Name</InputLabel>
                    <Input
                      id="movieName"
                      onChange={this.movieNameChangeHandler}
                    />
                  </FormControl>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.formControl}
                  >
                    Apply
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(Home);
