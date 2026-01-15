"use client"

import { motion } from "framer-motion"
import { Brain, TrendingUp, Zap, AlertTriangle, Target, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function FeaturesSection() {
  return (
    <section id="features" className="px-6 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <p className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-4">Features</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-zinc-100 mb-4">
            What the agent can do for you
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-balance">
            From analysis to optimization, your AI agent handles everything in plain English
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          {/* Card 1 - Real-time Analysis (3 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-3"
          >
            <Card className="group h-full overflow-hidden border-zinc-800/50 bg-zinc-900/50 hover:border-zinc-700/50 transition-all duration-300 rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <motion.div
                    className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Brain className="w-5 h-5 text-zinc-400 group-hover:text-zinc-200 transition-colors" />
                  </motion.div>
                  <p className="font-heading font-semibold text-zinc-100">Analyze Performance</p>
                </div>
                <p className="text-zinc-500 text-sm mb-5">
                  Ask "How are my campaigns performing?" and get instant insights with AI-powered pattern recognition
                </p>
                <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-4 overflow-hidden">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center">
                      <Brain className="w-4 h-4 text-zinc-400" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-zinc-500">AI Analysis</p>
                    </div>
                  </div>
                  {/* Animated metrics */}
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {[
                      { label: "ROAS", value: "4.2x", trend: "up" },
                      { label: "CPA", value: "$24", trend: "down" },
                      { label: "CTR", value: "3.8%", trend: "up" },
                    ].map((metric, i) => (
                      <motion.div
                        key={metric.label}
                        className="bg-zinc-900/50 rounded-lg p-2.5"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                      >
                        <p className="text-zinc-500 text-xs mb-1">{metric.label}</p>
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-zinc-100 font-semibold text-sm">{metric.value}</span>
                          <motion.span
                            className={`text-xs ${metric.trend === "up" ? "text-green-500" : "text-red-500"}`}
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                          >
                            {metric.trend === "up" ? "↑" : "↓"}
                          </motion.span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <div className="text-xs text-zinc-500 leading-relaxed">
                    "Your top campaign increased ROAS by 23% this week. Ad set B needs attention."
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Card 2 - Optimize ROAS/CPA (2 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2"
          >
            <Card className="group h-full overflow-hidden border-zinc-800/50 bg-zinc-900/50 hover:border-zinc-700/50 transition-all duration-300 rounded-2xl">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-3">
                  <motion.div
                    className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  >
                    <TrendingUp className="w-5 h-5 text-zinc-400 group-hover:text-zinc-200 transition-colors" />
                  </motion.div>
                  <p className="font-heading font-semibold text-zinc-100">Auto-Optimize</p>
                </div>
                <p className="text-zinc-500 text-sm mb-5">Automatically optimize for ROAS and CPA targets</p>
                <div className="mt-auto space-y-3">
                  <motion.div
                    className="flex items-center justify-between text-xs"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-zinc-500">Target ROAS</span>
                    <span className="text-zinc-300 font-semibold">3.5x</span>
                  </motion.div>
                  <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full"
                      initial={{ width: "0%" }}
                      whileInView={{ width: "85%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                    />
                  </div>
                  <motion.div
                    className="text-xs text-zinc-500"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                  >
                    Currently at 4.2x ROAS
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Card 3 - Scale Winners (2 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-2"
          >
            <Card className="group h-full overflow-hidden border-zinc-800/50 bg-zinc-900/50 hover:border-zinc-700/50 transition-all duration-300 rounded-2xl">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-3">
                  <motion.div
                    className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center"
                    whileHover={{ scale: 1.2 }}
                  >
                    <Zap className="w-5 h-5 text-zinc-400 group-hover:text-zinc-200 transition-colors" />
                  </motion.div>
                  <p className="font-heading font-semibold text-zinc-100">Scale & Pause</p>
                </div>
                <p className="text-zinc-500 text-sm mb-5">Scale winning campaigns and pause losers automatically</p>
                <div className="flex flex-col gap-2 mt-auto">
                  <motion.div
                    className="flex items-center justify-between p-2 rounded-lg bg-green-500/10 border border-green-500/20"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <span className="text-xs text-zinc-400">Campaign A</span>
                    <span className="text-xs text-green-400 font-medium">+50% budget</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center justify-between p-2 rounded-lg bg-red-500/10 border border-red-500/20"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <span className="text-xs text-zinc-400">Campaign C</span>
                    <span className="text-xs text-red-400 font-medium">Paused</span>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Card 4 - Testing & Diagnostics (3 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-3"
          >
            <Card className="group h-full overflow-hidden border-zinc-800/50 bg-zinc-900/50 hover:border-zinc-700/50 transition-all duration-300 rounded-2xl">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-3">
                  <motion.div
                    className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center"
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Target className="w-5 h-5 text-zinc-400 group-hover:text-zinc-200 transition-colors" />
                  </motion.div>
                  <p className="font-heading font-semibold text-zinc-100">Test & Diagnose</p>
                </div>
                <p className="text-zinc-500 text-sm mb-5">
                  Launch creative tests, audience experiments, and diagnose performance drops instantly
                </p>
                <div className="grid grid-cols-2 gap-3 mt-auto">
                  <motion.div
                    className="p-3 rounded-lg border border-zinc-800 bg-zinc-800/50"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <AlertTriangle className="w-5 h-5 text-amber-500 mb-2" />
                    <p className="text-xs text-zinc-400">Diagnose drops</p>
                  </motion.div>
                  <motion.div
                    className="p-3 rounded-lg border border-zinc-800 bg-zinc-800/50"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Target className="w-5 h-5 text-blue-500 mb-2" />
                    <p className="text-xs text-zinc-400">A/B testing</p>
                  </motion.div>
                  <motion.div
                    className="p-3 rounded-lg border border-zinc-800 bg-zinc-800/50"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Brain className="w-5 h-5 text-purple-500 mb-2" />
                    <p className="text-xs text-zinc-400">Creative tests</p>
                  </motion.div>
                  <motion.div
                    className="p-3 rounded-lg border border-zinc-800 bg-zinc-800/50"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <TrendingUp className="w-5 h-5 text-green-500 mb-2" />
                    <p className="text-xs text-zinc-400">Audience tests</p>
                  </motion.div>
                </div>
                <motion.button
                  whileHover={{ x: 6 }}
                  className="mt-4 flex items-center gap-1.5 text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
                >
                  Create & edit campaigns <ArrowRight className="w-4 h-4" />
                </motion.button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
