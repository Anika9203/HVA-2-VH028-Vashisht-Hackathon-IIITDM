import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const VideoPlayer = ({ videoUrl, text }) => {
  const navigate = useNavigate()
  const [videoId, setVideoId] = useState("")

  useEffect(() => {
    setVideoId(getYouTubeIdFromURL(videoUrl))
  }, [videoUrl])

  const getYouTubeIdFromURL = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
    const match = url?.match(regExp)

    if (match && match[2].length === 11) {
      return match[2]
    } else {
      console.error("Invalid YouTube URL")
      return null
    }
  }

  return (
    <p>
      <span onClick={() => navigate(`/video/${videoId}`)} className="font-medium cursor-pointer text-blue-500">
        <div className="rounded-full px-3 w-30 sm:w-40 py-2 sm:py-4 bg-[orange] text-white text-center ">{text}</div>
      </span>
    </p>
  )
}

export default VideoPlayer
