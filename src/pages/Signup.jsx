import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="min-h-screen bg-gray-800 flex flex-col">
      {/* Navbar will be rendered here by router */}
      
      <main className="flex-grow flex items-center justify-center px-4 py-8 sm:py-12">
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl w-full max-w-md p-6 sm:p-8 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-red-600">Sign Up</h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2.5 sm:py-3 rounded-lg transition duration-300"
            >
              Sign Up
            </button>
          </form>

          <p className="text-center text-gray-600 text-sm sm:text-base">
            Already have an account?{" "}
            <Link to="/login" className="text-red-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Signup;