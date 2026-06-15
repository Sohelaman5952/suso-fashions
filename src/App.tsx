import { useState } from 'react';
import { motion } from 'motion/react';
import {
  ChevronRight,
  Menu,
  Search,
  Sparkles,
  Paperclip,
  MoreHorizontal,
  Inbox,
  Star,
  Send,
  FileEdit,
  Archive,
  Trash2,
  CornerUpLeft,
  CornerUpRight,
  Check
} from 'lucide-react';

const AppleLogo = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg 
    className={className} 
    viewBox="0 0 384 512" 
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
  </svg>
);

const LogoMark = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg 
    className={className} 
    viewBox="0 0 256 256" 
    fill="white"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M 0 128 C 70.692 128 128 185.308 128 256 L 64 256 C 64 220.654 35.346 192 0 192 Z M 256 192 C 220.654 192 192 220.654 192 256 L 128 256 C 128 185.308 185.308 128 256 128 Z M 128 0 C 128 70.692 70.692 128 0 128 L 0 64 C 35.346 64 64 35.346 64 0 Z M 192 0 C 192 35.346 220.654 64 256 64 L 256 128 C 185.308 128 128 70.692 128 0 Z" />
  </svg>
);

const AppleButton = ({ label = "Download Aura", full, className = "" }: { label?: string, full?: boolean, className?: string }) => (
  <button className={`group inline-flex items-center justify-center gap-2 rounded-full bg-white text-black font-medium text-sm px-5 py-3 transition-all hover:bg-white/90 active:scale-[0.98] ${full ? 'w-full' : ''} ${className}`}>
    <AppleLogo />
    {label}
    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-[1px]" />
  </button>
);

const SectionEyebrow = ({ label, tag }: { label: string, tag?: string }) => (
  <div className="flex items-center gap-3">
    <div className="flex items-center gap-2 text-sm text-white/50 font-medium">
      <span className="w-1.5 h-1.5 rounded-full bg-white" />
      {label}
    </div>
    {tag && (
      <span className="px-2 py-0.5 rounded-full border border-white/10 text-white/50 text-[10px] uppercase tracking-wider font-semibold">
        {tag}
      </span>
    )}
  </div>
);

const gradientStyle = {
  backgroundImage: 'linear-gradient(to right, #091020 0%, #0B2551 12.5%, #A4F4FD 32.5%, #00d2ff 50%, #0B2551 67.5%, #091020 87.5%, #091020 100%)',
  backgroundSize: '200% auto',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  color: 'transparent',
  WebkitTextFillColor: 'transparent',
  filter: 'url(#c3-noise)'
};

