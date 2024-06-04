"use client";

import useSignupModal from "@/app/hooks/useSignupModal";
import CustomButton from "../forms/CustomButton";
import Modal from "./Modal";

const SignupModal = () => {
  const signupModal = useSignupModal();
  const content = (
    <>
      <h2 className="mb-6 text-2xl"> Welcome to Djangobnb, please Sign Up</h2>
      <form className="space-y-4">
        <input
          placeholder="Your Email Adress"
          type="email"
          className="w-full h-[54px] px-4 border border-gray-100 rounded-xl"
        />
        <input
          placeholder="Your password"
          type="password"
          className="w-full h-[54px] px-4 border border-gray-100 rounded-xl"
        />
        <input
          placeholder="Repeat password"
          type="password"
          className="w-full h-[54px] px-4 border border-gray-100 rounded-xl"
        />
        <div className=" p-5 bg-airbnb text-white rounded-xl opacity-80">
            Error Message
        </div>
          <CustomButton label="submit" onClick={() => console.log("Test")} />
      </form>
    </>
  );

  return (
    <Modal
      isOpen={signupModal.isOpen}
      close={signupModal.close}
      label="Sign up"
      content={content}
    />
  );
};

export default SignupModal;
