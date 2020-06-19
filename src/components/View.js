import  React, { Component } from 'react'
import axios from 'axios';
import RecordsList from './RecordsList'
import Info from './TextInfo/info';


export default class Insert extends Component{
    constructor(props){
        super(props);
        this.state = {users:[]}
    }

    componentDidMount(){
        axios.get('http://pasarhss.me/api/val/user')
        .then(response=>{
            this.setState({users:response.data});
        })
        .catch(function(error){
            console.log(error);
        });
    }

    UserList(){
        return this.state.users.map(function(object,i){
            return <RecordsList obj={object} key={i} />;
        })
    }

    render(){
        return (
            <div>
               <h3 align="center">User List</h3>
               <Info/>
               <table className="table table-striped">
                   <thead>
                       
                           <th>Nama</th>
                           <th>Email</th>
                           <th>Username</th>
                           <th colSpan="2">Action</th>
                       
                   </thead>
                   <tbody>
                       {this.UserList()}
                   </tbody>
               </table>
            </div>
        );
    }
}
//export default Insert;