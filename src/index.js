import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
  
);

function Welcome1(){
  return (<div class="div1">
  <div><h4 class="insideText">Employee Name: <br></br>Employee Salary: <br></br>Employee Designation: <br></br>Employee Company: </h4>
  </div>
  </div>
  );
 }

const employee=<div class="div1">
  <Welcome1 />
</div>

ReactDOM.render(
  employee,
  document.createElement('div')
);


function Welcome(props) {
  return (<div class="div1">
  <div><h4 class="insideText">Employee Name: {props.Emp_name} <br></br>Employee Salary: {props.salary}<br></br>Employee Designation: {props.Designation}<br></br>Employee Company: {props.Company}</h4>
  <input type="text" value={props.Emp_name}></input>
  
  </div>
  </div>
  );
  
}


const element =<div>
<center> 
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>

  <h1 class="h1">This is practice for React App.</h1>
      <p class="p"> welcome to react page for leaning</p>
      <button type="button" class="btn btn-danger" onclick="Welcome1()">Add Data</button>
</center>
   <Welcome Emp_name="Gaurav" salary='10000' Designation="Developer" Company="Brainworks"/>
   <Welcome Emp_name="Akshay" salary='20000' Designation="QA" Company="Wipro"/>
   <Welcome Emp_name="Satish" salary='30000' Designation="Manager" Company="Exl"/>
   <Welcome Emp_name="Shyam" salary='40000' Designation="Developer" Company="WNS"/>
   <Welcome Emp_name="Vikas" salary='40000' Designation="QA" Company="Amazon"/>
   <Welcome Emp_name="Ram" salary='40000' Designation="Manager" Company="Infosys"/>
   <Welcome Emp_name="Amar" salary='40000' Designation="HR" Company="WNS"/>
   <Welcome Emp_name="Aditya" salary='30000' Designation="HR" Company="Mphasis"/>
   
   
   </div>
ReactDOM.render(
  element,
  document.getElementById('root')
  
);

   
reportWebVitals();


