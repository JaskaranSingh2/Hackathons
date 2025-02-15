"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from 'js-cookie';

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = Cookies.get('isAuthenticated');
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [router]);

  const handleLogout = () => {
    Cookies.remove('isAuthenticated');
    router.push("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold">Hello World</h1>
    </div>
  );
}