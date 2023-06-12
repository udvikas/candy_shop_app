import React from 'react'
import './Form.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function Form() {
  const [ name, setName ] = useState('');
  const [ desc, setDesc ] = useState('');
  const [ price, setPrice ] = useState('');
  const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('https://64840b4bee799e3216263cb9.mockapi.io/candy', {
            e_name:name,
            e_desc:desc,
            e_price:price,
        }).then(() => {
            navigate('/show')
        }).catch((err) => {
            console.log(err)
        })
    }

  return (
    <>
    <h3>Add Items</h3>
    <Link to='/show'><button className="addData">Show Item</button></Link>
    <hr />
    <form className='form1' onSubmit={handleSubmit}>
      <div>
        <label>Candy Name</label><br />
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Description</label><br />
        <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} />
      </div>
      <div>
        <label>Price</label><br />
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
      </div>
      <div>
        <button>Add Product</button>
      </div>
    </form>
    <hr />
    </>
  )
}

export default Form
