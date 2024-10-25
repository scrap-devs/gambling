"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const res = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });
    if (res?.error) {
      setError(res.error);
    }
    if (res?.ok) {
      return router.push("/");
    }
  };

  return (
    <section className="w-full h-screen bg-slate-800 flex items-center justify-center">
      <form
        className="p-6 w-full max-w-[500px] flex flex-col justify-between items-center gap-2 
        border border-solid border-black bg-slate-900 rounded-xl"
        onSubmit={handleSubmit}>
        {error && <div className="text-white">{error}</div>}
        <h1 className="mb-5 w-full text-2xl text-white font-bold">Sign In</h1>
        <label className="w-full text-white text-sm">Email</label>
        <input
          type="email"
          placeholder="Email"
          className="w-full h-8 border border-solid border-black rounded p-2"
          name="email" />
        <label className="w-full text-sm text-white">Password</label>
        <div className="flex w-full">
          <input
            type="password"
            placeholder="Password"
            className="w-full h-8 border border-solid border-black rounded p-2"
            name="password" />
        </div>
        <button className="w-full text-white border border-solid border-white rounded">
          Sign In
        </button>
        <Link
          href="/register"
          className="text-sm text-[#888] transition duration-150 ease hover:text-black">
          Dont have an account?
        </Link>
      </form>
    </section>
  );
};