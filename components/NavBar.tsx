import Link from 'next/link';
import MusicPlayer from './MusicPlayer';

export default function NavBar() {
  return (
    <div className="navbar bg-transparent fixed top-0 w-full z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden hover:bg-neutral-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-md dropdown-content bg-neutral-100 dark:bg-neutral-900 rounded-xl z-[1] mt-3 w-90 p-4 shadow-lg transform transition-all duration-300"
          >
            <li><Link href="#home" className="text-lg hover:bg-neutral-300 dark:hover:bg-neutral-800 rounded-md">Home</Link></li>
            <li><Link href="#projects" className="text-lg hover:bg-neutral-300 dark:hover:bg-neutral-800 rounded-md">Projects</Link></li>
            <li><Link href="#skill" className="text-lg hover:bg-neutral-300 dark:hover:bg-neutral-800 rounded-md">Skill</Link></li>
            <li><Link href="#contact" className="text-lg hover:bg-neutral-300 dark:hover:bg-neutral-800 rounded-md">Contact</Link></li>
          </ul>
        </div>
        <Link href="#home" className="btn btn-ghost text-xl hover:bg-neutral-800 hover:!text-white">Trian Aprilianto</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link href="#home" className="text-lg">Home</Link></li>
          <li><Link href="#projects" className="text-lg">Projects</Link></li>
          <li><Link href="#skill" className="text-lg">Skill</Link></li>
          <li><Link href="#contact" className="text-lg">Contact</Link></li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="mr-2">
          <MusicPlayer />
        </div>
        <Link href="#contact" className="btn btn-outline hover:!text-white">
          Let&apos;s Talk
        </Link>
      </div>
    </div>
  );
}