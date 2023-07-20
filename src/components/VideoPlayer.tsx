import ReactPlayer from "react-player";
import { useAppSelector } from "../store";

export default function VideoPlayer() {
  const video = useAppSelector((state) => {
    const { currentLessonIndex, currentModuleLesson } = state.player

    const currentVideo = state.player.course.modules[currentModuleLesson].lessons[currentLessonIndex]

    return currentVideo
  })

  return (
    <div className="w-full bg-zinc-950 aspect-video">
      <ReactPlayer
        width="100%"
        height="100%"
        controls
        url={`https://www.youtube.com/watch?v=${video.id}`}
      />
    </div>
  )
}
