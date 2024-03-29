import React from 'react';
import './Contact.css';

import OverTextarea from './OverTextarea';
import emailRegex from './emailRegex';



class Contact extends React.Component {

	state = {
		name:'',
		message:'',
		email:'',
		isEmailValid: false,
		isMessageTooLong:false ,
	}

	setName= (event )=>{
		this.setState({
			name: event.target.value
		})
	}

	setEmail= (event )=>{
		this.setState({
			email: event.target.value,
			isEmailValid: emailRegex.test(event.target.value),
		})
	}

	setMessage= (value, isTooLong )=>{
		this.setState({
			message: value,
			isMessageTooLong: isTooLong,
		})
	}

	submit = () => {
		console.log(this.state.name, this.state.email, this.state.message);
		fetch('/comment' , {
			method: 'POST',
			headers:{ 'Content-Type': 'application/json'},
			body: JSON.stringify({
				name: this.state.name,
				email:this.state.email,
				content: this.state.message,
			}),
		}).then(response => response.json())
		  .then( message => console.log(message))
		  .catch(err => console.error(err));
	}





	render() {

		const { name,email,message }= this.state;
		//const name = this.state.name;
		// const email= this.state.email;
		// const message = this.state.message;

		return(
			<div className='Contact Page'>
			  <div className='form-container'>
			    <h3> Contact Us </h3>
			    <input value={name} 
			    	   placeholder = 'Full name'
			    	   onChange={this.setName} />

			    <input value={email} 
			    	   placeholder='Email Adress'
			    	   onChange={this.setEmail} />

			    <OverTextarea className='OverTextarea'
			    			  value={message}
			    			  maxLength={500}
			    			  errorColor='#dd2200'
			    			  validColor='darkgreen'
			    			  onChange={this.setMessage} />

			    <button onClick={this.submit} 
			    		disabled={this.state.isMessageTooLong || !this.state.isEmailValid} >
			    Submit
			    </button>

			  </div>
			 </div>



			);
		}
	}

export default Contact;