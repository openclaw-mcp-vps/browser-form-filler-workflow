export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium tracking-wide uppercase">
          Browser Automation
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop filling the same forms<br />
          <span className="text-[#58a6ff]">over and over again</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          FormFlow lets freelancers and consultants create smart templates that auto-fill repetitive web forms in one click — saving hours every week.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Automating — $15/mo
        </a>
        <p className="mt-3 text-xs text-[#6e7681]">Cancel anytime. No credit card required to try.</p>

        <div className="mt-14 grid grid-cols-3 gap-6 text-center">
          {[
            ["10x", "Faster form filling"],
            ["100%", "Browser-native"],
            ["∞", "Reusable templates"],
          ].map(([stat, label]) => (
            <div key={label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl font-bold text-[#58a6ff]">{stat}</div>
              <div className="text-sm text-[#8b949e] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8">
          <div className="flex items-baseline gap-1 mb-1">
            <span className="text-4xl font-bold text-white">$15</span>
            <span className="text-[#8b949e]">/month</span>
          </div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to automate form workflows</p>
          <ul className="space-y-3 mb-8">
            {[
              "Unlimited form templates",
              "Chrome extension included",
              "One-click form execution",
              "Template sharing & export",
              "Priority email support",
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block text-center bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            [
              "How does FormFlow work?",
              "You create a template in the web app by mapping form fields to saved values. The Chrome extension detects matching forms on any website and fills them instantly with one click.",
            ],
            [
              "Which browsers are supported?",
              "FormFlow currently supports Google Chrome and Chromium-based browsers (Edge, Brave). Firefox support is on the roadmap.",
            ],
            [
              "Is my data stored securely?",
              "Your template data is encrypted and stored in your account. The extension only reads data locally when you trigger a fill — nothing is sent to third parties.",
            ],
          ].map(([q, a]) => (
            <div key={q as string} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-sm text-[#8b949e] leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} FormFlow. All rights reserved.
      </footer>
    </main>
  )
}
