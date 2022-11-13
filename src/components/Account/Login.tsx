import { useState } from "react";
import { CircularProgress } from "react-cssfx-loading";
import { Link, useNavigate } from "react-router-dom";

import { CmsApi } from "../../api/cms-api";
import { Platform } from "../../shared/enum/platform";
import Button from "../Common/Button";
import Checkbox from "../Common/Checkbox";
import Input from "../Common/Input";
import Social from "../Common/Social";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    setIsLoading(true);

    try {
      const res = await CmsApi.login({ email, password, requestFrom: Platform.CMS });

      navigate("/", { replace: true });
    } catch (error: any) {
      console.log(error);

      setErrorMessage(error.response.data.message);
    }
    setIsLoading(false);
  };

  return (
    <div className="w-full h-screen flex items-start">
      <span className="absolute flex items-center gap-2 top-4 left-8 w-10 h-10">
        <img src="assets/img/logo.svg" alt="" className="w-full h-full" />
        <p className="font-bold text-2xl text-[#636578]">Materialize</p>
      </span>
      <div className="w-[1470px] h-screen flex bg-[#f7f7f9] overflow-hidden">
        <img
          className="scale-90 absolute top-[5%] left-[15%] z-10"
          src="assets/img/login.png"
          alt="Đồi núi"
        />
        <img
          className="w-full h-[18rem] absolute top-[60%] "
          src="assets/img/bg-login.png"
          alt=""
        />
      </div>
      <div className="absolute right-0 w-[450px] h-full flex flex-col justify-center  pt-12 px-7 pb-9 flex-none order-1 grow-0 bg-white z-20 ">
        <div className="flex flex-col items-start">
          <div className="flex flex-col items-start pb-6">
            <h2 className="text-2xl font-semibold text-light-text-primary">
              Welcome to Materialize!👋🏻
            </h2>

            <p className="text-light-text-secondary">
              Please sign-in to your account and start the adventure
            </p>
          </div>
          <Input
            type="text"
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Input
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            eyeEnable={true}
          ></Input>
          <div className="flex w-full justify-between items-center pb-4">
            <Checkbox content="Remember me" />
            <span>
              <a href="/" className="text-a text-xs">
                Forgot Password?
              </a>
            </span>
          </div>

          {!isLoading ? (
            <Button
              large
              className="bg-light-primary-light rounded-lg text-white hover:shadow-lg hover:bg-light-primary-main text-sm"
              title="LOGIN"
              onClick={handleLogin}
            />
          ) : (
            <span className=" w-full gap-2 flex justify-center items-center">
              <CircularProgress
                className="text-light-primary-main"
                width="30px"
                height="30px"
                duration="3s"
              />
            </span>
          )}
          {errorMessage && <span className="text-light-error text-sm pt-2">{errorMessage}</span>}
          <div className="relative py-4 mb-8 w-full border-b border-gray-300 border-solid">
            <p className="absolute my-4  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 bg-white flex justify-center text-gray-400">
              or
            </p>
          </div>
          <Social>
            <img src="assets/svg/fb.svg" alt="" />
            <img src="assets/svg/twitter.svg" alt="" />
            <img src="assets/svg/github.svg" alt="" />
            <img src="assets/svg/google.svg" alt="" />
          </Social>
          <div className="w-full flex justify-center items-center gap-4 my-4 text-xs">
            <p>New on our platform?</p>
            <Link to="/register" className="text-light-primary-main">
              Create an account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
