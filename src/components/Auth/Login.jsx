import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submithandler = (e) => {
    e.preventDefault();
       console.log("email is:",email);
       console.log("password is:",password)
       setEmail("");
       setPassword("");
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 px-10 py-20 border-emerald-500 rounded-xl md:px-10 md:py-30 sm:px-15 sm:py-30 ">
        <h1 className="text-lime-200 text-3xl text-center md:text-5xl sm:text-5xl">
          Login form
        </h1>
        <form
          className="flex flex-col items-center justify-center mt-5"
          onSubmit={(e) => {
            submithandler(e);
          }}
        >
          <input
          value={email}
          onChange={(e)=>{
           setEmail(e.target.value)
          }}
            required
            className="md:px-8 md:py-3 md:placeholder:text-gray-400 md:placeholder:text-3xl sm:px-8 sm:py-3 sm:placeholder:text-gray-300 sm:placeholder:text-3xl border-2  border-emerald-600 rounded-full px-3 py-1 text-xl text-white outline-none bg-transparent placeholder:text-gray-500"
            type="email"
            placeholder="Enter your Email"
          />
          <input
             value={password}
          onChange={(e)=>{
           setPassword(e.target.value)
          }}
            required
            className="md:px-8 md:py-3 md:placeholder:text-gray-400 md:placeholder:text-3xl border-2 sm:px-8 sm:py-3 sm:placeholder:text-gray-300 sm:placeholder:text-3xl border-emerald-600 rounded-full px-3 py-1 text-xl text-gray-400 outline-none bg-transparent placeholder:text-gray-500 mt-5"
            type="password"
            placeholder="Enter your password"
          />
          <button
            className="md:px-25 md:py-2 md:text-3xl sm:px-25 sm:py-1 sm:text-3xl border-none hover:bg-emrald-300 bg-emerald-600 rounded-xl py-1 px-25 text-xl text-white  mt-5"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
