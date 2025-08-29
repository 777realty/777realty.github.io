export default function NewsletterForm() {
  return (
    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
      <input
        type="email"
        placeholder="Your Email"
        className="w-full bg-transparent border border-white px-4 py-3 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
      />
      <button
        type="submit"
        className="w-full border border-white px-8 py-3 text-xs tracking-widest hover:bg-white hover:text-black transition-colors"
      >
        SUBMIT
      </button>
    </form>
  )
}
