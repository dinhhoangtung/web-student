import React, { useState } from "react";
import { FaKey } from "react-icons/fa";
import { ImUser } from "react-icons/im";

const Login: React.FC = () => {
  const [name, setname] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Tên người dùng", name);
    console.log("Password:", password);
    // Thực hiện các bước đăng nhập tại đây
  };

  return (
    <div className=" p-3 flex items-center   border-slate-950">
      <div className="bg-white border-slate-950 rounded-lg shadow-lg w-96">
        <div className="rounded-t-lg flex p-3 bg-gradient-to-r from-slate-300 to-slate-100">
          <h2 className="pl-3 text-xl font-bold  text-blue-500">Đăng nhập</h2>
        </div>
        <form onSubmit={handleSubmit} className="p-3 pr-8">
          <div className="mb-4 ">
            <label
              className="text-left block font-sans text-sm font-bold text-[#333] mb-2"
              htmlFor="name"
            >
              Tên người dùng *
            </label>
            <div className="relative">
              <input
                type="name"
                id="name"
                value={name}
                onChange={(e) => setname(e.target.value)}
                className=" w-full h-auto px-3 pl-5 border rounded-md focus:outline-none focus:ring focus:ring-blue-200 border-slate-500"
                required
              />
              <ImUser className="absolute pl-1 left-[1px] top-[50%]  translate-y-[-50%] cursor-pointer text-blue-500" />
            </div>
            <div className="font-sans text-sm text-[#333]">
              Dùng tài khoản chứng thực
            </div>
          </div>
          <div className="mb-6">
            <label
              className="block font-sans text-sm font-bold text-[#333] mb-2"
              htmlFor="password"
            >
              Mật khẩu *
            </label>
            <div className="relative">
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 pl-5 border rounded-md focus:outline-none focus:ring focus:ring-blue-200 border-slate-500"
                required
              />
              <FaKey className="absolute pl-1 left-[1px] top-[50%]   translate-y-[-50%] cursor-pointer text-blue-500" />
            </div>
            <div className="font-sans text-sm text-[#333]">
              Mật khẩu chứng thực{" "}
            </div>
          </div>
          <button
            type="submit"
            className=" bg-[#e6e6e6] font-sans text-sm   text-black px-6 py-1 rounded-md  transition duration-200"
          >
            Đăng nhập
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
