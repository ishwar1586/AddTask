import React, { useState } from 'react'
import Card from './Card'

const Form = () => {
    const [data,setData]=useState({
        Name:"",
        Email:"",
        Subject:"",
        Message:"",
        });
const handleValue=(e)=>{
setData({...data,[e.target.name]:e.target.value})
}
     const [add,setAdd]=useState([]);   
     const handleSave =(e)=>{
        e.preventDefault();
if(data.Name !=" ")
       { setAdd((value)=>{
            return [...value,data]
        })}else{}
        setData({ Name:"",
        Email:"",
        Subject:"",
        Message:"",})
     }
  return (
    <div>
 <div className="container">
    <div className="row">
    <div className="col-lg-4 col-md-4 col-sm-12">
    <div className="row bg-light rounded ">
      <div className="col bg-light rounded">
        <h1 className="text-center font-weight-bold text-primary">User Details</h1>
        <hr className="bg-light"/>
        <h5 className="text-center text-success"></h5>
        <form action="" method="post" id="form-box" className="p-2">
          <div className="form-group input-group">
            <div className="input-group-prepend">
              <span className="input-group-text"><i className="fas fa-user"></i></span>
            </div>
            <input type="text" name="Name" value={data.Name} onChange={handleValue} className="form-control" placeholder="Enter your name" required/>
          </div>
          <div className="form-group input-group">
            <div className="input-group-prepend">
              <span className="input-group-text"><i className="fas fa-envelope"></i></span>
            </div>
            <input type="email" name="Email" value={data.Email} onChange={handleValue} className="form-control" placeholder="Enter your email" required/>
          </div>
          <div className="form-group input-group">
            <div className="input-group-prepend">
              <span className="input-group-text"><i className="fas fa-at"></i></span>
            </div>
            <input type="text" name="Subject" value={data.Subject} onChange={handleValue} className="form-control" placeholder="Enter subject" required/>
          </div>
          <div className="form-group input-group">
            <div className="input-group-prepend">
              <span className="input-group-text"><i className="fas fa-comment-alt"></i></span>
            </div>
            <textarea name="Message" value={data.Message} onChange={handleValue} id="msg" className="form-control" placeholder="Write your message" cols="30" rows="4" required></textarea>
          </div>
          <div className="form-group">
          <input type="submit" name="submit" id="submit" className="btn btn-primary btn-block" value="Save"/>
            <button onClick={handleSave} className="btn btn-primary btn-block">Save</button>
          </div>
        </form>
      </div>
    </div>
    </div>
    <div className="col-lg-8 col-md-8 col-sm-12">
    <Card add={add}/>
    </div>
    </div>
  </div>

    </div>
  )
}

export default Form