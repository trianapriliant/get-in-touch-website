import Link from "next/link"

export default function Hero() {
    return (
        <div className="text-center z-10">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 mr-4 ml-4">
          Small Designer & Developer
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 mr-6 ml-6">
          Offering custom web design and development — along with a range of small to medium creative digital projects.
        </p>
        <Link href="#about">
          <button className="btn btn-outline hover:!text-white">Dive in</button>
        </Link>
      </div>
    )
}