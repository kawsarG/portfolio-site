import React ,{useState} from 'react';
import axios from 'axios';

export default function Contact() {
    const [data, setdata] = useState({
        fname:'',
        lname:'',
        email:'',
        msg:''
    })
    const handleChange=(e)=>{
        setdata({
            [e.target.name]:e.target.value
        })
        console.log(data);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.get({method: "POST", 
        url:"http://localhost:5000/send", 
        data: {
      fname: this.state.fname,
      lname: this.state.lname,
      email: this.state.email,
      message: this.state.msg}}).then(res=>{
            console.log('succes',res)
            setdata({data:{}})
        }).catch(res=>{
            console.log(res)
        })
    }
    return (
        <><h1 className='text-center' style={{margin:'40px'}} >-Contacts-</h1>
        <div className='container-flui' id='contact' style={{backgroundColor:'#D4EDDA',padding:'40px'}}>
            
            <div className="container">
            <form>
            <div class="row">
                <div class="col">
                <input type="text" class="form-control" placeholder="First name" value={data.fname} name='fname'  onChange={handleChange}/>
                </div>
                <div class="col">
                <input type="text" class="form-control" placeholder="Last name"
                value={data.lname} name='lname'  onChange={handleChange}/>
                </div>
                
            </div>
            <div className="row">
            <div class="col-12">
            <input type="text" class="form-control" placeholder="Email Address" value={data.email} name='email'  onChange={handleChange}/>
                </div>
            </div>
            <div className="row">
            <div class="col-12">
                    <textarea name="text" id="msg" cols="155" rows="10" placeholder='Write your messge here' value={data.msg} name='msg' onChange={handleChange}></textarea>
                </div>
            </div>
            <div className="row">
                <div className='text-center' style={{margin:'0 auto'}}>
                        <button className='btn btn-primary' onClick={handleSubmit}>Send Message</button>
                </div>
            </div>
            </form>
                        </div>  
        </div>
        <div className='container-fluid' style={{backgroundColor:'#FFE54C',paddingTop:'20px',marginBottom:'0'}}>
        <p className='text-center'>Made with <i className='fa fa-heart text-danger'></i> By Kawsar Ahmed</p>
        <p className='text-center'>&copy; 2020 All Rights Reserved</p>
        </div>
        </>
    )
}
