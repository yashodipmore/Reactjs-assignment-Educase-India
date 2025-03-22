"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // In a real app, you would validate credentials with your backend
    setTimeout(() => {
      // Store user data in localStorage for demo purposes
      localStorage.setItem(
        "user",
        JSON.stringify({
          fullName: "Marry Doe",
          email: formData.email,
          isLoggedIn: true,
        }),
      )

      setIsSubmitting(false)
      router.push("/profile")
    }, 1000)
  }

  return (
    <div className="p-5">
      <div className="space-y-2 mb-5">
        <h1 className="text-xl font-bold text-gray-800">
          Signin to your
          <br />
          PopX account
        </h1>
        <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1">
          <label className="block text-sm font-medium text-purple-600">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter email address"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-medium text-purple-600">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder="Enter password"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 px-4 mt-4 font-medium text-center rounded-md transition-colors ${
            isSubmitting ? "bg-gray-300 text-gray-500" : "bg-gray-300 hover:bg-gray-400 text-gray-700"
          }`}
        >
          {isSubmitting ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  )
}

