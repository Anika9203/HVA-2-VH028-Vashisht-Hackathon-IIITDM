import { getAuth, signOut } from "firebase/auth"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import img1 from "../assets/BAGR.png"
import eduZen from "../assets/Eduzen1.png"
import BasicDetails from "../components/BasicDetails"
import VideoPlayer from "../components/VideoPlayer"
import { useAuth } from "../Firebase"

function HomePage({ videoUrls, setVideoUrls, formData, setFormData }) {
  const [loading, setLoading] = useState(false)
  const auth = getAuth()
  let navigate = useNavigate()
  const currentUser = useAuth()

  // const fun1 = async () => {
  //   var data1 = []
  //   const querySnapshot = await getDocs(collection(db, "ajay"))
  //   console.log(querySnapshot)
  //   querySnapshot.forEach((doc) => {
  //     data1.push(doc.data())
  //   })
  //   console.log(data1, "data1")
  //   setVideoUrls(data1)
  // }

  // useEffect(() => {
  //   fun1()
  // }, [])

  const signout = () => {
    console.log("Signout")
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/")
        console.log(currentUser)
      })
      .catch((error) => {
        // An error happened.
        console.log(error)
      })
  }

  return (
    <div className="relative w-screen">
      <div>
        <img className="h-screen w-screen object-cover object-center" src={img1} alt="background_image" />
      </div>
      <div className="absolute left-[2%] top-[2%]">
        <img className="w-[30%] sm:w-[10%]" src={eduZen} alt="LOGO" />
      </div>
      <div className="absolute right-[2%] top-[2%] text-white cursor-pointer" onClick={signout}>
        Logout
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 transform w-full">
        <div className="mx-auto sm:mx-[10%] w-[300px] sm:w-[450px] min-w-[300px] bg-white py-4 sm:pt-4 rounded-[25px]">
          {/* <GeminiIntegration /> */}
          <BasicDetails
            setVideoUrls={setVideoUrls}
            setLoading={setLoading}
            formData={formData}
            setFormData={setFormData}
          />

          {loading ? (
            <div className="flex items-center justify-center">
              <div className="h-16 w-16 animate-spin rounded-full border-y-4 border-gray-400" />
            </div>
          ) : (
            videoUrls?.length > 0 && (
              <div className="flex-col flex items-center w-full">
                <div className="font-semibold pb-2 sm:pb-5 text-lg sm:text-2xl">Your recommended videos</div>
                <div className="flex gap-3 sm:gap-5">
                  <div className="flex flex-col gap-1">
                    <VideoPlayer text="Long Video" videoUrl={videoUrls?.[0]} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <VideoPlayer text="Short Video" videoUrl={videoUrls?.[1]} />
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  )
}

export default HomePage