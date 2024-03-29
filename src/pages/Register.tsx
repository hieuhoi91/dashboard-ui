import { useFormik } from "formik";
import { CircularProgress } from "react-cssfx-loading";
import { Link } from "react-router-dom";
import * as Yup from "yup";

import { useAppDispatch, useAppSelector } from "../app/hooks";
import Button from "../components/Common/Button";
import Checkbox from "../components/Common/Checkbox";
import Input from "../components/Common/Input";
import Social from "../components/Common/Social";
import { register, selectIsLoadingRegister, selectRegisterError } from "../features/auth/authSlice";
import { ReqRegister } from "../shared/types/authType";

const Register = () => {
  const isLoading = useAppSelector(selectIsLoadingRegister);
  const error = useAppSelector(selectRegisterError);
  const initialValues: ReqRegister = { username: "", email: "", password: "" };

  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: initialValues,

    onSubmit: (values) => {
      console.log(values);

      const reqRegister = {
        username: values.username,
        email: values.email,
        password: values.password,
      };

      dispatch(register(reqRegister));
    },

    validationSchema: Yup.object().shape({
      username: Yup.string().required("You must enter your username."),
      email: Yup.string().email("Invalid email address.").required("You must enter your email."),
      password: Yup.string().required("You must enter your password."),
    }),
  });

  return (
    <div className="w-full h-screen flex items-start">
      <span className="absolute flex items-center gap-2 top-4 left-8 w-10 h-10">
        <img src="assets/img/logo.svg" alt="" className="w-full h-full" />
        <p className="font-bold text-2xl text-[#636578]">Materialize</p>
      </span>
      <div className="w-[1470px] h-screen flex bg-[#f7f7f9] overflow-hidden">
        <img
          className="absolute top-[10%] left-[15%] z-10"
          src="assets/img/register.png"
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
              Adventure starts here 🚀
            </h2>
            <p className="text-light-text-secondary">Make your app management easy and fun!</p>
          </div>
          <form onSubmit={formik.handleSubmit} className="w-full flex flex-col gap-4">
            <Input
              id="username"
              name="username"
              type="text"
              placeholder="Username"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
            />
            {formik.touched.username && formik.errors.username ? (
              <div className="text-light-error text-sm">{formik.errors.username}</div>
            ) : null}

            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-light-error text-sm">{formik.errors.email}</div>
            ) : null}

            <Input
              id="password"
              name="password"
              placeholder="Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              eyeEnable={true}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-light-error text-sm">{formik.errors.password}</div>
            ) : null}

            <div className="flex w-full justify-between items-center pt-2 pb-4">
              <Checkbox content="I agree to privacy policy & terms" />
              <span>
                <a href="/" className="text-a text-xs"></a>
              </span>
            </div>

            {!isLoading ? (
              <Button
                type="submit"
                large
                className="bg-light-primary-light rounded-lg text-white hover:shadow-lg hover:bg-light-primary-main text-sm"
                title="Register"
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
          </form>
          {error && <span className="text-light-error text-sm pt-2">{error}</span>}
          <div className="relative py-4 mb-8 w-full border-b border-gray-300 border-solid">
            <p className="absolute my-4  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 bg-white flex justify-center text-gray-400">
              or
            </p>
          </div>
          <div className="w-full flex justify-center items-center gap-4 mb-4 text-xs">
            <p>Already have an account?</p>
            <Link to="/login" className="text-light-primary-main">
              Sign in instead
            </Link>
          </div>
          <Social>
            <img src="assets/svg/fb.svg" alt="" />
            <img src="assets/svg/twitter.svg" alt="" />
            <img src="assets/svg/github.svg" alt="" />
            <img src="assets/svg/google.svg" alt="" />
          </Social>
        </div>
      </div>
    </div>
  );
};

export default Register;
