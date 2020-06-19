import  React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router';

class RecordsList extends Component{
    constructor(props){
        super(props);
        this.delete = this.delete.bind(this);
        this.state = {
            redirect: false
        }
    }
    
    delete(){
        axios.delete("http://127.0.0.1:8000/api/hapus/user/"+this.props.obj.id,
        {'Content-Type': 'application/x-www-form-urlencoded' }
        )
        .then(
            this.setState({redirect:true})
        );
    }

    render(){
        const {redirect} = this.state;

        if(redirect){
            return <Redirect to='/view/'/>;
        }

        return(
            <tr>
                <td>
                    {this.props.obj.name}
                </td>
                <td>
                    {this.props.obj.email}
                </td>
                <td>
                    {this.props.obj.username}
                </td>
                <td>
                    <button className="btn btn-primary">Edit</button>
                    <button onClick={this.delete} className="btn btn-danger">Hapus</button>
                </td>
            </tr>
        )
    }
}

export default RecordsList