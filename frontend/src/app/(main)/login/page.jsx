'use client';

import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import toast from 'react-hot-toast';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

// Yup validation schema for formik
const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .required("Please Enter your password")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must contain 8 characters, one uppercase, one lowercase, one number, and one special character"
    )
});

const Login = () => {
  const router = useRouter();
  const [error, setError] = useState('');

  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: (values) => {
      console.log(`${process.env.NEXT_PUBLIC_API_URL}/user/authenticate`);

      axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user/authenticate`, values)
        .then((result) => {
          toast.success('Login Success');
          localStorage.setItem('token', result.data.token);
          // Assuming your response includes the user's role
          localStorage.setItem('role', result.data.role); // Save user role
          router.push('/');
        })
        .catch((err) => {
          setError(err.response?.data?.message || 'Login failed');
          toast.error(err.response?.data?.message || 'Login failed'); // Display the error message from the response
        });
    },
    validationSchema: LoginSchema
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E8FFF1] to-[#F8FFF8] flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-lg sm:rounded-lg sm:px-10">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 relative">
              <Image src="logo.svg" alt="BlinkFind Logo" layout="fill" objectFit="contain" />
            </div>
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-[#130F26] mb-6">
            Welcome Back
          </h2>
          <form className="space-y-6" onSubmit={loginForm.handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#130F26]">
                Email address
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={loginForm.values.email}
                  onChange={loginForm.handleChange}
                  className="focus:ring-[#51B504] focus:border-[#51B504] py-1 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  placeholder="you@example.com"
                />
                {loginForm.touched.email && loginForm.errors.email && (
                  <p className="text-xs text-red-600 mt-2">{loginForm.errors.email}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-[#130F26]">
                Password
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  value={loginForm.values.password}
                  onChange={loginForm.handleChange}
                  className="focus:ring-[#51B504] focus:border-[#51B504] py-1 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  placeholder="Password"
                />
                {loginForm.touched.password && loginForm.errors.password && (
                  <p className="text-xs text-red-600 mt-2">{loginForm.errors.password}</p>
                )}
              </div>
            </div>

            {error && <p className="text-xs text-red-600 mt-2 text-center">{error}</p>}

            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#51B504] hover:bg-[#3c8e04] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#51B504]"
            >
              Sign In
            </button>
          </form>

          <p className="mt-6 text-xs text-gray-600 text-center">
            Not registered yet?{' '}
            <Link href="/signup" className="border-b text-blue-400 border-gray-500 border-dotted">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
