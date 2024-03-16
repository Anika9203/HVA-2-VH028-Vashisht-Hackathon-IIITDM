import React from "react"
import { generatePrompt } from "../utils/GeneratePrompt"
import { runChat } from "../utils/GetResultFromGemini"

const BasicDetails = ({ setVideoUrls, setLoading, formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const extractLinks = (text) => {
    const regex = /(https?:\/\/[^\s]+)/g
    const matches = text.match(regex)
    return matches || []
  }

  const handleSubmit = async (e) => {
    setLoading(true)

    e.preventDefault()

    console.log(formData)

    // Get prompt from generatePrompt Function
    const prompt = generatePrompt(formData)

    // Get the result after giving prompt to GEMINI AI
    const result = await runChat(prompt)

    // Extract video URLs from result
    const videoUrls = extractLinks(result)

    console.log(videoUrls, "videoUrls")

    setVideoUrls(videoUrls)
    setLoading(false)
  }

  return (
    <div className="">
      <form onSubmit={handleSubmit} className="rounded px-8 mb-4">
        <div className="text-center text-lg sm:text-2xl font-semibold pb-3">Enter basic details</div>

        {/* Course Name */}
        <div className="mb-1 sm:mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="courseName">
            Course Name:
          </label>
          <input
            className="shadow appearance-none border rounded w-full sm:py-2 py-1 px-2 text-sm sm:px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="courseName"
            type="text"
            name="courseName"
            value={formData.courseName}
            onChange={handleChange}
            placeholder="Enter Course Name ( For e.g., Python )"
          />
        </div>

        {/* Level of Knowledge */}
        <div className="mb-1 sm:mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="levelOfKnowledge">
            Level of Knowledge:
          </label>
          <input
            className="shadow appearance-none border rounded w-full sm:py-2 py-1 px-2 text-sm sm:px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="levelOfKnowledge"
            type="text"
            name="levelOfKnowledge"
            value={formData.levelOfKnowledge}
            onChange={handleChange}
            placeholder="Enter Level of Knowledge ( For e.g., Beginner )"
          />
        </div>

        {/* Topic Familiar */}
        <div className="mb-1 sm:mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="topicFamiliar">
            Topic Familiar:
          </label>
          <input
            className="shadow appearance-none border rounded w-full sm:py-2 py-1 px-2 text-sm sm:px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="topicFamiliar"
            type="text"
            name="topicFamiliar"
            value={formData.topicFamiliar}
            onChange={handleChange}
            placeholder="Enter Topic Familiar"
          />
        </div>

        {/* Topic Interested */}
        <div className="mb-1 sm:mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="topicInterested">
            Topic Interested:
          </label>
          <input
            className="shadow appearance-none border rounded w-full sm:py-2 py-1 px-2 text-sm sm:px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="topicInterested"
            type="text"
            name="topicInterested"
            value={formData.topicInterested}
            onChange={handleChange}
            placeholder="Enter Topic Interested"
          />
        </div>

        {/* Project or Course Based */}
        <div className="mb-1 sm:mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="projectOrCourseBased">
            Project or Course Based:
          </label>
          <input
            className="shadow appearance-none border rounded w-full sm:py-2 py-1 px-2 text-sm sm:px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="projectOrCourseBased"
            type="text"
            name="projectOrCourseBased"
            value={formData.projectOrCourseBased}
            onChange={handleChange}
            placeholder="Enter Project or Course Based"
          />
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-center pt-3">
          <button
            className="hover:bg-[#f2ddae] bg-[orange] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default BasicDetails
