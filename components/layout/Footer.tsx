import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="footer" className="bg-gray-50 dark:bg-black/10 text-gray-900 dark:text-white border-gray-500 dark:border-gray-900 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12 pl-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">More About Me</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li><Link href="/education" className="hover:text-gray-900 dark:hover:text-white transition-colors">Education</Link></li>
              <li><Link href="/experience" className="hover:text-gray-900 dark:hover:text-white transition-colors">Work Experience</Link></li>
              <li><Link href="/certificate" className="hover:text-gray-900 dark:hover:text-white transition-colors">Certificate</Link></li>
              <li><Link href="/projects-ongoing" className="hover:text-gray-900 dark:hover:text-white transition-colors">Projects On Going</Link></li>
            </ul>
          </div>

          {/* Get Help Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Fun Fact</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li><Link href="/faq" className="hover:text-gray-900 dark:hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/journey" className="hover:text-gray-900 dark:hover:text-white transition-colors">Journey</Link></li>
              <li><Link href="/hobbies" className="hover:text-gray-900 dark:hover:text-white transition-colors">Hobbies</Link></li>
              <li><Link href="/dreams" className="hover:text-gray-900 dark:hover:text-white transition-colors">Dreams</Link></li>
            </ul>
          </div>

          {/* Portfolio Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Find My Services</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li><a href="https://www.fiverr.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-white transition-colors">Fiverr</a></li>
              <li><a href="https://www.upwork.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-white transition-colors">Upwork</a></li>
              <li><a href="https://www.behance.net" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-white transition-colors">Behance</a></li>
              <li><a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-white transition-colors">Dribbble</a></li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Follow Me</h3>
            <div className="flex space-x-3">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-200 dark:bg-accent text-gray-700 dark:text-gray-300 rounded-full flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                <span className="text-xs">f</span>
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-200 dark:bg-accent text-gray-700 dark:text-gray-300 rounded-full flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                <span className="text-xs">t</span>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-200 dark:bg-accent text-gray-700 dark:text-gray-300 rounded-full flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                <span className="text-xs">ig</span>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-200 dark:bg-accent text-gray-700 dark:text-gray-300 rounded-full flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                <span className="text-xs">in</span>
              </a>
            </div>
            <div className="mt-4">
              <p className="text-gray-500 dark:text-gray-400 text-xs italic">Designer and Developer</p>
              <p className="text-gray-400 dark:text-gray-500 text-xs italic">-- I just want to know everything</p>
            </div>
          </div>
        </div>
        
        <hr className="my-8 border-gray-200 dark:border-gray-900" />
        
        <div className="text-center text-sm text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Trian Aprilianto. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}