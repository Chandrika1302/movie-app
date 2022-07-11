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
import { PropTypes } from 'prop-types';
import FormHelperText from '@mui/material/FormHelperText';
import './Header.css';
import Register from './Register';

const TabContainer = function(props){
    return(
        <Typography Component='div' style={{padding:0,textAlign:'center'}}>
            {props.children}
        </Typography>

    )
}
TabContainer.propTypes={
    children: PropTypes.node.isRequired

}
class Header extends Component{
    constructor(){
        super();
        this.state={
            modalIsOpen:false,
            value:0,
            userNameRequired:"dispnone",
            userName:""
        }
    }
    openModalHandler = () => {
        this.setState({modalIsOpen:true})
    }
    closeModalHandler = () => {
        this.setState({modalIsOpen:false});
        this.setState({userNameRequired:"dispnone"});
        this.setState({value:0})
    }
    tabChangeHandler = (event,value)=>{
        this.setState({value});
    }
    loginHandler = () => {
        if(this.state.userName===''){
            this.setState({userNameRequired:"dispblock"})
        }
        else this.setState({userNameRequired:"dispnone"})
    }
    inputUsernameChangeHandler = (e) => {
        this.setState({ username: e.target.value });
        this.setState({userNameRequired:"dispnone"});
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
                {this.state.value===0 &&
                <TabContainer>
                    <FormControl required>
                        <InputLabel htmlFor='username'>Username                        
                        </InputLabel>
                        <Input id='username' type='text' className={this.state.userName} onChange={this.inputUsernameChangeHandler}></Input>
                        <FormHelperText className={this.state.userNameRequired}><span className='red'>required</span></FormHelperText>
                        </FormControl><br/>

                        <FormControl required>
                            <InputLabel htmlFor='password'>Password                        
                            </InputLabel>
                            <Input id='password' type='text' className={this.state.userName} onChange={this.inputUsernameChangeHandler}></Input>
                        <FormHelperText className={this.state.userNameRequired}><span className='red'>required</span></FormHelperText>
                        </FormControl> <br/><br/>
                        <Button variant='contained' color='primary' onClick={this.loginHandler}>Login</Button>

                </TabContainer>}
                {this.state.value===1 &&
                <Register></Register>}
            </Modal>
            </div>
        )
    }
}
export default Header;