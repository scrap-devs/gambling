"use client";
import * as React from 'react';
import { GoogleIcon, FacebookIcon} from './CustomIcons'; // Keep these as custom icons
import Link from 'next/link'; // Using Next.js Link instead of MUI's Link for routing
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { register } from "@/actions/register";
export default function Register() {
    const [emailError, setEmailError] = React.useState(false);
    const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
    const [passwordError, setPasswordError] = React.useState(false);
    const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
    const [nameError, setNameError] = React.useState(false);
    const [nameErrorMessage, setNameErrorMessage] = React.useState('');
    const router = useRouter();
    const ref = useRef(null);
    const [error, setError] = useState();

    // Frontend validation function
    const validateForm = (formData) => {
        const name = formData.get("name");
        const email = formData.get("email");
        const password = formData.get("password");
        let errorMessages = [];

        // Basic validation checks
        if (!name || name.trim() === "") {
            errorMessages.push("Name is required.");
        }
        if (!email || !/\S+@\S+\.\S+/.test(email)) {
            errorMessages.push("Please enter a valid email address.");
        }
        if (!password || password.length < 6) {
            errorMessages.push("Password must be at least 6 characters long.");
        }

        if (errorMessages.length > 0) {
            setFormError(errorMessages);
            return false;
        }
        return true;
    };

    const handleSubmit = async (formData) => {
        const r = await register({
            email: formData.get("email"),
            password: formData.get("password"),
            name: formData.get("name")
        });
        ref.current?.reset();
        if (r?.error) {
            setError(r.error);
            return;
        } else {
            return router.push("/login");
        }
    };

    return (
        <div className="flex flex-col justify-between min-h-screen p-6 bg-gray-900">
            <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-8">
                <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">
                    Sign up
                </h1>

                <form ref={ref} action={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full name</label>
                        <input
                            autoComplete="name"
                            name="name"
                            required
                            id="name"
                            placeholder="Jon Snow"
                            className={`w-full mt-1 p-2 border ${nameError ? 'border-red-500' : 'border-gray-300'} rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        />
                        {nameError && <p className="text-xs text-red-500 mt-1">{nameErrorMessage}</p>}
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            required
                            id="email"
                            placeholder="your@email.com"
                            name="email"
                            autoComplete="email"
                            className={`w-full mt-1 p-2 border ${emailError ? 'border-red-500' : 'border-gray-300'} rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        />
                        {emailError && <p className="text-xs text-red-500 mt-1">{emailErrorMessage}</p>}
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            required
                            name="password"
                            placeholder="••••••"
                            type="password"
                            id="password"
                            autoComplete="new-password"
                            className={`w-full mt-1 p-2 border ${passwordError ? 'border-red-500' : 'border-gray-300'} rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        />
                        {passwordError && <p className="text-xs text-red-500 mt-1">{passwordErrorMessage}</p>}
                    </div>

                    <div className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            value="allowExtraEmails"
                            id="allowExtraEmails"
                            className="h-4 w-4 text-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor="allowExtraEmails" className="text-sm text-gray-700">I want to receive updates via email.</label>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Sign up
                    </button>
                </form>

                <div className="my-6">
                    <div className="flex items-center justify-between">
                        <div className="w-full border-t border-gray-300"></div>
                        <span className="text-gray-500 text-sm mx-2">or</span>
                        <div className="w-full border-t border-gray-300"></div>
                    </div>
                </div>

                <div className="space-y-4">
                    <button
                        className="w-full py-2 px-4 border border-gray-300 text-gray-900 font-semibold rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center justify-center space-x-2"
                        onClick={() => alert('Sign up with Google')}
                    >
                        <GoogleIcon />
                        <span>Sign up with Google</span>
                    </button>

                    <button
                        className="w-full py-2 px-4 border border-gray-300 text-gray-900 font-semibold rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center justify-center space-x-2"
                        onClick={() => alert('Sign up with Facebook')}
                    >
                        <FacebookIcon />
                        <span>Sign up with Facebook</span>
                    </button>
                </div>

                <div className="text-center mt-4">
                    <p className="text-sm text-gray-500">
                        Already have an account?{" "}
                        <Link href="/login" className="text-blue-600 hover:text-blue-700">
                            Sign in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}