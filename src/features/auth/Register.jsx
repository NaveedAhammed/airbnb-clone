import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";

import styles from "./register.module.css";

import Modal from "../../components/modal/Modal";
import useRegisterModal from "../../hooks/useRegisterModal";
import { useState } from "react";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import toast from "react-hot-toast";

function Register() {
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(data) {
    try {
      setIsLoading(true);
      await axios.post("/api/register", data);
      registerModal.onClose();
    } catch (err) {
      console.log(err.message);
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }

  const body = (
    <div className={styles.body}>
      <h2 className={styles.title}>Welcome to Airbnb</h2>
      <Input
        id="email"
        label="Email"
        register={register}
        disabled={isLoading}
        errors={errors}
        required
        type="email"
      />
      <Input
        id="username"
        label="Username"
        register={register}
        disabled={isLoading}
        errors={errors}
        required
        type="text"
      />
      <Input
        id="password"
        label="Password"
        register={register}
        disabled={isLoading}
        errors={errors}
        required
        type="password"
      />
      <Button
        type="full"
        label="Continue"
        borderRadius="1rem"
        fontSize="1.6rem"
        fontWeight="500"
        onClick={handleSubmit(onSubmit)}
      />
      <hr className={styles.line} />
      <Button
        type="outline"
        Icon={FcGoogle}
        borderRadius="1rem"
        iconHeight="2rem"
        iconWidth="2rem"
        label="Continue with Google"
        fontWeight="500"
        fontSize="1.6rem"
        marginBottom="2rem"
      />
      <Button
        type="outline"
        Icon={AiFillGithub}
        borderRadius="1rem"
        iconHeight="2rem"
        iconWidth="2rem"
        label="Continue with Github"
        fontWeight="500"
        fontSize="1.6rem"
        marginBottom="2rem"
      />
      <div className={styles.footer}>
        <span>Already have an account?</span>
        <span className={styles.link}>Login</span>
      </div>
    </div>
  );

  return (
    <Modal
      isOpen={registerModal.isOpen}
      title="Register"
      onClose={registerModal.onClose}
      body={body}
    />
  );
}

export default Register;
