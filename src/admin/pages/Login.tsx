import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { GiPadlock } from "react-icons/gi";
interface LoginProps {
  onLogin: () => void;
}

const Login = ({ onLogin }: LoginProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple validation for demo
    if (email === "admin@nimbus.com" && password === "admin123") {
      onLogin();
    } else {
      setError("Invalid credentials. Try admin@nimbus.com / admin123");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 text-white px-2">
      <div className="w-full flex-col flex items-center justify-center max-w-md border-2 bg-deep-dark shadow-lg rounded-2xl px-8 py-12 space-y-6">
        <div className="bg-mold-yellow text-white px-3 py-3 rounded-xl">
          <GiPadlock size={30} />
        </div>
        <h2 className="text-center text-2xl font-bold text-white">
          Nimbus Admin Dashboard
        </h2>
        <p className="text-center text-sm md:text-[16px] text-muted-gray">
          Sign in to manage your website
        </p>
        {error && <p className="text-red-500 text-center text-sm">{error}</p>}

        <form className="space-y-5 w-full" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-[17px] font-bold text-white"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full mt-2 p-3 border text-white border-muted-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-mold-yellow"
              placeholder="admin@nimbus.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-white"
            >
              Password
            </label>

            <div className="relative mt-2">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="w-full p-3 pr-12 border text-white border-muted-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-mold-green"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-white hover:text-muted-gray"
              >
                {showPassword ? <BsEyeSlash size={20} /> : <BsEye size={20} />}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-mold-yellow text-white py-3 rounded-lg font-semibold hover:bg-hover-mold-yellow transition-colors duration-300"
          >
            Sign In
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
