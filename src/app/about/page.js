'use client';

import { useState } from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import Image from 'next/image';

const CopyEmailButton = ({ email, copiedTarget, onCopyEmail, targetId }) => (
  <button
    onClick={() => onCopyEmail(email, targetId)}
    className="text-slate-400 hover:text-primary transition-colors cursor-pointer bg-none border-none p-0 relative group"
    title="Click to copy email"
  >
    <span className="material-symbols-outlined">mail</span>
    {copiedTarget === targetId && (
      <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-xs rounded whitespace-nowrap shadow-lg">
        Email copied!
      </span>
    )}
  </button>
);

export default function AboutPage() {
  const [copiedTarget, setCopiedTarget] = useState(null);
  const contactEmail = 'jsoham672@gmail.com';

  const handleCopyEmail = (email, targetId) => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setCopiedTarget(targetId);
        setTimeout(() => setCopiedTarget(null), 2000);
      })
      .catch(() => {
        alert('Failed to copy email');
      });
  };
  const devenInfo = {
    name: 'Deven Nikam',
    designation: 'LEAD MECHANICAL R&D DESIGN ENGINEER',
    description:
      'A Mechanical Engineer with a Master’s degree in Design Engineering, Deven leads research and development initiatives within the automobile industry, driving products from concept to on-road deployment. With a strong foundation in engineering fundamentals and system-level thinking',
    image: '/deven_image.jpg',
    linkedin:
      'https://www.linkedin.com/in/deven-nikam-722a05210?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    mail: 'devennikam018@gmail.com',
  };

  const sohamInfo = {
    name: 'Soham Jagtap',
    designation: 'LEAD SOFTWARE ARCHITECHT',
    description:
      'A software engineer skilled at solving complex problems and designing scalable, sustainable solutions that stand the test of time. I specialize in building systems that are efficient, maintainable, and aligned with real-world needs. With a strong focus on clean architecture and thoughtful design, I aim to create technology that delivers long-term value. ',
    image: '/soham_image.png',
    linkedin: 'https://www.linkedin.com/in/soham-jagtap-5781b52a0/',
    mail: 'jsoham672@gmail.com',
    github: 'https://github.com/GitSoham02',
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 selection:bg-primary/20">
      <NavBar
        variant="horizontal"
        icon="build"
        brandName="Bolt"
        brandHighlight="Calculator"
      />

      <section className="relative pt-40 pb-24 overflow-hidden border-b border-border-light dark:border-border-dark">
        <div className="absolute inset-0 blueprint-bg -z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-light/50 to-background-light dark:via-background-dark/50 dark:to-background-dark -z-10"></div>
        <div className="max-w-4xl mx-auto px-6 text-center reveal active">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-8">
            Mission Critical Excellence
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight mb-8">
            About Bolt Calculator
          </h1>
          <div className="space-y-12 text-left bg-surface-light dark:bg-surface-dark/50 p-8 md:p-12 rounded-3xl border border-border-light dark:border-border-dark shadow-2xl backdrop-blur-sm">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">psychology</span>
              </div>
              <div>
                <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
                  <strong className="text-slate-900 dark:text-white font-bold">
                    Bolt Calculator
                  </strong>{' '}
                  is a smart engineering platform built to take the guesswork
                  out of bolt selection. Developed by{' '}
                  <strong className="text-primary">DVN Research Group</strong>,
                  the platform uses intelligent algorithms to determine the most
                  suitable bolt for a given application based on inputs such as
                  load, operating conditions, and design constraints.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-500">
                <span className="material-symbols-outlined">verified</span>
              </div>
              <div>
                <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
                  By translating complex mechanical design logic into a simple,
                  intuitive interface, Bolt Calculator enables engineers to make
                  faster, more reliable decisions without relying on manual
                  calculations or static reference tables. The system evaluates
                  strength, safety margins, and standard compliance to deliver
                  results you can trust.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-500">
                <span className="material-symbols-outlined">speed</span>
              </div>
              <div>
                <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
                  Designed for modern engineering workflows, Bolt Calculator
                  supports efficient, data-driven design across industries
                  including automotive, manufacturing, and heavy engineering.
                  Our mission is to build practical digital tools that enhance
                  engineering accuracy, speed, and confidence—right from the
                  browser.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50 dark:bg-slate-900/30" id="creators">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal active">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
              Meet the Creators
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
              The engineering and development minds behind the industry&apos;s
              most trusted bolt analysis tool.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="reveal active group">
              <div className="bg-surface-light dark:bg-surface-dark p-8 rounded-3xl border border-border-light dark:border-border-dark shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-8 -mt-8 group-hover:bg-primary/10 transition-colors"></div>
                <div className="flex flex-col items-center text-center space-y-6">
                  <div className="relative">
                    <div className="w-32 h-32 rounded-2xl bg-slate-200 dark:bg-slate-800 flex items-center justify-center overflow-hidden border-2 border-primary/20">
                      <Image
                        src={devenInfo.image}
                        alt="image"
                        width={150}
                        height={150}
                      ></Image>
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-primary text-white p-1.5 rounded-lg shadow-lg">
                      <span className="material-symbols-outlined text-sm">
                        engineering
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                      {devenInfo.name}
                    </h3>
                    <p className="text-primary font-semibold text-sm uppercase tracking-wider mt-1">
                      {devenInfo.designation}
                    </p>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                    {devenInfo.description}
                  </p>
                  <div className="flex gap-4 pt-2">
                    <a
                      className="text-slate-400 hover:text-primary transition-colors"
                      href={devenInfo.linkedin}
                      title="Linkedin"
                    >
                      <span className="material-symbols-outlined">person</span>
                    </a>
                    <CopyEmailButton
                      email={devenInfo.mail}
                      copiedTarget={copiedTarget}
                      onCopyEmail={handleCopyEmail}
                      targetId="deven"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="reveal active group stagger-delay-1">
              <div className="bg-surface-light dark:bg-surface-dark p-8 rounded-3xl border border-border-light dark:border-border-dark shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-8 -mt-8 group-hover:bg-primary/10 transition-colors"></div>
                <div className="flex flex-col items-center text-center space-y-6">
                  <div className="relative">
                    <div className="w-32 h-32 rounded-2xl bg-slate-200 dark:bg-slate-800 flex items-center justify-center overflow-hidden border-2 border-primary/20">
                      {/* <span className="material-symbols-outlined text-5xl text-slate-400 dark:text-slate-600">
                        person
                      </span> */}
                      <Image
                        src={sohamInfo.image}
                        alt="image"
                        width={150}
                        height={150}
                      ></Image>
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-primary text-white p-1.5 rounded-lg shadow-lg">
                      <span className="material-symbols-outlined text-sm">
                        code
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                      {sohamInfo.name}
                    </h3>
                    <p className="text-primary font-semibold text-sm uppercase tracking-wider mt-1">
                      {sohamInfo.designation}
                    </p>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                    {sohamInfo.description}
                  </p>
                  <div className="flex gap-4 pt-2">
                    <a
                      className="text-slate-400 hover:text-primary transition-colors"
                      href={sohamInfo.linkedin}
                      title="Linkedin"
                    >
                      <span className="material-symbols-outlined">person</span>
                    </a>
                    <a
                      className="text-slate-400 hover:text-primary transition-colors"
                      href={sohamInfo.github}
                      title="Github"
                    >
                      <span className="material-symbols-outlined">code</span>
                    </a>
                    <CopyEmailButton
                      email={sohamInfo.mail}
                      copiedTarget={copiedTarget}
                      onCopyEmail={handleCopyEmail}
                      targetId="soham"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 engineering-grid -z-10"></div>
        <div className="max-w-4xl mx-auto px-6 text-center reveal active">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
            Have questions or custom requirements?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg mb-10 max-w-xl mx-auto">
            Our team of engineers and developers is ready to help you integrate
            Bolt Calculator into your enterprise workflow.
          </p>
          <button
            onClick={() => handleCopyEmail(contactEmail, 'contact')}
            className="px-10 py-4 bg-primary text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-xl shadow-primary/25 flex items-center justify-center gap-3 mx-auto group hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] relative"
          >
            Get In Touch
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
              mail
            </span>
            {copiedTarget === 'contact' && (
              <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-xs rounded whitespace-nowrap shadow-lg">
                Email copied!
              </span>
            )}
          </button>
        </div>
      </section>

      <Footer
        icon="hardware"
        brandName="Bolt"
        brandHighlight="Calculator"
        tagline="The industrial standard for precision bolt load verification. Providing engineers with mission-critical data since 2012."
      />
    </div>
  );
}
