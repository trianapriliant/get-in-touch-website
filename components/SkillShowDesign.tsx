'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

const skills = [
  { name: 'Git', src: '/images/skills/git.png' },
  { name: 'CSS', src: '/images/skills/css.png' },
  { name: 'HTML', src: "/images/skills/html.png" },
  { name: 'JavaScrip', src: '/images/skills/javascript.png' },
  { name: 'NextJS', src: '/images/skills/nextjs.png' },
  { name: 'GitHub', src: '/images/skills/github.png' },
  { name: 'React', src: '/images/skills/react.png' },
  { name: 'Typescript', src: '/images/skills/typescript.png' },
  { name: 'Python', src: '/images/skills/python.png' },
]

export default function SkillShowDesign() {
  const marqueeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const marquee = marqueeRef.current
    if (!marquee) return

    let scrollAmount = 0
    const speed = 0.5

    const animate = () => {
      scrollAmount -= speed
      if (scrollAmount >= marquee.scrollWidth / 2) {
        scrollAmount = 0
      }
      if (marquee) {
        marquee.scrollLeft = scrollAmount
      }
      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  return (
    <div className="w-full overflow-hidden whitespace-nowrap bg-gray-100 dark:bg-gray-100/0 py-4">
      <div
        className="flex w-max gap-6 px- animate-marquee"
        ref={marqueeRef}
      >
        {[...skills, ...skills].map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-2 bg-zinc-900 text-white px-4 py-2 rounded-xl shadow"
          >
            <Image
              src={skill.src}
              alt={skill.name}
              width={30}
              height={30}
              className="object-contain"
            />
            <span className="text-base">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
