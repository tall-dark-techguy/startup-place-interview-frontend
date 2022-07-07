import { Link } from "react-router-dom";
import Input from "../components/Input";
import Paypal from "../paypal.jpg";
import Nigeria from "../nigeria.png";

export default function Login() {
  return (
    <div className="px-6 md:border md:rounded max-w-lg md:my-10 mx-auto">
      <article className="text-center py-10">
        <img src={Paypal} className="w-8 mx-auto mb-4" alt="" />
      </article>

      <form className="mx-auto max-w-sm">
        <Input placeholder="Email or mobile number" />
        <Input placeholder="Enter your password" />

        <Link to="" className="text-blue-500 font-bold text-sm">
          Forgot password?
        </Link>

        <div className="pt-5 pb-12">
          <button className="bg-blue-600 w-full hover:bg-blue-700 transition text-white text-center font-bold text-sm py-3 px-12 rounded-full">
            Login
          </button>

          <p className="py-3 flex items-center">
            <span className="flex-1 border border-gray-300"></span>
            <span className="flex-2 px-4 text-center">or</span>
            <span className="flex-1 border border-gray-300"></span>
          </p>

          <Link to="/">
            <button className="bg-white w-full text-blue-600 border border-blue-600 border-2 hover:bg-gray-100 transition text-white text-center font-bold text-sm py-3 px-12 rounded-full">
              Sign Up
            </button>
          </Link>
        </div>
      </form>

      <div className="text-center mb-10">
        <img src={Nigeria} className="w-5 inline" alt="" />
      </div>
    </div>
  );
}