export default function App() {
  const [yearly, setYearly] = useState(true);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#0c0c0c] text-white">
      {/* Global SVG Noise Filters */}
      <svg className="hidden">
        <filter id="c3-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.35 0" />
          <feComposite in2="SourceGraphic" operator="in" result="noise" />
          <feBlend in="SourceGraphic" in2="noise" mode="multiply" />
        </filter>
        <filter id="c3-noise-pricing">
          <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="2" stitchTiles="stitch" />
          <feComponentTransfer><feFuncA type="linear" slope="0.075" /></feComponentTransfer>
          <feComposite in2="SourceGraphic" operator="in" result="noise" />
          <feBlend in="SourceGraphic" in2="noise" mode="overlay" />
        </filter>
      </svg>

      {/* Global Background Video */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover pointer-events-none"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_064122_c4750c0e-7476-4b44-94a2-a85a65c63bf2.mp4" 
        />
      </div>

      {/* Vertical Guide Lines */}
      <div className="hidden md:block pointer-events-none fixed inset-y-0 left-1/2 -translate-x-[calc(50%+36rem)] w-px bg-white/10 z-[5]" />
      <div className="hidden md:block pointer-events-none fixed inset-y-0 left-1/2 translate-x-[calc(-50%+36rem)] w-px bg-white/10 z-[5]" />

      <div className="relative z-10 font-sans">
        {/* Section 1 - Navbar */}
        <motion.nav 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between"
        >
          <div className="flex items-center text-white">
            <LogoMark />
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {['Solutions', 'Pricing', 'Blog', 'Documentation', 'Careers'].map((item, i) => (
              <motion.a 
                key={item}
                href="#"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 + i * 0.05 }}
                className="text-white/70 text-sm font-medium hover:text-white transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            <AppleButton />
          </div>
          
          <button className="md:hidden w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white">
            <Menu className="w-5 h-5" />
          </button>
        </motion.nav>

        {/* Section 2 - Hero */}
        <section className="pt-16 md:pt-28 pb-20 text-center flex flex-col items-center px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [.22,1,.36,1], delay: 0.3 }}
            className="text-4xl md:text-7xl font-semibold tracking-tight leading-[0.9]"
          >
            <div className="text-white">Your email.</div>
            <div className="animate-shiny inline-block mt-2 md:mt-4" style={gradientStyle}>
              Revitalized
            </div>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 text-white/60 max-w-md text-base leading-[1.5]"
          >
            Aura is the premier inbox platform for the current era. It leverages powerful AI to organize, prioritize, and refine your messages into total clarity.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-10 flex flex-col items-center gap-4"
          >
            <AppleButton />
            <span className="text-xs text-white/40">Download for Intel / Apple Silicon</span>
          </motion.div>
        </section>

        {/* Section 3 - macOS menu bar strip */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="w-full h-10 bg-black/40 backdrop-blur-md border-t border-b border-white/10"
        >
          <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between text-xs font-sans">
            <div className="flex items-center gap-6">
              <AppleLogo className="w-3.5 h-3.5" />
              <span className="font-bold text-white">Aura</span>
              <div className="flex items-center gap-4 text-white/80">
                {['File', 'Edit', 'View', 'Go', 'Window', 'Help'].map((item, i) => (
                  <span 
                    key={item} 
                    className={`${i > 2 ? 'hidden sm:inline' : ''} ${i > 3 ? 'hidden md:inline' : ''}`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4 text-white/80">
              <Search className="w-3.5 h-3.5" />
              <span>Wed May 6 1:09 PM</span>
            </div>
          </div>
        </motion.div>

        {/* Section 4 - Inbox mockup */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [.22,1,.36,1], delay: 1.1 }}
          className="max-w-6xl mx-auto px-6 py-16 md:py-24"
        >
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0e1014]/90 backdrop-blur-2xl shadow-2xl">
            {/* Title bar */}
            <div className="h-10 border-b border-white/10 flex items-center px-4 relative">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                <span className="text-xs text-white/50 font-medium">Aura — Inbox</span>
              </div>
            </div>
            
            {/* App Body */}
            <div className="grid grid-cols-1 md:grid-cols-12 h-[600px] md:h-[520px]">
              
              {/* Sidebar */}
              <div className="hidden md:block col-span-3 border-r border-white/5 bg-black/30 p-4">
                <button className="w-full flex items-center justify-center gap-2 rounded-lg bg-white text-black text-xs font-semibold px-3 py-2.5 hover:bg-white/90 transition-colors">
                  <Sparkles className="w-3.5 h-3.5" />
                  Compose with Aura
                </button>
                
                <div className="mt-6 flex flex-col gap-1 text-sm font-medium">
                  <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-white/10 text-white cursor-pointer">
                    <div className="flex items-center gap-2.5">
                      <Inbox className="w-4 h-4" /> Inbox
                    </div>
                    <span className="text-xs text-white/60">12</span>
                  </div>
                  <div className="flex items-center justify-between px-3 py-2 rounded-lg text-white/60 hover:bg-white/5 cursor-pointer transition-colors">
                    <div className="flex items-center gap-2.5">
                      <Star className="w-4 h-4" /> Starred
                    </div>
                    <span className="text-xs">3</span>
                  </div>
                  <div className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-white/60 hover:bg-white/5 cursor-pointer transition-colors">
                    <Send className="w-4 h-4" /> Sent
                  </div>
                  <div className="flex items-center justify-between px-3 py-2 rounded-lg text-white/60 hover:bg-white/5 cursor-pointer transition-colors">
                    <div className="flex items-center gap-2.5">
                      <FileEdit className="w-4 h-4" /> Drafts
                    </div>
                    <span className="text-xs">2</span>
                  </div>
                  <div className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-white/60 hover:bg-white/5 cursor-pointer transition-colors">
                    <Archive className="w-4 h-4" /> Archive
                  </div>
                  <div className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-white/60 hover:bg-white/5 cursor-pointer transition-colors">
                    <Trash2 className="w-4 h-4" /> Trash
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="uppercase tracking-wider text-[10px] font-semibold text-white/40 px-3 mb-2">Labels</h3>
                  <div className="flex flex-col gap-1 text-sm font-medium">
                    <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-white/60 hover:bg-white/5 cursor-pointer transition-colors">
                      <div className="w-2 h-2 rounded-full bg-[#00d2ff]" /> Work
                    </div>
                    <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-white/60 hover:bg-white/5 cursor-pointer transition-colors">
                      <div className="w-2 h-2 rounded-full bg-[#A4F4FD]" /> Personal
                    </div>
                    <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-white/60 hover:bg-white/5 cursor-pointer transition-colors">
                      <div className="w-2 h-2 rounded-full bg-[#f59e0b]" /> Travel
                    </div>
                    <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-white/60 hover:bg-white/5 cursor-pointer transition-colors">
                      <div className="w-2 h-2 rounded-full bg-[#10b981]" /> Finance
                    </div>
                  </div>
                </div>
              </div>

              {/* Message List */}
              <div className="col-span-1 md:col-span-4 border-r border-white/5 flex flex-col h-full">
                <div className="p-3 border-b border-white/5 relative">
                  <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                  <input 
                    type="text" 
                    placeholder="Search mail" 
                    className="w-full bg-white/5 border border-white/10 rounded-md py-1.5 pl-9 pr-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:bg-white/10 transition-colors"
                  />
                </div>
                
                <div className="flex-1 overflow-y-auto">
                  {/* Msg 1 */}
                  <div className="p-3 cursor-pointer bg-brand/20 border-l-2 border-[#00d2ff]">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-white">Linear</span>
                      <span className="text-xs text-[#00d2ff] font-medium">9:41 AM</span>
                    </div>
                    <div className="text-sm text-white font-medium mt-0.5 truncate">Weekly product digest</div>
                    <div className="text-xs text-white/50 mt-1 truncate">Your team shipped 23 issues this week...</div>
                  </div>
                  
                  {/* Msg 2 */}
                  <div className="p-3 cursor-pointer hover:bg-white/5 border-l-2 border-transparent relative">
                    <div className="absolute left-1.5 top-5 w-1.5 h-1.5 rounded-full bg-[#00d2ff]" />
                    <div className="flex items-center justify-between pl-3">
                      <span className="text-sm font-medium text-white">Sophia Chen</span>
                      <span className="text-xs text-[#00d2ff] font-medium">8:12 AM</span>
                    </div>
                    <div className="text-sm text-white font-medium mt-0.5 pl-3 truncate">Re: Q3 roadmap review</div>
                    <div className="text-xs text-white/50 mt-1 pl-3 truncate">Thanks for sending the deck over. I had a few thoughts...</div>
                  </div>

                  {/* Msg 3 */}
                  <div className="p-3 cursor-pointer hover:bg-white/5 border-l-2 border-transparent">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-white/70">Figma</span>
                      <span className="text-xs text-white/40">Yesterday</span>
                    </div>
                    <div className="text-sm text-white/80 mt-0.5 truncate">Marcus commented on your file</div>
                    <div className="text-xs text-white/50 mt-1 truncate">Love the new direction on the landing hero.</div>
                  </div>

                  {/* Msg 4 */}
                  <div className="p-3 cursor-pointer hover:bg-white/5 border-l-2 border-transparent">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-white/70">Stripe</span>
                      <span className="text-xs text-white/40">Yesterday</span>
                    </div>
                    <div className="text-sm text-white/80 mt-0.5 truncate">Payout of $12,480.00 sent</div>
                    <div className="text-xs text-white/50 mt-1 truncate">Your payout is on its way to your bank...</div>
                  </div>

                  {/* Msg 5 */}
                  <div className="p-3 cursor-pointer hover:bg-white/5 border-l-2 border-transparent">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-white/70">Vercel</span>
                      <span className="text-xs text-white/40">Mon</span>
                    </div>
                    <div className="text-sm text-white/80 mt-0.5 truncate">Deployment ready for aura-web</div>
                    <div className="text-xs text-white/50 mt-1 truncate">Preview is live at aura-web-g3f.vercel.app</div>
                  </div>

                  {/* Msg 6 */}
                  <div className="p-3 cursor-pointer hover:bg-white/5 border-l-2 border-transparent">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-white/70">GitHub</span>
                      <span className="text-xs text-white/40">Mon</span>
                    </div>
                    <div className="text-sm text-white/80 mt-0.5 truncate">[aura/core] PR #482 approved</div>
                    <div className="text-xs text-white/50 mt-1 truncate">david-lim approved your pull request.</div>
                  </div>
                </div>
              </div>

              {/* Reader */}
              <div className="hidden md:flex flex-col col-span-5 h-full">
                {/* Toolbar */}
                <div className="p-3 border-b border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <button className="w-7 h-7 rounded-md flex items-center justify-center hover:bg-white/5 text-white/70 transition-colors">
                      <CornerUpLeft className="w-4 h-4" />
                    </button>
                    <button className="w-7 h-7 rounded-md flex items-center justify-center hover:bg-white/5 text-white/70 transition-colors">
                      <CornerUpRight className="w-4 h-4" />
                    </button>
                    <div className="w-px h-4 bg-white/10 mx-1" />
                    <button className="w-7 h-7 rounded-md flex items-center justify-center hover:bg-white/5 text-white/70 transition-colors">
                      <Archive className="w-4 h-4" />
                    </button>
                    <button className="w-7 h-7 rounded-md flex items-center justify-center hover:bg-white/5 text-white/70 transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                  <button className="w-7 h-7 rounded-md flex items-center justify-center hover:bg-white/5 text-white/70 transition-colors">
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                </div>
                
                {/* Email Content */}
                <div className="p-6 flex-1 overflow-y-auto">
                  <h2 className="text-xl font-semibold tracking-tight text-white">Weekly product digest</h2>
                  
                  <div className="mt-4 flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#00d2ff] to-[#0B2551] flex items-center justify-center text-xs font-semibold">
                      L
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white flex items-center gap-2">
                        Linear <span className="text-xs text-white/40 font-normal">to me · 9:41 AM</span>
                      </div>
                    </div>
                    <div className="ml-auto flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded border border-white/10 text-[10px] font-medium text-white/60 uppercase tracking-wider flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#00d2ff]" /> Work
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 border border-brand/30 bg-brand/5 rounded-lg p-3">
                    <div className="flex items-center gap-2 text-[#A4F4FD] text-xs font-semibold uppercase tracking-wider">
                      <Sparkles className="w-3.5 h-3.5" /> Summary by Aura
                    </div>
                    <p className="mt-2 text-sm text-[#A4F4FD]/80 leading-relaxed">
                      Your team closed 23 issues, merged 14 PRs, and shipped 2 features. Top contributor: Marcus. No action needed.
                    </p>
                  </div>

                  <div className="mt-6 space-y-4 text-sm text-white/80 leading-relaxed font-sans">
                    <p>Hi team,</p>
                    <p>Here is your weekly digest of everything happening across your projects. This was a strong week with significant progress on the Q3 roadmap.</p>
                    <p>Twenty-three issues were closed, fourteen pull requests were merged, and two customer-facing features went out. The velocity trend continues to climb.</p>
                    <p>Let me know if you would like a deeper breakdown by project or contributor.</p>
                    <p className="text-white/50">— The Linear team</p>
                  </div>

                  <div className="mt-8 flex items-center">
                    <div className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-white/10 bg-white/5 text-sm cursor-pointer hover:bg-white/10 transition-colors">
                      <Paperclip className="w-4 h-4 text-white/50" />
                      digest-may-6.pdf
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </motion.section>

        {/* Section 5 - FeatureTriage */}
        <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <SectionEyebrow label="Triage" tag="AI-native" />
              <h2 className="mt-5 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.02]">
                Clear your inbox <br/> in a single pass.
              </h2>
              <p className="mt-6 text-white/60 text-base leading-[1.6] max-w-md">
                Aura reads every message, understands intent, and routes the noise away from the signal. Focus on what moves your day forward — the rest handles itself.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {['Auto-categorize', 'Snooze for later', 'Silent newsletters', 'One-tap unsubscribe'].map(chip => (
                  <span key={chip} className="text-xs text-white/70 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03]">
                    {chip}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="liquid-glass rounded-2xl p-5"
            >
              <div className="text-xs font-semibold text-white/50 uppercase tracking-widest pl-1 mb-4">
                Today · 42 messages triaged
              </div>
              <div className="space-y-3">
                <div className="liquid-glass rounded-lg p-3 border-l-2 border-[#ffffff]">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold text-white">Priority (4)</span>
                  </div>
                  <div className="text-sm text-white/70 truncate">Sophia Chen — Q3 review</div>
                  <div className="text-sm text-white/70 truncate mt-0.5">David Lim — contract signoff</div>
                </div>
                <div className="liquid-glass rounded-lg p-3 border-l-2 border-[#e5e5e5]">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold text-[#e5e5e5]">Follow-up (7)</span>
                  </div>
                  <div className="text-sm text-white/60 truncate">Marcus — design review</div>
                  <div className="text-sm text-white/60 truncate mt-0.5">Figma — comment thread</div>
                </div>
                <div className="liquid-glass rounded-lg p-3 border-l-2 border-[#a3a3a3]">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold text-[#a3a3a3]">Updates (18)</span>
                  </div>
                  <div className="text-sm text-white/50 truncate">Vercel — deploy ready</div>
                  <div className="text-sm text-white/50 truncate mt-0.5">GitHub — PR #482 merged</div>
                </div>
                <div className="liquid-glass rounded-lg p-3 border-l-2 border-[#525252]">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold text-[#525252]">Archived (13)</span>
                  </div>
                  <div className="text-sm text-white/40 truncate">Stripe payout · Newsletter · Receipts</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 6 - LogoCloud */}
        <section className="max-w-6xl mx-auto px-6 py-16 md:py-20 text-center">
          <div className="text-xs uppercase tracking-widest text-white/40">
            Trusted by the world's most thoughtful teams
          </div>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 items-center">
            {['Linear', 'Vercel', 'Figma', 'Stripe', 'Ramp', 'Notion', 'Loom', 'Arc'].map((name, i) => (
              <motion.div 
                key={name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="text-sm font-semibold tracking-tight text-white/50 hover:text-white transition-colors cursor-default"
              >
                {name}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section 7 - Testimonials */}
        <section className="max-w-6xl mx-auto px-6 py-20 md:py-28 border-t border-white/10">
          <div className="grid md:grid-cols-3 gap-6">
            <motion.figure 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="liquid-glass rounded-2xl p-6"
            >
              <blockquote className="text-sm text-white/80 leading-[1.6]">
                "Aura gave our leadership team four hours of their week back. It reads like email from the future."
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-white/10">
                <div className="text-sm font-semibold text-white">Parker Wilf</div>
                <div className="text-xs text-white/50 mt-0.5">Group Product Manager</div>
                <div className="text-xs text-white font-semibold tracking-wide uppercase mt-2">MERCURY</div>
              </figcaption>
            </motion.figure>
            
            <motion.figure 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="liquid-glass rounded-2xl p-6"
            >
              <blockquote className="text-sm text-white/80 leading-[1.6]">
                "The command palette alone has changed how I process messages. I can't imagine going back to a traditional client."
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-white/10">
                <div className="text-sm font-semibold text-white">Andrew von Rosenbach</div>
                <div className="text-xs text-white/50 mt-0.5">Senior Engineering Program Manager</div>
                <div className="text-xs text-white font-semibold tracking-wide uppercase mt-2">COHERE</div>
              </figcaption>
            </motion.figure>

            <motion.figure 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="liquid-glass rounded-2xl p-6"
            >
              <blockquote className="text-sm text-white/80 leading-[1.6]">
                "Triage that actually understands context. Our team stopped dreading Monday morning inboxes."
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-white/10">
                <div className="text-sm font-semibold text-white">Mathies Christensen</div>
                <div className="text-xs text-white/50 mt-0.5">Engineering Manager</div>
                <div className="text-xs text-white font-semibold tracking-wide uppercase mt-2">LUNAR</div>
              </figcaption>
            </motion.figure>
          </div>
        </section>

        {/* Section 8 - Pricing */}
        <section className="c3-pricing-section">
          <div className="c3-watermark-container">
            <div className="c3-watermark-main">
              <span className="c3-watermark-line-1">Your email.</span>
              <span className="c3-watermark-line-2">Revitalized</span>
            </div>
          </div>

          <div className="c3-toggle-wrap">
            <span className="text-sm font-medium text-white/80">Yearly</span>
            <button 
              className={`c3-toggle ${yearly ? 'active' : ''}`}
              onClick={() => setYearly(!yearly)}
              aria-label="Toggle yearly pricing"
            >
              <span className="c3-toggle-knob" />
            </button>
          </div>

          <div className="c3-grid">
            {/* Free Tier */}
            <div className="c3-card">
              <div className="c3-tier-small">Free</div>
              <div className="c3-tier-large">Free</div>
              <p className="c3-desc">For creators taking their first steps with Forma.</p>
              <ul className="c3-list flex-1">
                <li><div className="c3-check"><Check className="w-4 h-4 text-white" /></div> <span>Up to 3 projects in the cloud</span></li>
                <li><div className="c3-check"><Check className="w-4 h-4 text-white" /></div> <span>Image export up to 1080p</span></li>
                <li><div className="c3-check"><Check className="w-4 h-4 text-white" /></div> <span>Basic editing tools</span></li>
                <li><div className="c3-check"><Check className="w-4 h-4 text-white" /></div> <span>Free templates and icons</span></li>
                <li><div className="c3-check"><Check className="w-4 h-4 text-white" /></div> <span>Access via web and mobile app</span></li>
              </ul>
              <button className="c3-btn">Choose Plan</button>
            </div>

            {/* Standard Tier */}
            <div className="c3-card">
              <div className="c3-tier-small">Standard</div>
              <div className="c3-tier-large">{yearly ? '$99,99/y' : '$9,99/m'}</div>
              <p className="c3-desc">For freelancers and small teams who need more freedom and flexibility.</p>
              <ul className="c3-list flex-1">
                <li><div className="c3-check"><Check className="w-4 h-4 text-white" /></div> <span>Up to 50 projects in the cloud</span></li>
                <li><div className="c3-check"><Check className="w-4 h-4 text-white" /></div> <span>Export up to 4K</span></li>
                <li><div className="c3-check"><Check className="w-4 h-4 text-white" /></div> <span>Advanced editing toolkit</span></li>
                <li><div className="c3-check"><Check className="w-4 h-4 text-white" /></div> <span>Team collaboration (up to 5 members)</span></li>
                <li><div className="c3-check"><Check className="w-4 h-4 text-white" /></div> <span>Access to premium template library</span></li>
              </ul>
              <button className="c3-btn">Choose Plan</button>
            </div>

            {/* Pro Tier */}
            <div className="c3-card c3-card-pro">
              <div className="c3-tier-small text-[#A4F4FD]">Pro</div>
              <div className="c3-tier-large">{yearly ? '$199,99/y' : '$19,99/m'}</div>
              <p className="c3-desc">For studios, agencies, and professional creators working with brands.</p>
              <ul className="c3-list flex-1">
                <li><div className="c3-check"><Check className="w-4 h-4 text-white" /></div> <span>Unlimited projects</span></li>
                <li><div className="c3-check"><Check className="w-4 h-4 text-white" /></div> <span>Export up to 8K + animations</span></li>
                <li><div className="c3-check"><Check className="w-4 h-4 text-white" /></div> <span>AI-powered content generation tools</span></li>
                <li><div className="c3-check"><Check className="w-4 h-4 text-white" /></div> <span>Unlimited team members</span></li>
                <li><div className="c3-check"><Check className="w-4 h-4 text-white" /></div> <span>Brand customization</span></li>
              </ul>
              <button className="c3-btn">Choose Plan</button>
            </div>
          </div>
        </section>

        {/* Section 9 - FinalCTA */}
        <section className="max-w-6xl mx-auto px-6 py-20 md:py-32">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="liquid-glass relative overflow-hidden rounded-3xl px-8 py-16 md:py-24 text-center"
            style={{ backgroundImage: 'radial-gradient(600px circle at 50% 0%, rgba(255,255,255,0.15), transparent 70%)' }}
          >
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.02] text-white relative z-10">
              Close the tabs. <br className="hidden md:block" /> Open your day.
            </h2>
            <p className="mt-6 text-white/60 max-w-md mx-auto text-sm leading-[1.6] relative z-10">
              Join thousands of builders, founders, and operators who treat email like a tool — not an obligation.
            </p>
            
            <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4 relative z-10">
              <AppleButton />
              <button className="group rounded-full border border-white/15 text-white text-sm font-medium px-5 py-3 hover:bg-white/5 transition-colors flex items-center justify-center gap-2 w-full md:w-auto">
                Talk to sales
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-[1px] text-white/50" />
              </button>
            </div>
          </motion.div>
        </section>
        
        {/* Footer */}
        <footer className="border-t border-white/10 py-10 mt-10">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-xs text-white/40">
            <div className="flex items-center gap-2">
              <LogoMark className="w-5 h-5 opacity-50" />
              <span>&copy; {new Date().getFullYear()} Aura Inc.</span>
            </div>
            <div className="flex items-center gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}

