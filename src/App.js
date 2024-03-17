// App.js
import React, { useState } from "react"

import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import VideoPlayPage from "./pages/VideoPlayerPage"
import Signup from "./pages/SignupPage"
import Login from "./pages/LoginPage"
import { useAuth } from "./Firebase"

function App() {
  const currentUser = useAuth()

  const [videoUrls, setVideoUrls] = useState()
  const [formData, setFormData] = useState({
    courseName: "",
    levelOfKnowledge: "",
    topicFamiliar: "",
    topicInterested: "",
    projectOrCourseBased: "",
  })

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