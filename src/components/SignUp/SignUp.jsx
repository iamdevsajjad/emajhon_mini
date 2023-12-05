import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <form
      action=""
      className="border-2 border-black w-[500px] rounded-md bgwhite mx-auto my-auto mt-4"
    >
      <h3 className="text-3xl text-center my-5">Sign Up</h3>
      <div className="inputs space-y-3 px-10">
        <div className="email">
          <p>Email</p>
          <input
            className="w-[415px] h-[55px] outline-none rounded-md border-2 border-[#95A0A7]"
            type="email"
            name="email"
            id=""
          />
        </div>
        <div className="password">
          <p>Password</p>
          <input
            className="w-[415px] h-[55px] outline-none rounded-md border-2 border-[#95A0A7]"
            type="password"
            name="password"
            id=""
          />
        </div>
        <div className="confirmPassword">
          <p>ConfirmPassword</p>
          <input
            className="w-[415px] h-[55px] outline-none rounded-md border-2 border-[#95A0A7]"
            type="password"
            name="confirmPassword"
            id=""
          />
        </div>
      </div>
      <div className="buttons flex flex-col items-center">
        <button className="bg-[#FF9900] text-xl font-bold my-7 h-[55px] w-[415px] rounded-md ">
          Sign Up
        </button>
        <p className="">
          Already have an account?{" "}
          <Link className="text-[#F90]  font-bold" to={"/login"}>
            Login
          </Link>{" "}
        </p>

        <p>or</p>

        <button className="bg-[#fff] font-bold text-xl my-4 h-[55px] w-[415px] border rounded-md">
          Continue With Google
        </button>
      </div>
    </form>
  );
};

export default SignUp;
