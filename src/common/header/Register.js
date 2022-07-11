import { Component } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import { PropTypes } from "prop-types";
import FormHelperText from "@mui/material/FormHelperText";
import "./Header.css";

const TabContainer = function (props) {
  return (
    <Typography Component="div" style={{ padding: 0, textAlign: "center" }}>
      {props.children}
    </Typography>
  );
};
TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
class Register extends Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      firstnameRequired: "dispnone",
      lastnameRequired: "dispnone",
      emailRequired: "dispnone",
      passwordRequired: "dispnone",
      phonenumberRequired: "dispnone",
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      phonenumber: "",
      registrationSucess: false,
    };
  }
  registerHandler = () => {
    if (this.state.firstname === "") {
      this.setState({ firstnameRequired: "dispblock" });
    } else this.setState({ firstnameRequired: "dispnone" });

    this.state.lastname === ""
      ? this.setState({ lastnameRequired: "dispblock" })
      : this.setState({ lastnameRequired: "dispnone" });

    this.state.password === ""
      ? this.setState({ passwordRequired: "dispblock" })
      : this.setState({ passwordRequired: "dispnone" });

    this.state.email === ""
      ? this.setState({ emailRequired: "dispblock" })
      : this.setState({ emailRequired: "dispnone" });

    this.state.phonenumber === ""
      ? this.setState({ phonenumberRequired: "dispblock" })
      : this.setState({ phonenumberRequired: "dispnone" });

    if (
      this.state.email === "" ||
      this.state.firstname === "" ||
      this.state.lastname === "" ||
      this.state.phonenumber === "" ||
      this.state.password === ""
    ) {
      return;
    }

    let dataSignUp = JSON.stringify({
      email_address: this.state.email,
      first_name: this.state.firstname,
      last_name: this.state.lastname,
      mobile_number: this.state.phonenumber,
      password: this.state.password,
    });

    let xhrSignup = new XMLHttpRequest();
    let that = this;
    xhrSignup.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        that.setState({
          registrationSuccess: true,
        });
      }
    });

    xhrSignup.open("POST", this.props.baseUrl + "signup");
    xhrSignup.setRequestHeader("Content-Type", "application/json");
    xhrSignup.setRequestHeader("Cache-Control", "no-cache");
    xhrSignup.send(dataSignUp);
  };

  inputFirstnameChangeHandler = (e) => {
    this.setState({ firstname: e.target.value });
  };

  inputLastnameChangeHandler = (e) => {
    this.setState({ lastname: e.target.value });
  };

  inputEmailChangeHandler = (e) => {
    this.setState({ email: e.target.value });
  };

  inputRegPasswordChangeHandler = (e) => {
    this.setState({ password: e.target.value });
  };

  inputContactChangeHandler = (e) => {
    this.setState({ phonenumber: e.target.value });
  };

  render() {
    return (
      <div>
        <TabContainer>
          <FormControl required>
            <InputLabel htmlFor="firstname">First Name</InputLabel>
            <Input
              id="firstname"
              type="text"
              className={this.state.firstname}
              onChange={this.inputFirstnameChangeHandler}
            ></Input>
            <FormHelperText className={this.state.firstnameRequired}>
              <span className="red">required</span>
            </FormHelperText>
          </FormControl>
          <br />
          <br />
          <FormControl required>
            <InputLabel htmlFor="lastname">Last Name</InputLabel>
            <Input
              id="lastname"
              type="text"
              className={this.state.lastname}
              onChange={this.inputLastnameChangeHandler}
            ></Input>
            <FormHelperText className={this.state.lastnameRequired}>
              <span className="red">required</span>
            </FormHelperText>
          </FormControl>{" "}
          <br />
          <br />
          <FormControl required>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input
              id="lastname"
              type="text"
              className={this.state.email}
              onChange={this.inputEmailChangeHandler}
            ></Input>
            <FormHelperText className={this.state.emailRequired}>
              <span className="red">required</span>
            </FormHelperText>
          </FormControl>
          <br />
          <br />

          <FormControl required>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              id="password"
              type="text"
              className={this.state.password}
              onChange={this.inputRegPasswordChangeHandler}
            ></Input>
            <FormHelperText className={this.state.passwordRequired}>
              <span className="red">required</span>
            </FormHelperText>
          </FormControl>
          <br />
          <br />

          <FormControl required>
            <InputLabel htmlFor="contact">Contact</InputLabel>
            <Input
              id="lastname"
              type="text"
              className={this.state.phonenumber}
              onChange={this.inputContactChangeHandler}
            ></Input>
            <FormHelperText className={this.state.phonenumberRequired}>
              <span className="red">required</span>
            </FormHelperText>
          </FormControl>{" "}
          <br />
          <br />
          {this.state.registrationSuccess === true && (
            <FormControl>
              <span className="successText">
                Registration Successful. Please Login!
              </span>
            </FormControl>
          )}<br></br>
          <Button
            variant="contained"
            color="primary"
            onClick={this.registerHandler}
          >
            Register
          </Button>
        </TabContainer>
      </div>
    );
  }
}
export default Register;
