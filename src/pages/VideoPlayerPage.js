import React, { useRef, useState } from "react"
import { useParams } from "react-router-dom"
import YouTube from "react-youtube"

function VideoPlayerPage() {
  const { id } = useParams()
  const [notes, setNotes] = useState("")
  const [timestampNotes, setTimestampNotes] = useState({})
  const [currentTime, setCurrentTime] = useState()

  const playerRef = useRef(null)

  console.log(timestampNotes, Object.keys(timestampNotes), "timestamp")

  const onReady = (event) => {
    // Access the player object here
    playerRef.current = event.target
    console.log("ready")
  }

  const onPause = () => {
    // Handle pause event here
    const currentTime = playerRef.current.getCurrentTime()
    setCurrentTime(currentTime)
    console.log("Paused at:", currentTime)
  }

  const onPlay = () => {
    setTimestampNotes({ ...timestampNotes, [currentTime ?? 0]: notes })
    setNotes("")
  }

  const opts = {
    width: "100%",
    height: "100%",
    playerVars: {
      autoplay: 0,
    },
  }

  // Function to format seconds into minutes:seconds format
  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600)
    const remainingMinutes = Math.floor((totalSeconds % 3600) / 60)
    const remainingSeconds = totalSeconds % 60

    if (hours > 0) {
      return `${hours}:${remainingMinutes < 10 ? "0" : ""}${remainingMinutes}:${
        remainingSeconds < 10 ? "0" : ""
      }${Math.floor(remainingSeconds)}`
    } else {
      return `${remainingMinutes}:${remainingSeconds < 10 ? "0" : ""}${Math.floor(remainingSeconds)}`
    }
  }

  return (
    <div className="pt-3 pb-10 px-10 h-[95vh]">
      <p className="text-2xl font-semibold mb-2">Your recommended video</p>
      <div className="h-full w-full flex gap-10 flex-col sm:flex-row">
        <div className="flex-[0.7] h-full w-full">
          <YouTube videoId={id} opts={opts} onReady={onReady} onPause={onPause} onPlay={onPlay} className="h-full" />
        </div>
        <div className="flex-[0.3] flex-col w-full gap-2">
          <label className="block text-gray-700 text-sm font-bold" htmlFor="courseName">
            Notes:
          </label>
          <textarea
            placeholder="Text"
            className="border border-[#D7D7D7] rounded-[10px] p-2 h-24 w-full"
            onChange={(e) => setNotes(e.target.value)}
            value={notes}
          />

          {Object.keys(timestampNotes)?.map((timestampNote) => {
            if (timestampNotes[timestampNote])
              return (
                <div className="flex gap-3">
                  <p className="font-semibold">{formatTime(timestampNote ?? 0)}</p>
                  <p>{timestampNotes[timestampNote]}</p>
                </div>
              )
          })}
        </div>
      </div>
    </div>
  )
}

export default VideoPlayerPage

// {
//   1:"asd",
//   4: "dfc",
//   7: "Srfs",
//   78: "srdfdrs"
// }
// [1,4,6]