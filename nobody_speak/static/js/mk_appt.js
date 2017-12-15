var createclass = require('create-react-class')
var ReactDOM = require('react-dom')
var React = require('react')

class NameForm extends React.Component{
    constructor(props){
        super(props);

        // state is dictionary woops
        this.state={value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // updates the value, but i'm not to sure how
    // Since it's a name anything can really be input
    handleChange(event){
        this.setState({value: event.target.value});
    }
    // maybe use this to add it to some json text to submit at the end?
    handleSubmit(event){
        alert("Here's the input of the form: " + this.state.value)
        event.preventDefault();
    }
    render() {
        // omg i didn't return this woooow
        return (
            <label>
                {this.props.name}
                <input type="text"
                    value={this.state.value}
                    onChange={this.handleChange}/>
            </label>);
    }
}

// my form will be a component
// it has roughly 5 stages that a user must complete
class AppointmentForm extends React.Component{

}

// for some reason the nameForm handleSubmit event is not being called
ReactDOM.render(
    <form>
        <NameForm name="First Name"/>
        <NameForm name="Last Name"/>
        <input type="submit" value="Submit"/>
    </form>,
    document.getElementById('app')
);