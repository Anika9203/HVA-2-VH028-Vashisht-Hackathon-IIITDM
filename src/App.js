// App.js
import React, { useState } from "react"

import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import VideoPlayPage from "./pages/VideoPlayerPage"

function App() {
  const [videoUrls, setVideoUrls] = useState()
  const [formData, setFormData] = useState({
    courseName: "",
    levelOfKnowledge: "",
    topicFamiliar: "",
    topicInterested: "",
    projectOrCourseBased: "",
  })

  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomePage videoUrls={videoUrls} setVideoUrls={setVideoUrls} formData={formData} setFormData={setFormData} />
        }
      />
      <Route path="/video/:id" element={<VideoPlayPage />} />
    </Routes>
  )
}

export default App
