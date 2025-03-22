"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function RegisterPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    companyName: "",
    isAgency: true,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target

    if (type === "radio") {
      setFormData({
        ...formData,
        isAgency: value === "yes",
      })
    } else {
      setFormData({
        ...formData,
        [name]: value,
      })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would send this data to your backend
    console.log("Form submitted:", formData)

    // Store user data in localStorage for demo purposes
    localStorage.setItem(
      "user",
      JSON.stringify({
        fullName: formData.fullName,
        email: formData.email,
        isLoggedIn: true,
      }),
    )

    // Redirect to profile page
    router.push("/profile")
  }

  return (
    <div className="p-5">
      <h1 className="text-xl font-bold text-gray-800 mb-5">
        Create your
        <br />
        PopX account
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1">
          <label className="block text-sm font-medium text-purple-600">
            Full Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            placeholder="Marry Doe"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-medium text-purple-600">
            Phone number<span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            placeholder="Marry Doe"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-medium text-purple-600">
            Email address<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Marry Doe"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-medium text-purple-600">
            Password<span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder="Marry Doe"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-medium text-purple-600">Company name</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Marry Doe"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-700">
            Are you an Agency?<span className="text-red-500">*</span>
          </p>
          <div className="flex space-x-4">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="agency"
                value="yes"
                checked={formData.isAgency}
                onChange={handleChange}
                className="w-4 h-4 text-purple-600 accent-purple-600"
              />
              <span>Yes</span>
            </label>

            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="agency"
                value="no"
                checked={!formData.isAgency}
                onChange={handleChange}
                className="w-4 h-4 text-purple-600 accent-purple-600"
              />
              <span>No</span>
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3 px-4 mt-6 bg-purple-600 hover:bg-purple-700 text-white font-medium text-center rounded-md transition-colors"
        >
          Create Account
        </button>
      </form>
    </div>
  )
}

