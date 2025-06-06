export default function ContactForm() {
  return (
    <div>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8 text-gray-800 dark:text-gray-100">
          Contact Me
        </h2>
      </div>
      <form
        action="https://formspree.io/f/xldbdjzj"
        method="POST"
        className="max-w-md mx-auto text-left 
                   bg-white/40 dark:bg-white/5 
                   backdrop-blur-md p-6 rounded-xl shadow-md 
                   border border-gray-300 dark:border-white/10"
      >
        <div className="mb-5">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
            className="w-full px-4 py-2 
                       bg-transparent border 
                       border-gray-400 dark:border-gray-600 
                       rounded-lg 
                       text-gray-800 dark:text-white 
                       placeholder-gray-500 dark:placeholder-gray-400 
                       focus:outline-none focus:ring-2 
                       focus:ring-lime-500 transition"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="you@example.com"
            required
            className="w-full px-4 py-2 
                       bg-transparent border 
                       border-gray-400 dark:border-gray-600 
                       rounded-lg 
                       text-gray-800 dark:text-white 
                       placeholder-gray-500 dark:placeholder-gray-400 
                       focus:outline-none focus:ring-2 
                       focus:ring-lime-500 transition"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Tell me about your project..."
            required
            className="w-full px-4 py-2 
                       bg-transparent border 
                       border-gray-400 dark:border-gray-600 
                       rounded-lg 
                       text-gray-800 dark:text-white 
                       placeholder-gray-500 dark:placeholder-gray-400 
                       focus:outline-none focus:ring-2 
                       focus:ring-lime-500 transition resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full 
                     text-gray-800 dark:text-white 
                     font-semibold py-2 px-4 rounded-lg 
                     hover:bg-lime-500 hover:!text-black
                     transition btn btn-outline border-gray-400 dark:border-white/20"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
