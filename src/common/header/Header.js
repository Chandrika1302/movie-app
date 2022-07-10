import {Component} from 'react';
import { Button } from '@material-ui/core';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import Modal from 'react-modal';
import './Header.css'
class Header extends Component{
    constructor(){
        super();
        this.state={
            modalIsOpen:false
        }
    }
    openModalHandler = () => {
        this.setState({modalIsOpen:true})
    }
    closeModalHandler = () => {
        this.setState({modalIsOpen:false})
    }

    render(){
        return(
            <div> 
            <header className='app-header'>
            <SlideshowIcon className='header-icon'></SlideshowIcon>
            <Button variant='contained' color='default' className='login-button' onClick={this.openModalHandler}>Login</Button>
            </header>
            <Modal ariaHideApp={false} isOpen={this.state.modalIsOpen} onRequestClose={this.closeModalHandler}></Modal>
            </div>
        )
    }
}
export default Header;