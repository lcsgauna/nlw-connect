import { BadgeCheck, Medal, MousePointerClick } from 'lucide-react'

export default function Stats() {
  return (
    <div className="grid gap-3 md:grid-cols-3">
      <div className="relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl">
        <MousePointerClick className="absolute top-3 left-3 text-purple size-5" />
        <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
          1043
        </span>
        <span className="text-sm text-gray-300 leading-none text-center">
          Acessos ao link
        </span>
      </div>
      <div className="relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl">
        <BadgeCheck className="absolute top-3 left-3 text-purple size-5" />
        <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
          1043
        </span>
        <span className="text-sm text-gray-300 leading-none text-center">
          Inscrições feitas
        </span>
      </div>
      <div className="relative bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 rounded-xl">
        <Medal className="absolute top-3 left-3 text-purple size-5" />
        <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
          3°
        </span>
        <span className="text-sm text-gray-300 leading-none text-center">
          Posição no ranking
        </span>
      </div>
    </div>
  )
}
