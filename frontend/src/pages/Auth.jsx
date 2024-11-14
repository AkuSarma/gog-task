import React, {useState} from 'react'
import Login from '../components/Login'
import Signup from '../components/Signup'

const Auth = () => {
  const [reg, setReg] = useState(true);
  return (
    <div className="h-screen flex justify-center items-center">
      {reg ? <Login setReg={setReg} /> : <Signup setReg={setReg} />}
    </div>
  );
}

export default Auth