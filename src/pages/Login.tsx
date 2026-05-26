import { useNavigate } from "react-router-dom";

import { useAuthStore } from "../store/auth.store";

export default function Login() {
  const navigate = useNavigate();

  const setToken = useAuthStore((state) => state.setToken);

  const login = () => {
    setToken("fake-token");

    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow w-[400px]">
        <h1 className="text-3xl font-bold mb-6">Login</h1>

        <input placeholder="Email" className="w-full border p-3 rounded mb-4" />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded mb-6"
        />

        <button
          onClick={login}
          className="w-full bg-black text-white py-3 rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
}
