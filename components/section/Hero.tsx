"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

const words = ["Developer", "Modder", "Planner", "Creator"]

export default function Hero() {
  const [text, setText] = useState("")
  const [index, setIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[index % words.length]
    const typingSpeed = isDeleting ? 50 : 100

    const timeout = setTimeout(() => {
      const updatedText = isDeleting
        ? currentWord.substring(0, text.length - 1)
        : currentWord.substring(0, text.length + 1)

      setText(updatedText)

      if (!isDeleting && updatedText === currentWord) {
        setTimeout(() => setIsDeleting(true), 1500) // pause sebelum menghapus
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false)
        setIndex((prev) => (prev + 1) % words.length)
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [text, isDeleting, index])

  return (
    <div className="text-center z-10">
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 mx-4">
        Small Designer <br />+ <span className="text-lime-700 dark:!text-lime-500">{text}</span>
        <span className="animate-pulse">|</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-300 mb-8 mx-6">
        Offering custom web design and development — along with a range of small to medium creative digital projects.
      </p>
      <Link href="#about">
        <button className="btn btn-outline hover:!text-black hover:bg-lime-500">Dive in</button>
      </Link>
    </div>
  )
}
