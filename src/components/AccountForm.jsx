import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clickSignButton } from "../features/rentSlice";
import useAuthCalls from "../hooks/useAuthCalls";

const AccountForm = () => {
  const navigate = useNavigate();
  const { login } = useAuthCalls();
  const dispatch = useDispatch();

  const initialState = {
    email: "aa@aa.com",
    password: "Aa123456.",
  };

  const [loginInfo, setLoginInfo] = useState(initialState);

  const handleNavigate = () => {
    dispatch(clickSignButton());
    navigate("/register");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(loginInfo);
  };

  return (
    <div className="p-4">
      <div className="flex justify-center mb-4">
        <button className="py-2 w-1/2 bg-black text-white">Bireysel</button>
        <button className="py-2 w-1/2  text-white bg-secondary">
          Kurumsal
        </button>
      </div>

      <form action="" className="flex flex-col " onSubmit={handleSubmit}>
        <label htmlFor="mail" className="text-sm">
          <p className="text-xs mb-2">E-Posta*</p>
          <input
            className="border w-full p-2  focus:ring-2"
            type="email"
            id="mail"
            name="email"
            value={loginInfo.email}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="password" className="my-3 ">
          <div className="flex justify-between items-center">
            <p className="text-xs">Şifre*</p>
            <p className="text-xs hover:text-red-600 cursor-pointer">
              ŞİFREMİ UNUTTUM {" >"}
            </p>
          </div>

          <input
            className="border w-full p-2  focus:ring-2 mt-2"
            type="password"
            id="password"
            name="password"
            value={loginInfo.password}
            onChange={handleChange}
            required
          />
        </label>
        <div className="flex justify-between items-center my-4">
          <label
            htmlFor="checkbox"
            className="text-xs flex items-center gap-2 cursor-pointer"
          >
            <input
              id="checkbox"
              type="checkbox"
              className="w-6 h-6 cursor-pointer hover:ring-2 transition-all "
            />
            BENİ HATIRLA
          </label>

          <button
            className="bg-secondary text-white px-6 py-3 rounded-2xl text-xs"
            type="submit"
          >
            OTURUM AÇ
          </button>
        </div>
      </form>

      <div className="bg-gray-50 text-center py-4 ">
        <p className="text-secondary font-bold">Eur hesabınız yok mu ?</p>
        <p className="text-xs cursor-pointer mt-5" onClick={handleNavigate}>
          {" "}
          Eur'e Üye Olun{" >"}
        </p>
      </div>
    </div>
  );
};

export default AccountForm;
