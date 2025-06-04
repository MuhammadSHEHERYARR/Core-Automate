"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-section").forEach((section) => {
      observer.observe(section);
    });

    // Scroll progress bar
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="homepage">
      {/* Background Effects */}
      <div className="noise-overlay"></div>
      <div className="gradient-sphere sphere-1"></div>
      <div className="gradient-sphere sphere-2"></div>
      <div className="gradient-sphere sphere-3"></div>
      
      {/* Progress Bar */}
      <div className="progress-bar" style={{ width: `${scrollProgress}%` }} />

      {/* HERO */}
      <div className="section-bg">
        <section className="section-container hero fade-section">
          <h1>
            Automate with <span className="gradient-text">Precision & Scale</span>
          </h1>
          <p className="typing-text">
            Custom workflows using Zapier, Make, n8n, and OpenAI. Save hours. Grow faster.
          </p>
          <div className="hero-buttons">
            <Link href="/services" passHref legacyBehavior>
              <a className="btn primary">Explore Services</a>
            </Link>
            <Link href="/about" passHref legacyBehavior>
              <a className="btn secondary">About Us</a>
            </Link>
          </div>
        </section>
      </div>

      <div className="section-divider">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,50 C150,100 350,0 500,50 C650,100 850,0 1000,50 C1150,100 1350,0 1440,50 L1440,100 L0,100 Z" />
        </svg>
      </div>

      {/* SERVICES */}
      <div className="section-bg dark">
        <section className="section-container fade-section">
          <h2>What We Automate</h2>
          <div className="services-grid">
            <div className="service large">
              <div className="service-overlay"></div>
              <Image
                src="/Assets/CRM & SALES Automation Background image.png"
                alt="CRM & Sales Automation"
                fill
                style={{ objectFit: 'contain', objectPosition: 'center' }}
                className="service-bg-image"
                priority
              />
              <div className="service-content">
                <h3>CRM & Sales Automation</h3>
                <p>Streamline your sales process with intelligent automation</p>
              </div>
            </div>
            <div className="service">
              <div className="service-overlay"></div>
              <Image
                src="/Assets/Email Assistang Background.png"
                alt="AI Email Assistants"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                className="service-bg-image"
              />
              <div className="service-content">
                <h3>AI Email Assistants</h3>
                <p>Smart email automation and response handling</p>
              </div>
            </div>
            <div className="service">
              <div className="service-overlay"></div>
              <Image
                src="/Assets/Whatsapp agent background.png"
                alt="WhatsApp Workflows"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                className="service-bg-image"
              />
              <div className="service-content">
                <h3>WhatsApp Workflows</h3>
                <p>Automated customer engagement via WhatsApp</p>
              </div>
            </div>
            <div className="service">
              <div className="service-overlay"></div>
              <Image
                src="/Assets/Data Daashboard background.webp"
                alt="Data Dashboards"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                className="service-bg-image"
              />
              <div className="service-content">
                <h3>Data Dashboards</h3>
                <p>Real-time analytics and reporting</p>
              </div>
            </div>
            <div className="service">
              <div className="service-overlay"></div>
              <Image
                src="/Assets/Custom Agent background.png"
                alt="Custom Workflows"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                className="service-bg-image"
              />
              <div className="service-content">
                <h3>Custom Workflows</h3>
                <p>Tailored automation solutions for your needs</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="section-divider">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,50 C150,100 350,0 500,50 C650,100 850,0 1000,50 C1150,100 1350,0 1440,50 L1440,100 L0,100 Z" />
        </svg>
      </div>

      {/* TOOLS */}
      <div className="section-bg lighter">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
        <section className="section-container fade-section">
          <h2>We Work With</h2>
          <div className="tools-grid">
            <div className="tool">Zapier</div>
            <div className="tool">n8n</div>
            <div className="tool">Make.com</div>
            <div className="tool">OpenAI</div>
          </div>
        </section>
      </div>

      <div className="section-divider" />

      {/* ABOUT */}
      <div className="section-bg dark">
        <section className="section-container fade-section">
          <h2>Who We Are</h2>
          <p>
            Core Automate is a no-code automation agency helping businesses
            streamline operations with smart systems and custom integrations.
          </p>
          <p>
            From chatbot flows to CRM pipelines, we build reliable automation
            solutions that drive growth.
          </p>
        </section>
      </div>

      <div className="section-divider" />

      {/* DELIVERABLES */}
      <div className="section-bg lighter">
        <section className="section-container fade-section">
          <h2>What We Deliver</h2>
          <ul className="deliverables">
            <li>⚙️ Workflow Automation (CRM, Email, Forms)</li>
            <li>🤖 Custom AI Assistants via OpenAI</li>
            <li>📞 WhatsApp CRM Bots</li>
            <li>📊 Airtable, Sheets & Notion Sync</li>
            <li>🔗 Webhooks & API Integrations</li>
          </ul>
        </section>
      </div>

      <div className="section-divider" />

      {/* CTA */}
      <div className="section-bg">
        <section className="section-container cta fade-section">
          <h2>Ready to Automate?</h2>
          <Link href="/contact" className="btn white">
            Let's Get Started
          </Link>
        </section>
      </div>

      {/* END SECTION BUFFER */}
      <div className="section-bg dark">
        <section className="section-container footer-buffer">
          <p>
            Built by <strong>Core Automate</strong> — Simplifying the complex.
          </p>
        </section>
      </div>

      <style jsx>{`
        .homepage {
          font-family: 'Inter', sans-serif;
          background: #0e0e0e;
          color: white;
          min-height: 100vh;
          position: relative;
          overflow: hidden;
        }

        /* Background Effects */
        .noise-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          opacity: 0.05;
          pointer-events: none;
          z-index: 1;
        }

        .gradient-sphere {
          position: fixed;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.15;
          pointer-events: none;
          z-index: 0;
          animation: float 20s ease-in-out infinite;
        }

        .sphere-1 {
          width: 600px;
          height: 600px;
          background: radial-gradient(circle at center, #f82c6e 0%, transparent 70%);
          top: -200px;
          left: -100px;
          animation-delay: 0s;
        }

        .sphere-2 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle at center, #651fff 0%, transparent 70%);
          bottom: -150px;
          right: -100px;
          animation-delay: -5s;
        }

        .sphere-3 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle at center, #fdd835 0%, transparent 70%);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation-delay: -10s;
        }

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(50px, 50px) scale(1.1);
          }
          50% {
            transform: translate(0, 100px) scale(1);
          }
          75% {
            transform: translate(-50px, 50px) scale(0.9);
          }
        }

        .progress-bar {
          position: fixed;
          top: 0;
          left: 0;
          height: 3px;
          background: linear-gradient(to right, #f82c6e, #651fff);
          z-index: 1000;
          transition: width 0.1s ease;
        }

        .gradient-text {
          background: linear-gradient(45deg, #fdd835, #f50057, #651fff);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient 8s ease infinite;
        }

        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .typing-text {
          border-right: 2px solid #f82c6e;
          white-space: nowrap;
          overflow: hidden;
          animation: typing 3.5s steps(40, end),
                     blink-caret 0.75s step-end infinite;
        }

        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }

        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: #f82c6e }
        }

        .section-divider {
          height: 100px;
          overflow: hidden;
          position: relative;
          margin: -50px 0;
        }

        .section-divider svg {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
          fill: #0e0e0e;
          animation: wave 10s linear infinite;
        }

        @keyframes wave {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .floating-shapes {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
        }

        .shape {
          position: absolute;
          border-radius: 50%;
          opacity: 0.1;
          filter: blur(40px);
        }

        .shape-1 {
          width: 300px;
          height: 300px;
          background: #f82c6e;
          top: 20%;
          left: 10%;
          animation: float 8s ease-in-out infinite;
        }

        .shape-2 {
          width: 200px;
          height: 200px;
          background: #651fff;
          top: 60%;
          right: 15%;
          animation: float 6s ease-in-out infinite reverse;
        }

        .shape-3 {
          width: 150px;
          height: 150px;
          background: #fdd835;
          bottom: 20%;
          left: 30%;
          animation: float 7s ease-in-out infinite 1s;
        }

        .services-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          grid-template-rows: repeat(2, minmax(280px, auto));
          gap: 24px;
          margin-top: 40px;
        }

        .service {
          background: rgba(13, 13, 26, 0.95);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 32px;
          display: flex;
          align-items: flex-end;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: white;
          position: relative;
          overflow: hidden;
          transform-origin: center;
          cursor: pointer;
          min-height: 300px;
        }

        .service-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            to bottom,
            rgba(13, 13, 26, 0.2) 0%,
            rgba(13, 13, 26, 0.6) 50%,
            rgba(13, 13, 26, 0.95) 100%
          );
          z-index: 1;
          transition: background 0.3s ease;
        }

        .service:hover .service-overlay {
          background: linear-gradient(
            to bottom,
            rgba(13, 13, 26, 0.3) 0%,
            rgba(13, 13, 26, 0.7) 50%,
            rgba(13, 13, 26, 0.98) 100%
          );
        }

        .service-bg-image {
          position: absolute !important;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 0;
          opacity: 0.85;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1) !important;
          transform: scale(1.01);
        }

        .service:hover .service-bg-image {
          transform: scale(1.08);
          opacity: 0.95;
        }

        .service:not(.large) {
          background: rgba(13, 13, 26, 0.95);
        }

        .service:not(.large):hover {
          transform: translateY(-8px);
          border-color: rgba(255, 255, 255, 0.25);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5);
        }

        .service:not(.large) .service-content {
          position: relative;
          z-index: 2;
          text-align: left;
          width: 100%;
          padding: 0 0 8px 0;
        }

        .service:not(.large) .service-content h3 {
          font-size: 1.6rem;
          margin-bottom: 0.75rem;
          color: white;
          font-weight: 600;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
          letter-spacing: -0.02em;
          transition: transform 0.3s ease;
        }

        .service:hover .service-content h3 {
          transform: translateY(-2px);
        }

        .service:not(.large) .service-content p {
          font-size: 1rem;
          opacity: 0.95;
          max-width: 100%;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.9);
        }

        .service.large {
          grid-row: span 2;
          min-height: 620px;
          padding: 40px;
          background: rgba(13, 13, 26, 0.95);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          cursor: pointer;
        }

        .tools-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          justify-content: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .tool {
          background: rgba(24, 24, 24, 0.8);
          backdrop-filter: blur(10px);
          padding: 12px 20px;
          border: 1px solid #333;
          border-radius: 12px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          color: white;
          position: relative;
          overflow: hidden;
          transform-origin: center;
          font-size: 0.95rem;
        }

        .tool:hover {
          transform: translateY(-6px) scale(1.05);
          border-color: #f82c6e;
          box-shadow: 0 8px 20px rgba(248, 44, 110, 0.15),
                      0 0 15px rgba(248, 44, 110, 0.1);
        }

        .fade-section {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.7s ease;
        }

        .fade-section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .section-bg {
          width: 100%;
          background: #0e0e0e;
          position: relative;
          z-index: 2;
        }

        .section-bg::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at center, rgba(248, 44, 110, 0.03) 0%, transparent 70%);
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .section-bg:hover::before {
          opacity: 1;
        }

        .section-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 100px 20px;
          text-align: center;
          position: relative;
          z-index: 3;
          backdrop-filter: blur(10px);
        }

        .section-bg.dark {
          background: rgba(14, 14, 14, 0.95);
        }

        .section-bg.lighter {
          background: rgba(21, 21, 21, 0.95);
        }

        .section-divider {
          height: 2px;
          background: linear-gradient(to right, transparent, #f82c6e, transparent);
          opacity: 0.4;
          filter: blur(1px);
          margin: 0;
        }

        .gradient {
          background: linear-gradient(to right, #fdd835, #f50057, #651fff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        h1 {
          font-size: 3rem;
          margin-bottom: 16px;
          color: white;
        }

        h2 {
          font-size: 2rem;
          margin-bottom: 40px;
          color: white;
        }

        .hero p {
          color: #ccc;
          font-size: 1.2rem;
        }

        .hero-buttons {
          margin-top: 32px;
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn {
          padding: 14px 28px;
          border-radius: 999px;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          z-index: 1;
        }

        .btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, #f82c6e, #651fff);
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: -1;
        }

        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(248, 44, 110, 0.2);
        }

        .primary {
          background: linear-gradient(45deg, #f82c6e, #651fff);
          color: white;
          border: none;
          box-shadow: 0 4px 15px rgba(248, 44, 110, 0.2);
        }

        .primary:hover {
          box-shadow: 0 8px 25px rgba(248, 44, 110, 0.3);
        }

        .primary::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            45deg,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
          );
          transform: rotate(45deg);
          transition: 0.5s;
          opacity: 0;
        }

        .primary:hover::after {
          opacity: 1;
          transform: rotate(45deg) translate(50%, 50%);
        }

        .secondary {
          background: transparent;
          border: 2px solid #f82c6e;
          color: #f82c6e;
          position: relative;
          overflow: hidden;
          transition: color 0.3s, border-color 0.3s, background 0.3s;
        }

        .secondary::before,
        .secondary::after {
          display: none !important;
        }

        .secondary:hover {
          color: #fff;
          border-color: #f82c6e;
          background: transparent;
        }

        .white {
          background: white;
          color: black;
        }

        .deliverables {
          list-style: none;
          padding: 0;
          max-width: 600px;
          margin: 0 auto;
        }

        .deliverables li {
          font-size: 1.1rem;
          margin: 12px 0;
          padding: 12px;
          border-radius: 8px;
          transition: all 0.3s ease;
          color: white;
        }

        .deliverables li:hover {
          background: rgba(248, 44, 110, 0.1);
          transform: translateX(4px);
        }

        .cta .section-container {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          background: linear-gradient(135deg, rgba(248, 44, 110, 0.9), rgba(101, 31, 255, 0.9));
          backdrop-filter: blur(10px);
          border-radius: 24px;
          margin: 40px 20px;
          box-shadow: 0 0 30px rgba(248, 44, 110, 0.2);
          position: relative;
          overflow: hidden;
        }

        .cta .section-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at center, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .cta .section-container:hover::before {
          opacity: 1;
        }

        .cta h2 {
          color: white;
        }

        .cta .btn.white {
          margin-top: 20px;
        }

        .footer-buffer {
          color: #888;
          font-size: 0.95rem;
          border-top: 1px solid #1e1e1e;
        }

        .footer-buffer strong {
          color: #f82c6e;
          font-weight: 600;
        }

        @media (max-width: 1024px) {
          .services-grid {
            grid-template-columns: 1fr 1fr;
          }

          .service.large {
            grid-column: span 2;
            min-height: 400px;
          }
        }

        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
            grid-template-rows: auto;
            gap: 20px;
          }

          .service.large {
            grid-column: span 1;
            min-height: 360px;
          }

          .service:not(.large) {
            min-height: 260px;
          }

          .service:not(.large) .service-content h3 {
            font-size: 1.4rem;
          }

          .service:not(.large) .service-content p {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </main>
  );
} 