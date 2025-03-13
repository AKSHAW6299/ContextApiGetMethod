import React, { useContext } from 'react'
import { data } from 'react-router-dom'
import { GetApiContext } from '../ContextApi/Index';


function GetApiComponent() {

    const apiData = useContext(GetApiContext)
    console.log('DATA FROM CONTEXT API :', apiData);
    

  return (
    <div>GetApiComponent</div>
  )
}

export default GetApiComponent