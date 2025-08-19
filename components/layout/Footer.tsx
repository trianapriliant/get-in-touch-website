export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center text-center space-y-4">
          <div>
            <p className="text-gray-600 text-sm">Developer & Designer</p>
            <p className="text-gray-500 text-xs italic mt-1">-- I just want to know everything</p>
          </div>
          
          <div className="flex space-x-6 text-sm text-gray-600">
            <a href="#education" className="hover:text-gray-900 transition-colors">
              Education
            </a>
            <a href="#certificates" className="hover:text-gray-900 transition-colors">
              Certificates
            </a>
            <a href="#journal" className="hover:text-gray-900 transition-colors">
              Journal
            </a>
          </div>
        </div>
        
        <hr className="my-6 border-gray-200" />
        
        <div className="text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Trian Aprilianto. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}