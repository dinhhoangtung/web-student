import { useState } from "react";
import { FaKey } from "react-icons/fa";
import { ImUser } from "react-icons/im";

const Login = () => {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Tên người dùng", name);
    console.log("Password:", password);
  };
  return (
    <div className="p-3 flex border-slate-950">
      <div className="bg-white border-slate-950 rounded-lg shadow-lg w-96">
        <div className="rounded-t-lg flex p-3 bg-gradient-to-r from-slate-300 to bg-slate-500">
          <h2>Đăng nhập </h2>
        </div>
        <form onSubmit={handleSubmit} className="p-3">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block font-sans text-sm font-bold text-[#333] mb-2"
            >
              Tên người dùng *
            </label>
            <div className="relative">
              <input
                type="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full py-2 px-3 border rounded-md focus:outline-none focus:ring-blue-200 border-slate-500"
                required
              />
              <div className="absolute pl-1 left-[1px] top-[50%] translate-y-[-50%] cursor-pointer text-blue-500">
                <ImUser />
              </div>
            </div>
            <div className="font-sans text-sm text-[#333]">
              Dùng tài khoản chứng thực
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block font-sans text-sm font-bold text-[#333] mb-2"
            >
              {" "}
              Mật khẩu *
            </label>
            <div className="relative">
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full py-2 px-3 border rounded-md focus:outline-none focus:ring-blue-200 border-slate-500"
                required
              />
              <div className="absolute pl-1 left-[1px] top-[50%] translate-y-[-50%] cursor-pointer text-blue-500">
                <FaKey />
              </div>
            </div>
            <div className="left-1">Mật khẩu chứng thực</div>
          </div>
        </form>
        <div className="">
          <button
            type="submit"
            className="bg-[#e6e6e6] font-sans text-sm text-black px-6 py-1 rounded-md transition duration-200"
          >
            Đăng nhập
          </button>
        </div>
      </div>
    </div>
  );
};
export default Login;
