import {Component} from 'react';
import Header from '../../common/header/Header';
import './Home.css'
class Home extends Component{
    render(){
        return(
            <div>
                <Header ></Header>
                <div className='upcomng-mves'>Upcoming Movies</div>

            </div>
        )
    }
}
export default Home;