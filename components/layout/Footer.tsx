export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-black/10 text-gray-900 dark:text-white border-t border-gray-500 dark:border-gray-900 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">More About Me</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li><a href="#education" className="hover:text-gray-900 dark:hover:text-white transition-colors">Education</a></li>
              <li><a href="#experience" className="hover:text-gray-900 dark:hover:text-white transition-colors">Work Experience</a></li>
              <li><a href="#certificate" className="hover:text-gray-900 dark:hover:text-white transition-colors">Certificate</a></li>
              <li><a href="#projectsog" className="hover:text-gray-900 dark:hover:text-white transition-colors">Projects On Going</a></li>
            </ul>
          </div>

          {/* Get Help Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Fun Fact</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li><a href="#faq" className="hover:text-gray-900 dark:hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-gray-900 dark:hover:text-white transition-colors">Journey</a></li>
              <li><a href="#support" className="hover:text-gray-900 dark:hover:text-white transition-colors">Hobbies</a></li>
              <li><a href="#payment" className="hover:text-gray-900 dark:hover:text-white transition-colors">Dreams</a></li>
            </ul>
          </div>

          {/* Portfolio Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Find My Services</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li><a href="#projects" className="hover:text-gray-900 dark:hover:text-white transition-colors">Fiverr</a></li>
              <li><a href="#case-studies" className="hover:text-gray-900 dark:hover:text-white transition-colors">Upwork</a></li>
              <li><a href="#testimonials" className="hover:text-gray-900 dark:hover:text-white transition-colors">Behance</a></li>
              <li><a href="#gallery" className="hover:text-gray-900 dark:hover:text-white transition-colors">Dribbble</a></li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Follow Me</h3>
            <div className="flex space-x-3">
              <a href="#" className="w-8 h-8 bg-gray-200 dark:bg-accent text-gray-700 dark:text-gray-300 rounded-full flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                <span className="text-xs">f</span>
              </a>
              <a href="#" className="w-8 h-8 bg-gray-200 dark:bg-accent text-gray-700 dark:text-gray-300 rounded-full flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                <span className="text-xs">t</span>
              </a>
              <a href="#" className="w-8 h-8 bg-gray-200 dark:bg-accent text-gray-700 dark:text-gray-300 rounded-full flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                <span className="text-xs">ig</span>
              </a>
              <a href="#" className="w-8 h-8 bg-gray-200 dark:bg-accent text-gray-700 dark:text-gray-300 rounded-full flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
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