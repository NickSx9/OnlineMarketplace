import React, { Component } from 'react';
import './styles.css';
import company_logo from '../images/company_logo.jpg';
import RadioButton from './RadioButton';
import TextInput from './TextInput';
import Table from './Table';
import CryptoJS from 'crypto-js';
import {isMobile} from 'react-device-detect';
import {Link} from 'react-router-dom';

class Registration extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      company: false,
      customer: true,
      selectedValue: 'customer',
      title: '',
      fname: '',
      lname: '',
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
      companyName: '',
      companyEmail: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      postcode: '',
      basic: true,
      gold: false,
      plat: false,
      subscriptionType: ''
    };
  }

  handleChange = (event) => {
    switch(event.target.id)
    {
        case 'title':
          this.setState({ title: event.target.value });
        break;
        case 'fname':
          this.setState({ fname: event.target.value });
        break;
        case 'lname':
          this.setState({ lname: event.target.value });
        break;
        case 'email':
          this.setState({ email: event.target.value });
        break;
        case 'username':
          this.setState({ username: event.target.value });
        break;
        case 'password':
          this.setState({ password: event.target.value });
        break;
        case 'confirmPassword':
          this.setState({ confirmPassword: event.target.value });
        break;
        case 'companyName':
          this.setState({ companyName: event.target.value });
        break;
        case 'companyEmail':
          this.setState({ companyEmail: event.target.value });
        break;
        case 'addressLine1':
            this.setState({ addressLine1: event.target.value });
        break;
        case 'addressLine2':
            this.setState({ addressLine2: event.target.value });
        break;
        case 'city':
            this.setState({ city: event.target.value });
        break;
        case 'postcode':
            this.setState({ postcode: event.target.value });
        break;
    }
  }
  
  handleUserTypeChange = (event) => {
    switch(event.target.id){
      case 'company':
        this.setState({ company: true, customer: false, selectedValue: 'company' });
        
      break;
      case 'customer':
        this.setState({ company: false, customer: true, selectedValue: 'customer' });
      break;
      case 'basic':
        this.setState({ basic: true, gold: false, plat: false });
        this.setState({subscriptionType: 'basic'})
      break;
      case 'gold':
        this.setState({ basic: false, gold: true, plat: false });
        this.setState({subscriptionType: 'gold'})
      break;
      case 'plat':
        this.setState({ basic: false, gold: false, plat: true });
        this.setState({subscriptionType: 'plat'})
      break;
    }
  }

  setSelectedValue = (value) => {
    this.setState({ selectedValue: value });
  }

  data = [
    { id: 1, contains: 'Live Stream', containerOne: 'Yes', containerTwo: 'Yes', containerThree: 'Yes' },
    { id: 2, contains: 'Access to shop facility', containerOne: 'Yes', containerTwo: 'Yes', containerThree: 'Yes' },
    { id: 3, contains: 'Stream Ad free', containerOne: 'No', containerTwo: 'Yes', containerThree: 'Yes' },
    { id: 4, contains: 'Charges for Sale', containerOne: '8%', containerTwo: '4%', containerThree: '3%' },
    { id: 5, contains: 'Free Company Promotion', containerOne: 'No', containerTwo: 'No', containerThree: 'Yes' },
  ];

  renderCompanyFields() {
    console.log("is mobile is :"+isMobile);
    return (
      <div>
        <div className={`user-details ${isMobile ? 'box-container-mobile' : 'box-container'}`}>
          {this.sharedFields()}
        </div>
        <div className={`user-details ${isMobile ? 'box-container-mobile' : 'box-container'}`}>
          <h3>Company Details</h3>
          <form>
            <TextInput name="companyName" value={this.state.companyName} label="Company name" onChange={this.handleChange} type="Text"/>
            <TextInput name="companyEmail" value={this.state.companyEmail} label="Company email" onChange={this.handleChange} type="Text"/>           
            <TextInput name="addressLine1" value={this.state.addressLine1} label="Address" onChange={this.handleChange} type="Text"/>
            <TextInput name="addressLine2" value={this.state.addressLine2} label="        " onChange={this.handleChange} type="Text"/>
            <TextInput name="city" value={this.state.city} label="Town / City" onChange={this.handleChange} type="Text"/>
            <TextInput name="postcode" value={this.state.postcode} label="Postcode" onChange={this.handleChange} type="Text"/>
          </form>
        </div>
        <div className={`user-details ${isMobile ? 'box-container-mobile' : 'box-container'}`}>
          <h3>Subscription Type</h3>
          <Table data={this.data}/>
          <div className='sub-radio'>
          <RadioButton name="basic" value={this.state.basic} label="Basic:" onChange={this.handleUserTypeChange} checked={this.state.basic}/>
          <RadioButton name="gold" value={this.state.gold} label="Gold:" onChange={this.handleUserTypeChange} checked={this.state.gold} />
          <RadioButton name="plat" value={this.state.plat} label="Platinum:" onChange={this.handleUserTypeChange} checked={this.state.plat} /> 
          </div>
          <button className="submit-registration" onClick={this.handleSubmit}>Submit</button>
        </div>
      </div>
    );
  }

  sharedFields() {
    return (
      <div>
        <h3>User Details</h3>
        <form>
            <TextInput name="title" value={this.state.title} label="Title" onChange={this.handleChange} type="Text"/>
            <TextInput name="fname" value={this.state.fname} label="First name" onChange={this.handleChange} type="Text"/>
            <TextInput name="lname" value={this.state.lname} label="Last name" onChange={this.handleChange} type="Text"/>
            <TextInput name="email" value={this.state.email} label="Email Address" onChange={this.handleChange} type="Text"/>
            <TextInput name="username" value={this.state.username} label="Username" onChange={this.handleChange} type="Text"/>
            <TextInput name="password" value={this.state.password} label="Password" onChange={this.handleChange} type="Password"/>
            <TextInput name="confirmPassword" value={this.state.confirmPassword} label="Confirm Password" onChange={this.handleChange} type="Password"/>
        </form>

      </div>    
    )
  }

  renderCustomerFields() {
    return (
        <div className={`user-details ${isMobile ? 'box-container-mobile' : 'box-container'}`}>
              {this.sharedFields()}
              <div className='customer-submit'>
                <button className="submit-registration" onClick={this.handleSubmit}>Submit</button>
              </div>
        </div>
    );
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // Encrypt the password using AES
    let ciphertext = CryptoJS.AES.encrypt(this.state.password, '7542-TGDF-4575-TGBF').toString();
    // Hash the encrypted password using SHA256
    let hashed = CryptoJS.SHA256(ciphertext).toString(CryptoJS.enc.Base64);

      let registration = {
          firstname: this.state.title + ' ' + this.state.fname,
          lastname: this.state.lname,
          emailAddress: this.state.email,
          username: this.state.username,
          password: hashed,
          companyName: this.state.companyName,
          companyEmail: this.state.companyEmail,
          companyAddress: {
              addressLineOne: this.state.addressLine1,
              addressLineTwo: this.state.addressLine2,
              townCity: this.state.city,
              postcode: this.state.postcode
          },
          subscriptionType: this.state.subscriptionType
      }
      console.log(registration);

  fetch('/api/Authentication/Register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json',
              'Authentication':'hygt-876j-iukb-5437',
              'Registration':'iukb-5yD8'
             },
      body: JSON.stringify(registration),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        // Redirect the user to the homepage
        window.location.replace('/');
      } else {
        this.setState({ error: data.error });
      }
    })
    .catch((error) => {
      //this.setState({ error: 'An error occurred. Please try again later.' });
    });
  }

  render() {
    let content = this.state.selectedValue;
    return(
        <div className='main-container'>
          <Link to="/">
            <img className='company_logo' src={company_logo} alt="words"/>
          </Link>
        <div className={`registration-type ${isMobile ? 'box-container-mobile' : 'box-container'} user-details`}>
            <h3>Registration</h3>
            <h4>Select Account Type</h4>
            <form>
            <RadioButton name="customer" value={this.state.customer} label="Customer:" onChange={this.handleUserTypeChange} checked={this.state.customer}/>
            <RadioButton name="company" value={this.state.company} label="Company:" onChange={this.handleUserTypeChange} checked={this.state.company} />
            </form>
        </div>
        {content === "company" ? this.renderCompanyFields() : this.renderCustomerFields()}
    </div>
    )
  }
}

export default Registration;