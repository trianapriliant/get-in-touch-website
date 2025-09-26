export default function ContactForm() {
  return (
    <div>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8 text-foreground">
          Contact Me
        </h2>
      </div>
      <form
        action="https://formspree.io/f/xldbdjzj"
        method="POST"
        className="max-w-md mx-auto text-left 
                   bg-background/80 dark:bg-background/80 
                   backdrop-blur-sm p-6 rounded-xl shadow-md 
                   border border-accent/30 dark:border-accent/30"
      >
        <div className="mb-5">
          <label htmlFor="name" className="block text-sm font-medium text-foreground/90 mb-1">
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
                       border-accent/30 
                       rounded-lg 
                       text-foreground 
                       placeholder-foreground/50 
                       focus:outline-none focus:ring-2 focus:ring-accent transition"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block text-sm font-medium text-foreground/90 mb-1">
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
                       border-accent/30 
                       rounded-lg 
                       text-foreground 
                       placeholder-foreground/50 
                       focus:outline-none focus:ring-2 focus:ring-accent transition"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium text-foreground/90 mb-1">
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
                       border-accent/30 
                       rounded-lg 
                       text-foreground 
                       placeholder-foreground/50 
                       focus:outline-none focus:ring-2 focus:ring-accent transition resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full 
                     bg-accent text-accent-contrast
                     font-semibold py-2 px-4 rounded-lg 
                     hover:bg-accent-strong hover:text-accent-contrast
                     transition btn btn-outline border-accent/30"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
