import { BeforeAfterSlider } from "@/components/ui/before-after-slider"

export function ComparisonSection() {
  return (
    <section className="py-24 px-4 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">The Old Way vs. The Datrash Way</h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Stop wasting hours in dashboards. See the difference for yourself.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <BeforeAfterSlider
            beforeImage="/cluttered-facebook-ads-manager-dashboard-with-mult.jpg"
            afterImage="/clean-simple-chat-interface-with-ai-agent-respondi.jpg"
            beforeLabel="Traditional Dashboard"
            afterLabel="With Datrash"
            className="aspect-video shadow-2xl"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-red-400 mb-3">Traditional Way</h3>
            <ul className="space-y-2 text-zinc-400">
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">✕</span>
                <span>Hours lost navigating complex dashboards</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">✕</span>
                <span>Manual campaign adjustments and optimizations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">✕</span>
                <span>Constant monitoring and decision fatigue</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-1">✕</span>
                <span>Delayed reactions to performance changes</span>
              </li>
            </ul>
          </div>

          <div className="bg-emerald-950/30 border border-emerald-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-emerald-400 mb-3">The Datrash Way</h3>
            <ul className="space-y-2 text-zinc-300">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">✓</span>
                <span>Simple conversation in plain English</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">✓</span>
                <span>AI agent handles all optimizations automatically</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">✓</span>
                <span>Continuous monitoring and instant actions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 mt-1">✓</span>
                <span>Real-time adjustments before you even notice</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
