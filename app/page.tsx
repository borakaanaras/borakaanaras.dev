export default function HomePage() {
  return (
    
    <main className=" items-center justify-center min-h-screen text-center ">
      
      <h3 className=" text-left text-3xl md:text-4xl font-bold text-gray-300 mb-4 px-2">
        Hi, I'm Bora 👋
      </h3>
      <h2 className="text-white text-6xl md:text-6xl lg:text-8xl font-bold text-left leading-tight tracking-tight mt-4 px-2 drop-shadow-lg">
  Coding digital <br />
  products with emphasis <br />
  on{" "}
  <span className="bg-gradient-to-r from-sky-400 to-emerald-600 bg-clip-text text-transparent animate-glow">
    Visual Design
  </span>
</h2>
    <div className="py-12 text-left px-2">
      <a
        href="/aboutme"
        className=" items-center rounded-3xl border border-slate-400 py-4 px-6 text-center text-md font-semibold text-gray-300  0 bg-transparent transition-all focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-0 hover:bg-gradient-to-r hover:from-sky-500 hover:via-cyan-400 hover:to-emerald-500 hover:text-white hover:opacity-60 hover:shadow-xl hover:shadow-emerald-500/40 active:opacity-70 disabled:pointer-events-none disabled:opacity-70" type="button">
      
▶︎ Discover  </a>
      </div>
    </main>
  );
}
