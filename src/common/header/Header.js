import {Component} from 'react';
import { Button } from '@material-ui/core';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Modal from 'react-modal';
import './Header.css'
class Header extends Component{
    constructor(){
        super();
        this.state={
            modalIsOpen:false,
            value:0
        }
    }
    openModalHandler = () => {
        this.setState({modalIsOpen:true})
    }
    closeModalHandler = () => {
        this.setState({modalIsOpen:false})
    }
    tabChangeHandler = (event,value)=>{
        this.setState({value});
    }

    render(){
        return(
            <div> 
            <header className='app-header'>
            <SlideshowIcon className='header-icon'></SlideshowIcon>
            <Button variant='contained' color='default' className='login-button' onClick={this.openModalHandler}>Login</Button>
            </header>
            <Modal ariaHideApp={false} isOpen={this.state.modalIsOpen} onRequestClose={this.closeModalHandler}>
                <Tabs value={this.state.value} onChange={this.tabChangeHandler}>
                    <Tab label='Login'/>
                    <Tab label='Register'/>
                </Tabs>
            </Modal>
            </div>
        )
    }
}
export default Header;