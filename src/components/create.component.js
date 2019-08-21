import React,{Component} from 'react';
import axios from 'axios';

class Create extends Component{
    constructor(props){
        console.log(props);
        super(props);
        this.state = {
            person_name: '',
            business_name: '',
            business_gst_number:'',
            person_image:''
        }
    }

    onChangePersonName=(e)=>{
        this.setState({
            person_name:e.target.value
        })
    }

    onChangeBusinessName=(e)=>{
        this.setState({
            business_name:e.target.value
        })
    }

    onChangeGstNumber=(e)=>{
        this.setState({
            business_gst_number:e.target.value
        })
    }

    onChangeHandler=(e)=>{
        let reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = ()=>{
            this.setState({
                person_image:reader.result
            })
        }
    }

    onSubmit=(evt)=>{
        evt.preventDefault();
        const obj = {
            person_name: this.state.person_name,
            business_name: this.state.business_name,
            business_gst_number: this.state.business_gst_number,
            person_image: this.state.person_image
        };

        // let imgData = new FormData();
        // imgData.append('file',this.state.person_image);
        // imgData.append('person_name',this.state.person_name);
        // imgData.append('business_name',this.state.business_name);
        // imgData.append('business_gst_number',this.state.business_gst_number);

        // const config = {
        //     headers: {
        //         'content-type':'multipart/form-data'
        //     }
        // }

        // Updated Request for Image
        // axios.post('http://localhost:4000/business/add',imgData,config).then(res=>console.log(res.data));
        axios.post('http://localhost:4000/business/add',obj).then(res=>console.log(res.data));

        // console.log(`The values are ${this.state.person_name} ${this.state.person_name} ${this.state.business_gst_number}`)

        // To reset the values
        this.setState({
            person_name: '',
            business_name: '',
            business_gst_number: '',
            person_image: ''
        })
    }

    render(){
        return(
            <div className="container">
                <h3>Add New Business</h3>
                <form onSubmit={this.onSubmit} >
                    <div className="form-group">
                        <label>Add Person Name:  </label>
                        <input type="text" className="form-control" value={this.state.person_name} onChange={this.onChangePersonName} required/>
                    </div>
                    <div className="form-group">
                        <label>Add Business Name: </label>
                        <input type="text" className="form-control" value={this.state.business_name} onChange={this.onChangeBusinessName} required/>
                    </div>
                    <div className="form-group">
                        <label>Add GST Number: </label>
                        <input type="text" className="form-control" value={this.state.business_gst_number} onChange={this.onChangeGstNumber} required/>
                    </div>
                    <div className="form-group custom-file" style={{'marginBottom':'10px'}}>
                        <input type="file" className="custom-file-input" id="validatedCustomFile" onChange={this.onChangeHandler}accept="image/*"/>
                        <label className="custom-file-label" htmlFor="validatedCustomFile">Choose file...</label>
                        <div className="invalid-feedback">Example invalid custom file feedback</div>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Register Business" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default Create;
