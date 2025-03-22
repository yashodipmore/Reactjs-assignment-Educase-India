"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"

interface User {
  fullName: string
  email: string
  isLoggedIn: boolean
}

export default function ProfilePage() {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in
    const userData = localStorage.getItem("user")

    if (userData) {
      setUser(JSON.parse(userData))
    } else {
      router.push("/login")
    }

    setIsLoading(false)
  }, [router])

  if (isLoading) {
    return <div className="p-6 text-center">Loading...</div>
  }

  if (!user) {
    return null // Will redirect to login
  }

  return (
    <div className="p-5">
      <h1 className="text-lg font-bold text-gray-800 mb-5">Account Settings</h1>

      <div className="flex items-center space-x-4 mb-4">
        <div className="relative">
          <Image
            src="/images/profile.jpeg"
            alt="Profile"
            width={70}
            height={70}
            className="rounded-full object-cover"
          />
          <div className="absolute bottom-0 right-0 bg-purple-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
            ✓
          </div>
        </div>

        <div>
          <h2 className="font-medium text-gray-800">{user.fullName}</h2>
          <p className="text-gray-600">{user.email}</p>
        </div>
      </div>

      <div className="border-t border-dashed border-gray-300 pt-4">
        <p className="text-xs text-gray-700">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et
          Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>
    </div>
  )
}

