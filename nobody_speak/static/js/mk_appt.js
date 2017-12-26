var createclass = require('create-react-class');
var ReactDOM = require('react-dom');
var React = require('react');

class NameForm extends React.Component{
    constructor(props){
        super(props);

        // state is dictionary woops
        this.state={value: ''};

        this.handleChange = this.handleChange.bind(this);
        // oh woops i forogt to take this out
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    // updates the value, but i'm not to sure how
    // Since it's a name anything can really be input
    handleChange(event){
        // checking for alpha characters or unicode character?
        var value = event.target.value;
        const re = /^[a-zA-Z]+$/i;
        const inputValid = re.test(value);
        // if value does not conform update parent
        // with no string
        if(!(value.length<= 25 && inputValid)){
            value = "";
        }

        this.props.onUpdate(value);
        this.setState({value: value});
    }
    
    // what is going on right now
    // looks like <input></input> does not work 
    // or not cause nothing is showing now
    render() {
        return (
            <label>
                {this.props.name}
                <input type="text"
                    value={this.state.value}
                    onChange={this.handleChange}/>
            </label>
        );
    }
}

class EmailForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {email: ''};
        // binding the method to this thing
        this.handleChange = this.handleChange.bind(this);

    }

    // cool looks like this work for now
    // i just need to add the regex matching
    handleChange(event){
        var emailValue = event.target.value;
        const emailLengthLimit = 254;
        const emailWithinLimit = emailValue.length <= emailLengthLimit;
        const re = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
        // do the email matching here
        // const emailValid = event.target.value[0] === 'a' && emailLengthLimit;
        const emailValid = emailWithinLimit &&
            // for now this work, so i'll keep it
            // the other RFC compliant regexes are pretty long
            re.test(emailvalue);

        if(!emailValid){
            emailValue = "";
        }

        this.props.onUpdate({value: emailValue, pass: emailValid});
        this.setState({email: event.target.value});
    }

    // remember this needs to return stuff.
    // jeezsus
    render(){
        return (
            <label>
                Email: 
                <input type="text"
                    value={this.state.email}
                    onChange={this.handleChange}
                />
            </label>
        );
    }
}

// my form will be a component
// it has roughly 5 stages that a user must complete
// i may have to split this up into the first few stages, then add them
// all into one
// this form is just for keeping track of the whole state
// while each child verifies the input
// remembenr to verify the input after it has been reached to the
// server as well 
class AppointmentForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            emailValid: false 
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        // i'm binding the function, but first i'll check if
        // it works without this line
        // the line below binds the callback, other wise
        // it won't run properly 
        this.onFirstUpdate = this.onFirstUpdate.bind(this);
        this.onLastUpdate = this.onLastUpdate.bind(this);
        this.onEmailUpdate = this.onEmailUpdate.bind(this);
    }

    handleSubmit(event){
        alert(this.state.firstName + 
                "\n" + this.state.lastName +
                "\n" + this.state.email);
        event.preventDefault();
    }

    // i think i'm going to need a lot of handlers

    onFirstUpdate(val){
       this.setState({ firstName: val });
    }

    onLastUpdate(val){
        this.setState({ lastName: val })
    }

    onEmailUpdate(val){
        this.setState({ email: val.value, emailValid: val.pass });
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <NameForm name="First Name" onUpdate={this.onFirstUpdate}/>
                <NameForm name="Last Name" onUpdate={this.onLastUpdate}/>
                <EmailForm onUpdate={this.onEmailUpdate}/>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}

// for some reason the nameForm handleSubmit event is not being called
ReactDOM.render(
    <AppointmentForm/>,
    document.getElementById('app')
);