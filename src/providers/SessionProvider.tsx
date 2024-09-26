"use client";
import React, { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

interface SessionProviderProps {
  children: React.ReactNode;
}

export const SessionProvider: React.FC<SessionProviderProps> = ({
  children,
}) => {
  // const { status } = useGetMeQuery('');
  const pathname = usePathname();
  const router = useRouter();

  const handleNavigation = async () => {
    switch (pathname) {
      case "/auth/sign-in":
      case "/auth/sign-up":
      case "/auth/reset-password":
      case "/auth/forgot":
        if (status === "fulfilled") {
          router.push("/");
        }
        break;
      case "/my-profile":
      case "/":
      case "/":
      case "/":
      case "/":
      case "/":
      case "/":
        if (status === "rejected") {
          router.push("/auth/sign-in");
        }
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    // handleNavigation();
  }, []);

  return <>{children}</>;
};
