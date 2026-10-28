import React, { Component } from 'react';
import '../EmployeeForm.css'; // Link the stylesheet

// Define the EmployeeForm class 
class EmployeeForm extends Component {
    	constructor(props) {
        	super(props);
        	this.state = {name: '', email: '', title: '', department: ''};
     }
 // Method to handle input changes
handleChange = (e) => {
const { name, value } = e.target; 
this.setState({
[name]: value
});
};
// Method to handle form submissions
handleSubmit = (e) => {
e.preventDefault(); // Prevent page refresh
console.log('Submitted Employee Data:', this.state); // Log state to console

// Clear input fields by resetting state
this.setState({ name: '', email: '', title: '', department: ''});
};

// Render method that displays the input and submit buttons
render() {
return (
<div className="form-container">
<h2>Add New Employee</h2>
<form onSubmit={this.handleSubmit}>
<div className="form-group">
<label htmlFor="name">Employee Name:</label>
<input
type="text"
id="name"
name="name"
value={this.state.name}
onChange={this.handleChange}
required
/>
</div>

<div className="form-group">
<label htmlFor="email">Email Address:</label>
<input
type="email"
id="email"
name="email"
value={this.state.email}
onChange={this.handleChange}
required
/>
</div>

<div className="form-group">
<label htmlFor= "title">Job Title:</label>
<input
type="text"
id="title"
name="title"
value={this.state.title}
onChange={this.handleChange}
required
/>
</div>

<div className="form-group">
<label htmlFor="department">Department:</label>
<input
type="text"
id="department"
name="department"
value={this.state.department}
onChange={this.handleChange}
required
/>
</div>

<button type="submit" className="submit-btn">
Add Employee 
</button>
</form>
</div>
);
}
}

// Export component
export default EmployeeForm;
