import { useEffect, useState } from "react";
import PhoneInput from "react-phone-number-input";
import { Link } from "react-router-dom";
import { ReactComponent as EyeIcon } from "../../assets/icons/eye.svg";
import { ReactComponent as PhoneIcon } from "../../assets/icons/arrow-phone.svg";
import "react-phone-number-input/style.css";

const SignUp = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [value, setValue] = useState("+966");
  const [inputValue, setInputValue] = useState("");

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  useEffect(() => {
    const inp = document.querySelector(".PhoneInputInput");
    const handleSetValue: EventListenerOrEventListenerObject = (e) => {
      setInputValue((e.target as HTMLInputElement).value);
    };

    inp?.addEventListener("keyup", handleSetValue);

    inp?.addEventListener("keydown", handleSetValue);
    return () => {
      document.removeEventListener("keyup", handleSetValue);
      document.removeEventListener("keydown", handleSetValue);
    };
  }, []);

  return (
    <div className="flex items-center flex-col w-full max-w-[528px] gap-8">
      <form className="w-full bg-white p-8 flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <label
            htmlFor="restaurent_name"
            className="text-base font-semibold text-grey-200"
          >
            Restaurent Name
          </label>
          <input
            type="text"
            autoComplete="text"
            id="restaurent_name"
            name="restaurent_name"
            className="border-[1px] border-grey h-[56px] rounded-[40px] bg-perwinkle-purple outline-none pl-6"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label
            htmlFor="email"
            className="text-base font-semibold text-grey-200"
          >
            Your e-mail
          </label>
          <input
            type="email"
            autoComplete="email"
            id="email"
            name="email"
            className="border-[1px] border-grey h-[56px] rounded-[40px] bg-perwinkle-purple outline-none pl-6"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label
            htmlFor="password"
            className="text-base font-semibold text-grey-200"
          >
            Password
          </label>
          <div className="w-full relative">
            <input
              type={passwordShown ? "text" : "password"}
              autoComplete="current-password"
              name="password"
              id="password"
              className="border-[1px] border-grey h-[56px] w-full rounded-[40px] bg-perwinkle-purple outline-none pl-6"
            />
            <EyeIcon
              onClick={togglePassword}
              className="absolute right-5 top-5"
            />
          </div>
          <div>
            <label
              htmlFor="phone-number"
              className="text-base font-semibold text-grey-200"
            >
              Mobile number
            </label>
            <div className="w-full relative">
              <PhoneInput
                limitMaxLength
                value={value}
                international
                defaultCountry="SA"
                onChange={(phone: string) => {
                  setValue(phone);
                }}
                className={`registrPhoneInput ${
                  inputValue.split(" ").length > 1 ? "notSelect" : ""
                }`}
              />
              {inputValue.split(" ").length === 1 && (
                <div className="absolute flex gap-[10px] items-center top-5 left-[50px] z-50">
                  <span>{value || inputValue}</span>
                  <PhoneIcon />
                </div>
              )}
            </div>
            <span className="text-xs leading-4 text-grey-200">Optional</span>
          </div>
        </div>
        <button className="w-full h-[56px] bg-purple rounded-[48px] text-white text-base font-semibold">
          Register
        </button>
      </form>
      <div className="flex flex-col gap-4 justify-center">
        <span className="text-base leading-6 text-grey-200">
          Already have an account?{" "}
          <Link to="#" className="text-base leading-6 text-purple text-center">
            Sign In
          </Link>
        </span>
      </div>
    </div>
  );
};

export { SignUp };
