import { Link } from "react-router-dom";
import Input from "../components/Input";
import Paypal from "../paypal.jpg";

export default function Register() {
  return (
    <div className="px-6 md:border md:rounded max-w-lg md:my-10 mx-auto">
      <article className="text-center py-10">
        <img src={Paypal} className="w-8 mx-auto mb-4" alt="" />
        <h1 className="font-bold text-gray-700 text-lg mb-2">
          Set up your profile
        </h1>
        <p className="text-sm">This info needs to be accurate</p>
      </article>

      <form className="mx-auto max-w-sm">
        <Input placeholder="Email Address" />
        <Input placeholder="First name" />
        <Input placeholder="Last name" />
        <Input placeholder="Create your password" />
        <Input placeholder="Confirm your password" />

        <div className="flex justify-center pt-5 pb-20">
          <Link to="/login">
            <button className="bg-blue-600 hover:bg-blue-700 transition text-white text-center font-bold text-sm py-3 px-12 rounded-full">
              Next
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}
