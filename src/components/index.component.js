import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';
// import TableRow from './TableRow';

class Index extends Component{
    constructor(props){
        super(props);
        this.state = {business:[]};
        axios.get('http://localhost:4000/business')
        .then(response=>{
            if (response.data!==""){
                this.setState({business: response.data});
            } else{
                this.state = {business:[]};
            }
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    // componentDidMount(){
    //     axios.get('http://localhost:4000/business')
    //     .then(response=>{
    //         this.setState({business: response.data});
    //     })
    //     .catch((error)=>{
    //         console.log(error)
    //     })

    // }

    tabRow(){
        return (this.state.business.map(function(obj,i){
            return(<tr key={i}>
              <td>
                {obj.person_name}
              </td>
              <td>
                {obj.business_name}
              </td>
              <td>
                {obj.business_gst_number}
              </td>
              <td>
                <Link to={"/edit/"+obj._id} className="btn btn-primary">Edit</Link>
              </td>
              <td>
                <Link to={"/delete/"+obj._id} className="btn btn-danger">Delete</Link>
              </td>
            </tr>)
        })
        )
        // for(let i=0;i<this.state.business;i++){
        //     tableBody+=`<tr><td>{this.state.business.person_name}</td><td>{this.props.obj.business_name}</td><td>{this.props.obj.business_gst_number}</td><td><button className="btn btn-primary">Edit</button></td><td><button className="btn btn-danger">Delete</button></td></tr>`
        // }
        //return (tableBody);
    }

    render(){
        return (
            <div className="container">
                <h3 align="center">Business List</h3>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Person</th>
                            <th>Business</th>
                            <th>GST Number</th>
                            <th colSpan="2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.tabRow()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Index;