import  React, { Component } from 'react';
import axios from 'axios';
import liat from './View';

export default class Insert extends Component{
    constructor(props){
        super(props);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            first_name: '',
            last_name : '',
            email:''
        }
    }

    onChangeFirstName(e){
        this.setState({
            first_name : e.target.value
        })
    }

    onChangeLastName(e){
        this.setState({
            last_name : e.target.value
        })
    }

    onChangeEmail(e){
        this.setState({
            email : e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();
        const obj = {
            first_name : this.state.first_name,
            last_name : this.state.last_name,
            email : this.state.email
        }

        axios.post("http://pasarhss.me/api/simpans",obj,
        {'Content-Type': 'application/x-www-form-urlencoded' }
        )
        .then(
           // res => console.log(res.data)
          
        );
        this.props.history.push('/view');
        //console.log(obj);
    }


    render(){
        return (
            <div style={{marginTop:10}}>
                <h3> Add New Record </h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>First Name : </label>
                        <input className="form-control" type="text" 
                            value={this.state.first_name}
                            onChange={this.onChangeFirstName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Last Name : </label>
                        <input className="form-control" 
                        placeholder="Isi dengan nama depan" 
                        type="text" 
                        value={this.state.last_name}
                        onChange={this.onChangeLastName}/>
                    </div>
                    <div className="form-group">
                        <label>Email : </label>
                        <input className="form-control" 
                        type="email" 
                        value={this.state.email}
                        onChange={this.onChangeEmail}
                        />
                    </div>
                    <div className="form-group">
                        <input className="btn btn-primary" value="Register User" type="submit" />
                    </div>
                </form>
            </div>
        )
    }
}
//export default Insert;