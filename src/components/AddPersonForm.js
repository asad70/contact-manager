import React, { useState } from 'react';
import { connect } from 'react-redux'
import { addPerson } from '../actions'

function AddPersonForm(props) {
  const [person, setPerson] = useState('');

  function handleChange(e) {
    setPerson(e.target.value);
  }
    
  function handleSubmit(e) {
    if(person !== '') {
      props.addPerson(person);
      setPerson('');
    }
    e.preventDefault();
  }
  return (
    <form onClick={handleSubmit}>
      <div class="user-box">
      <input type="text" name="" required=""
       onChange={handleChange} 
       value={person} />
      <label>Add New Contact</label>
      </div>
    <a href="#"> 
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      ADD
    </a>
    
    </form>
  );
}

const mapDipatchToProps = {
  addPerson
  
}


export default connect(null, mapDipatchToProps)(AddPersonForm)



var closebtns = document.getElementsByClassName("remove");
var i;

for (i = 0; i < closebtns.length; i++) {
  closebtns[i].addEventListener("click", function() {
    this.parentElement.style.display = 'none';
  });
}