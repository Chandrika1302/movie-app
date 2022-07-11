import {Component} from 'react';
import Header from '../../common/header/Header';
import './Home.css';
import { GridList, withStyles } from '@material-ui/core';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import moviesData from '../../common/MoviesData';

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper
    },
    gridListUpcomingMovies: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
        width: '100%'
    }
 });
class Home extends Component{
    render(){
        const { classes } = this.props;
        return(
            <div>
                <Header ></Header>
                <div className="upcoming-movies" >Upcoming Movies</div>
                <div>
                <GridList cols={5} className={classes.gridListUpcomingMovies} >
                    {moviesData.map(movie => (
                        <GridListTile key={movie.imdbID}>
                            <img src={movie.Poster} alt={movie.Title} className="movie-poster"/>
                            <GridListTileBar title={movie.Title}></GridListTileBar>
                               
                           
                        </GridListTile>
                    ))}
                </GridList>
                </div>
            </div>
            
        )
    }
}
export default withStyles(styles)(Home);