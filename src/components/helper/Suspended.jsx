import { Link } from "react-router-dom";
import { MdOutlineBlock } from "react-icons/md";
import React from 'react'

export default function Suspended() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <div className="text-center">
        <div className="flex items-center justify-center text-red-500 mb-4">
          <MdOutlineBlock className="text-8xl" />
        </div>
        <h1 className="text-6xl font-bold mb-4">401</h1>
        <h2 className="text-2xl mb-6">Suspended Account</h2>
        <p className="text-lg mb-8">
          Your account has been suspended, please contact your administrator.
        </p>
              {/* input email and why they think this was an error send that to outr error queue. but can just log to console.  */}
              {/*  */}

        <Link
          to="/"
          className="px-6 py-3 bg-rose-600 text-white rounded-lg text-lg font-semibold hover:bg-rose-700 transition"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
