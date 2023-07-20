import { useAppSelector } from "../store"

export default function Header() {
  const { currentModule, currentLesson } = useAppSelector(state => {
    const { currentModuleLesson, currentLessonIndex } = state.player

    const currentModule = state.player.course.modules[currentModuleLesson]
    const currentLesson = currentModule.lessons[currentLessonIndex]

    return { currentModule, currentLesson }
  })

  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl font-bold">{currentLesson.title}</h1>
      <span className="text-sm text-zinc-400">Módulo "{currentModule.title}"</span>
    </div>
  )
}
