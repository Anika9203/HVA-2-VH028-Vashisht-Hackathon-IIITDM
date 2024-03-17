// App.js
import React, { useEffect, useState } from "react"

import { Route, Routes, useNavigate } from "react-router-dom"
import { useAuth } from "./Firebase"
import HomePage from "./pages/HomePage"
import Login from "./pages/LoginPage"
import Signup from "./pages/SignupPage"
import VideoPlayPage from "./pages/VideoPlayerPage"

function App() {
  const currentUser = useAuth()
  const navigate = useNavigate()

  const [videoUrls, setVideoUrls] = useState()
  const [formData, setFormData] = useState({
    courseName: "",
    levelOfKnowledge: "",
    topicFamiliar: "",
    topicInterested: "",
    projectOrCourseBased: "",
  })

  useEffect(() => {
    if (currentUser) navigate("/")
  }, [currentUser])

  return (
    <div>
      {currentUser ? (
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                videoUrls={videoUrls}
                setVideoUrls={setVideoUrls}
                formData={formData}
                setFormData={setFormData}
              />
            }
          />
          <Route path="/video/:id" element={<VideoPlayPage />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      )}
    </div>
  )
}

export default App