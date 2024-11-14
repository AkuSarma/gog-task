import {useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({ setReg }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/user/login", {
        email: formData.email,
        password: formData.password,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data.user);
        localStorage.setItem('user', res.data.user)
      });

    navigate("/dashboard");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-6 shadow-lg w-[50vw] max-w-md mx-auto border border-slate-300 bg-white rounded-2xl"
    >
      <h3 className="text-2xl font-semibold text-center text-slate-700 mb-4">
        Login
      </h3>

      <label className="text-slate-600">Email:</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        className="p-2 border border-slate-300 rounded-md focus:outline-none focus:border-blue-500"
      />

      <label className="text-slate-600">Password:</label>
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
        className="p-2 border border-slate-300 rounded-md focus:outline-none focus:border-blue-500"
      />

      <button
        type="submit"
        className="mt-4 p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Login
      </button>

      <button
        type="button"
        onClick={() => setReg(false)}
        className="mt-2 p-2 text-blue-600 hover:underline text-sm focus:outline-none"
      >
        Go to signup page
      </button>
    </form>
  );
};

export default Login