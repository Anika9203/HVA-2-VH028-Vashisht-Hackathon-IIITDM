import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth"
import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function Login() {
  const auth = getAuth()
  let navigate = useNavigate()
  const [message, setMessage] = useState("Enter Credentials")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const Submit = () => {
    setMessage("Loading...")
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        setEmail("")
        setPassword("")
        setMessage("Logging in")
        navigate("/")
      })
      .catch((error) => {
        const errorCode = error.code
        setMessage(errorCode.split("/")[1])
      })
  }

  const handleKeypress = (e) => {
    if (e.code === "Enter") {
      Submit()
    }
  }

  const forgotPassword = () => {
    const result = window.prompt("Enter your Email:")
    if (result) {
      sendPasswordResetEmail(auth, result)
        .then(() => {
          console.log("Mail sent")
          alert("Reset link sent to your Email")
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
          console.log(errorCode, errorMessage)
        })
    }
  }

  return (
    <div className="flex h-screen">
      <div className="w-2/3 bg-black text-white p-8">
        <div className="flex flex-col h-full justify-center text-center">
          <div className="flex items-center">
            <div className="ml-40">
              <h1 className="text-4xl font-bold">Welcome to</h1>
              <h1 className="text-6xl text-[orange]">Eduzen</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/3 bg-white flex items-center justify-center">
        <div className="w-4/5 flex justify-center flex-col items-center">
          <div className="flex flex-col items-center">
            <p className="text-2xl text-gray-600 mt-4">Login</p>
          </div>
          <div className="mt-8">
            <p className="mb-2 text-center">{message}</p>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <br />
            <input
              type="password"
              name="name"
              className="input"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              onKeyPress={handleKeypress}
            />
            <br />
            <button
              className="bg-[orange] rounded-lg mx-auto px-6 py-3 mt-4 cursor-pointer flex justify-center"
              onClick={Submit}
            >
              <span className="text-white">Login</span>
            </button>
            <p className="mt-3 text-center" onClick={forgotPassword}>
              Forgot Password?
            </p>
            <p className="text-center">
              New User? &nbsp;
              <Link to="/signup">
                <span className="text-[orange]">Sign up</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login