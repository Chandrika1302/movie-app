import {Component} from 'react';
import Button from '@material-ui/core/Button';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Modal from 'react-modal';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import './Header.css'

const TabContainer = function(props){
    return(
        <Typography Component='div' style={{padding:0,textAlign:'center'}}>
            {props.children}
        </Typography>

    )
}
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
            <Modal ariaHideApp={false} isOpen={this.state.modalIsOpen} onRequestClose={this.closeModalHandler} className='login-modal'>
                <Tabs className='tabs' value={this.state.value} onChange={this.tabChangeHandler}>
                    <Tab label='Login'/>
                    <Tab label='Register'/>
                </Tabs>
                <TabContainer>
                    <FormControl required>
                        <InputLabel htmlFor='username'>Username                        
                        </InputLabel>
                        <Input id='username' type='text'></Input>
                        </FormControl><br/>

                        <FormControl>
                            <InputLabel htmlFor='password'>Password                        
                            </InputLabel>
                            <Input id='password' type='text'></Input>
                        </FormControl> <br/><br/>
                        <Button variant='contained' color='primary'>Login</Button>

                </TabContainer>
            </Modal>
            </div>
        )
    }
}
export default Header;