"use client"

import { useState } from "react"
import { MessageSquare, BarChart3, Zap, Send } from "lucide-react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const tabs = [
  { id: "chat", label: "Chat", icon: MessageSquare },
  { id: "analyze", label: "Analyze", icon: BarChart3 },
  { id: "optimize", label: "Optimize", icon: Zap },
]

const examplePrompts = [
  "Scale my best performing ad sets by 20%",
  "Pause all campaigns with CPA over $50",
  "Launch a new creative test",
  "Why did my ROAS drop?",
]

export function AgentDemoSection() {
  const [activeTab, setActiveTab] = useState("chat")
  const [inputValue, setInputValue] = useState("")

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background gradient overlay - matching site pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950" />
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/20 via-transparent to-zinc-800/10" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section Header - matching site pattern */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-4">Try It Now</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-6">
            <span className="text-zinc-100">Stop managing ads manually.</span>
          </h2>
          <p className="text-zinc-500 max-w-2xl mx-auto text-balance leading-relaxed">
            <span className="text-zinc-300 font-semibold">73% of ad spend</span> is wasted on underperforming campaigns.
            <br className="hidden sm:block" />
            Datrash optimizes your ads automatically while you sleep.
          </p>
        </motion.div>

        {/* Interactive Widget Card - matching site card style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="overflow-hidden border-zinc-800/50 bg-zinc-900/50 hover:border-zinc-700/50 transition-all duration-300 rounded-2xl">
            <CardContent className="p-0">
              {/* Tabs */}
              <div className="flex border-b border-zinc-800/50">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 flex items-center justify-center gap-2 py-4 px-6 text-sm font-medium transition-colors relative ${
                      activeTab === tab.id ? "text-zinc-100" : "text-zinc-500 hover:text-zinc-300"
                    }`}
                  >
                    <tab.icon className="w-4 h-4" />
                    {tab.label}
                    {activeTab === tab.id && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-zinc-500 via-zinc-300 to-zinc-500"
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Content Area */}
              <div className="p-6">
                {/* Input Field */}
                <div className="relative">
                  <textarea
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Tell the agent what to do..."
                    className="w-full h-28 px-4 py-3 text-zinc-100 placeholder-zinc-600 bg-zinc-950 border border-zinc-800 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-zinc-600/50 focus:border-zinc-700 transition"
                  />
                </div>

                {/* Example Prompts */}
                <div className="mt-4 mb-6">
                  <p className="text-xs text-zinc-600 mb-3">Try an example:</p>
                  <div className="flex flex-wrap gap-2">
                    {examplePrompts.map((prompt, i) => (
                      <motion.button
                        key={i}
                        onClick={() => setInputValue(prompt)}
                        className="text-xs px-3 py-1.5 bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 border border-zinc-800 rounded-full transition"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {prompt}
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Footer with counter and CTA */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-zinc-600">Unlimited requests on Pro plan</span>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-2 px-5 py-2.5 bg-zinc-100 hover:bg-white text-zinc-900 font-medium rounded-lg transition"
                  >
                    Run Command
                    <Send className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Social Proof Stats - matching site style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16"
        >
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <motion.div
                  key={i}
                  className="w-6 h-6 rounded bg-zinc-800 flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.05 }}
                >
                  <MessageSquare className="w-3 h-3 text-zinc-400" />
                </motion.div>
              ))}
            </div>
            <div>
              <span className="font-bold text-zinc-100">2M+</span>
              <span className="text-zinc-500 ml-1">commands executed</span>
            </div>
          </div>

          <div className="h-8 w-px bg-zinc-800 hidden sm:block" />

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center">
              <svg className="w-4 h-4 text-zinc-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>
            </div>
            <div>
              <span className="font-bold text-zinc-100">Trusted by agencies</span>
              <span className="text-zinc-500 ml-1">in 40+ countries</span>
            </div>
          </div>
        </motion.div>

        {/* Logos/Trust Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-zinc-600 mb-6">Used by performance marketers at</p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-40">
            <span className="text-xl font-bold text-zinc-500">Shopify</span>
            <span className="text-xl font-bold text-zinc-500">Stripe</span>
            <span className="text-xl font-bold text-zinc-500">Notion</span>
            <span className="text-xl font-bold text-zinc-500">Linear</span>
            <span className="text-xl font-bold text-zinc-500">Vercel</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
