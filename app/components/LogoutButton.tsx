"use client";

import { resetAuthCookies } from "../lib/actions";
import { useRouter } from "next/navigation";
import MenuList from "./navbar/MenuLink";

const LogoutButton: React.FC = () => {
  const router = useRouter();

  const submitLogout = async () => {
    resetAuthCookies();

    router.push("/");
  };

  return (
    <MenuList
    label="Log Out"
    onClick={submitLogout} />
  )
};

export default LogoutButton