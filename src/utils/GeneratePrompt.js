export const generatePrompt = (data) => {
  // Template string technique
  const promptTemplate = `Goal:
  Learn about ${data.courseName}
  
  Background:
  Level of knowledge in this topic: ${data.levelOfKnowledge}
  Familiar with ${data.topicFamiliar}
  Topics to focus on: ${data.topicInterested}
  Project Based Learning or course based learning : ${data.projectOrCourseBased}
  
  Learning Resources:
  Looking for 2 Youtube videos:
  One long video (in-depth explanation): Search for a recent video (published after 2023-01-01) from a reputable channel providing an in-depth explanation of ${data.courseName}
  One shorter video (concise overview): Search for a recent video (published after 2023-01-01) from a reputable channel providing a concise overview of ${data.courseName}
  
  Selection criteria:
  High like-to-view ratio (indicator of quality)
  
  Request:
  Please provide links to 2 Youtube videos that meet the above criteria. ONLY GIVE THE LINKS. DO NOT GIVE ME ANY OTHER GENERATED TEXT!! AND GIVE ONLY WORKING LINKS `

  const prompt = promptTemplate
  return prompt
}
