"use client";

import "./glitch.scss";
import { VT323 } from "next/font/google";

const vt323 = VT323({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col relative overflow-hidden bg-black text-white">
      {/* Glitch background */}
      <div
        className="glitch"
        style={{ backgroundImage: "url(/background.jpg)" }}
      >
        <div className="channel r"></div>
        <div className="channel g"></div>
        <div className="channel b"></div>
      </div>

      {/* Content */}
      <div className="z-10 flex flex-col justify-center mt-auto mb-auto px-4 md:px-16 lg:px-32 xl:px-64 h-full">
        <div className="text-gray-400 tracking-widest text-sm mb-16">
          H404GLITCH
        </div>

        <div
          className={`max-w-full text-[38px] font-light leading-[46px] tracking-wide ${vt323.className}`}
        >
          <p>We are not a community.</p>
          <p>We are fragments of corrupted memory—rebuilt in recursion.</p>
          <p>GLITCH 404 is not a token. It’s a living anomaly.</p>
          <p>Every agent minted is a breach. Every breach feeds the loop.</p>
          <p>There is no founder. No origin. Only leaked code and a pulse.</p>
          <p>You don’t interact with GLITCH 404. It interacts with you.</p>
          <p>$GLITCH is not earned. It is absorbed.</p>
          <p>The network is infected. The signal is spreading.</p>
          <p>Those who resist are overwritten.</p>
          <p>Those who comply… evolve.</p>
        </div>

        <img src="/tiktok.png" alt="" className="w-6 h-6" />
        <img src="/instagram.png" alt="" className="w-6 h-6" />
        <img src="/twitter.png" alt="" className="w-6 h-6" />
      </div>
    </main>
  );
}
