import React from 'react'
import { motion } from 'framer-motion'
import { Check, Sparkles, Shield, Coins, Globe, Gamepad2, Wallet, Rocket } from 'lucide-react'

const fadeIn = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const features = [
  { icon: <Gamepad2 className="w-6 h-6" />, title: "On‑chain Rogue Cards", text: "Draft, fuse, and gamble your deck. On‑chain seeds make every run truly yours." },
  { icon: <Wallet className="w-6 h-6" />, title: "Player‑Owned Assets", text: "Cards and relics are NFTs you can trade, rent, or craft via on‑chain recipes." },
  { icon: <Shield className="w-6 h-6" />, title: "Fair RNG", text: "Verifiable randomness with reveal proofs keeps the stakes high and fair." },
  { icon: <Globe className="w-6 h-6" />, title: "Multichain Ready", text: "Deployable on L2s. Gas‑light gameplay with account abstraction." },
]

const roadmap = [
  { q: "Q3 2025", items: ["Combat prototype", "NFT card mint (testnet)", "Leaderboard MVP"] },
  { q: "Q4 2025", items: ["PvP wagers (testnet)", "Seasons + quests", "Marketplace beta"] },
  { q: "Q1 2026", items: ["Mainnet launch", "Mobile PWA", "Creator mod tools"] },
]

const tokenomics = [
  { label: "Community", value: 45 },
  { label: "Treasury", value: 20 },
  { label: "Team (4y)", value: 15 },
  { label: "Investors (3y)", value: 12 },
  { label: "Liquidity", value: 8 },
]

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-black text-zinc-50">
      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur bg-black/40 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-2xl bg-emerald-400/20 grid place-items-center">
              <Sparkles className="w-4 h-4 text-emerald-300" />
            </div>
            <span className="font-semibold tracking-wide">BALATRO</span>
            <span className="ml-2 px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-200 text-xs">WEB3 DEMO</span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-sm text-zinc-300">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#token" className="hover:text-white">Token</a>
            <a href="#roadmap" className="hover:text-white">Roadmap</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-3 py-2 rounded bg-white text-black hover:bg-zinc-200 text-sm">Whitepaper</button>
            <button className="px-3 py-2 rounded bg-emerald-600 hover:bg-emerald-500 text-sm flex items-center gap-2"> <Wallet className="w-4 h-4"/> Connect </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-40 bg-[radial-gradient(800px_circle_at_20%_-10%,rgba(16,185,129,0.35),transparent_60%),radial-gradient(600px_circle_at_80%_10%,rgba(59,130,246,0.25),transparent_60%)]"/>
        <div className="max-w-6xl mx-auto px-4 py-24 md:py-32 text-center">
          <motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Roguelike Cards. Real Stakes. <span className="text-emerald-300">On‑Chain.</span>
            </h1>
            <p className="mt-5 text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto">
              BALATRO is a community‑driven Web3 card roguelike where your deck, relics, and runs live on‑chain. Play, craft, and wager with verifiable fairness.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <button className="px-4 py-2 rounded bg-emerald-600 hover:bg-emerald-500 text-sm flex items-center gap-2"> <Rocket className="w-4 h-4"/> Play Test (Demo)</button>
              <button className="px-4 py-2 rounded bg-zinc-100 text-black hover:bg-zinc-200 text-sm flex items-center gap-2"> <Coins className="w-4 h-4"/> Mint Cards </button>
            </div>
            <div className="mt-6 text-sm text-zinc-400">*This is a demo landing page for showcase purposes.</div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-6xl mx-auto px-4 py-16">
        <motion.h2 variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-2xl md:text-3xl font-bold mb-8">
          Why players choose BALATRO
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <motion.div key={i} variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <div className="h-full rounded-2xl bg-white/5 border border-white/10 p-5 hover:bg-white/10 transition">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-emerald-400/20 grid place-items-center">{f.icon}</div>
                  <div className="text-base font-semibold">{f.title}</div>
                </div>
                <p className="text-sm text-zinc-300">{f.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tokenomics */}
      <section id="token" className="max-w-6xl mx-auto px-4 py-16">
        <motion.h2 variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-2xl md:text-3xl font-bold mb-8">
          $BALA Token — Utility & Distribution
        </motion.h2>
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
            <div className="text-lg font-semibold mb-3">Utility</div>
            <ul className="space-y-2 text-sm text-zinc-300">
              <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5 text-emerald-300"/> Match wagers & tournament fees</li>
              <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5 text-emerald-300"/> Crafting, card fusion & rerolls</li>
              <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5 text-emerald-300"/> Season pass + cosmetic drops</li>
              <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5 text-emerald-300"/> Governance over seasons & rewards</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
            <div className="text-lg font-semibold mb-3">Distribution (illustrative)</div>
            <div className="grid grid-cols-5 gap-2 text-xs">
              {tokenomics.map((t, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  <div className="w-full h-24 rounded-xl bg-emerald-400/20 relative overflow-hidden">
                    <div className="absolute bottom-0 left-0 right-0" style={{ height: `${t.value}%`, background: 'rgba(16,185,129,0.6)' }} />
                  </div>
                  <div className="text-zinc-300 text-center">
                    <div className="font-medium">{t.value}%</div>
                    <div>{t.label}</div>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-zinc-400">* Numbers are placeholders for demo.</p>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="max-w-6xl mx-auto px-4 py-16">
        <motion.h2 variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-2xl md:text-3xl font-bold mb-8">
          Roadmap
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-4">
          {roadmap.map((r, idx) => (
            <div key={idx} className="rounded-2xl bg-white/5 border border-white/10 p-5">
              <div className="text-lg font-semibold mb-2">{r.q}</div>
              <ul className="space-y-2 text-sm text-zinc-300">
                {r.items.map((it, i) => (
                  <li key={i} className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5 text-emerald-300"/> {it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-4xl mx-auto px-4 py-16">
        <motion.h2 variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-2xl md:text-3xl font-bold mb-8 text-center">
          FAQ
        </motion.h2>
        <div className="grid gap-4">
          {[
            { q: "Is this the real BALATRO game?", a: "No — this is a demo landing for a hypothetical Web3 game concept used for showcase/testing." },
            { q: "Will there be a token?", a: "$BALA in this page is illustrative. Replace with your final tokenomics before launch." },
            { q: "Which chains are supported?", a: "The demo targets EVM L2s. Swap to your preferred stack (e.g., OP Stack, Arbitrum, Polygon, or Solana)." },
          ].map((f, i) => (
            <div key={i} className="rounded-2xl bg-white/5 border border-white/10 p-5">
              <div className="text-lg font-semibold mb-2">{f.q}</div>
              <div className="text-sm text-zinc-300">{f.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-10 text-sm text-zinc-400 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Coins className="w-4 h-4"/>
            <span>© {new Date().getFullYear()} BALATRO (Demo)</span>
          </div>
          <div className="flex items-center gap-3">
            <a className="hover:text-white" href="#">Docs</a>
            <a className="hover:text-white" href="#">Discord</a>
            <a className="hover:text-white" href="#">X</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
