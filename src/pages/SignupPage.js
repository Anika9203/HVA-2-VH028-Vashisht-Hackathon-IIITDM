import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"
import { React, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function Signup() {
  const auth = getAuth()
  let navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("Enter Credentials")

  const Submit = () => {
    setMessage("Registering you...")
    createUserWithEmailAndPassword(auth, email, password).catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      setMessage(errorCode.split("/")[1])
      console.log(errorCode)
      console.log(errorMessage)
      navigate("/")
    })
  }

  const handleKeypress = (e) => {
    if (e.code === "Enter") {
      Submit()
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
            {/* <img src={Logo} alt="Logo" className="w-24 h-24" /> */}
            <p className="text-2xl text-gray-600 mt-4">Signup</p>
          </div>
          <div className="mt-8">
            <p className="text-center">{message}</p>
            <br />
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input
              type="password"
              name="name"
              className="input"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={handleKeypress}
            />
            <br />
            <button
              className="bg-[orange] rounded-lg mx-auto px-6 py-3 mt-4 cursor-pointer flex justify-center"
              onClick={Submit}
            >
              <span className="text-white">Register</span>
            </button>
            <p className="mt-4 text-center">
              Existing User?{" "}
              <Link to="/" className="text-[orange]">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup