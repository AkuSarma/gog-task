import React from 'react';

const Signup = ({setReg}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-6 shadow-lg w-[50vw] max-w-md mx-auto border border-slate-300 bg-white rounded-2xl"
    >
      <h3 className="text-2xl font-semibold text-center text-slate-700 mb-4">
        Register
      </h3>

      <label className="text-slate-600">Name:</label>
      <input
        type="text"
        name="name"
        required
        className="p-2 border border-slate-300 rounded-md focus:outline-none focus:border-blue-500"
      />

      <label className="text-slate-600">Email:</label>
      <input
        type="email"
        name="email"
        required
        className="p-2 border border-slate-300 rounded-md focus:outline-none focus:border-blue-500"
      />

      <label className="text-slate-600">Mobile:</label>
      <input
        type="number"
        name="mobile"
        required
        className="p-2 border border-slate-300 rounded-md focus:outline-none focus:border-blue-500"
      />

      <label className="text-slate-600">Password:</label>
      <input
        type="password"
        name="password"
        required
        className="p-2 border border-slate-300 rounded-md focus:outline-none focus:border-blue-500"
      />

      <button
        type="submit"
        className="mt-4 p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Register
      </button>

      <button
        type="button"
        onClick={() => setReg(true)}
        className="mt-2 p-2 text-blue-600 hover:underline text-sm focus:outline-none"
      >
        Go to login page
      </button>
    </form>
  );
}

export default Signup