import Link from "next/link"

export default function WelcomePage() {
  return (
    <div className="flex flex-col p-5 space-y-5">
      <div className="space-y-2">
        <h1 className="text-xl font-bold text-gray-800">Welcome to PopX</h1>
        <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <div className="flex flex-col space-y-3 pt-2">
        <Link
          href="/register"
          className="py-3 px-4 bg-purple-600 hover:bg-purple-700 text-white font-medium text-center rounded-md transition-colors"
        >
          Create Account
        </Link>

        <Link
          href="/login"
          className="py-3 px-4 bg-purple-200 hover:bg-purple-300 text-purple-800 font-medium text-center rounded-md transition-colors"
        >
          Already Registered? Login
        </Link>
      </div>
    </div>
  )
}

