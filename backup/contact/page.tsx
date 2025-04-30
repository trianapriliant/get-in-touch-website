import NavBar from '@/components/layout/NavBar'
import Footer from '@/components/layout/Footer'

export default function Contact() {
  return (
    <div>
      <NavBar />
      <main className="pt-16 min-h-screen container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Contact Me</h1>
        <p className="text-lg text-gray-300">Email: [your.email@example.com]</p>
        <p className="text-lg text-gray-300">LinkedIn: [your-linkedin]</p>
        <p className="text-lg text-gray-300">GitHub: [your-github]</p>
      </main>
      <Footer />
    </div>
  )
}