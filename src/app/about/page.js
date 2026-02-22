'use client';

import { useState } from 'react';
import ContactSection from '../components/about/ContactSection';
import CreatorsSection from '../components/about/CreatorsSection';
import WebsiteInfoSection from '../components/about/WebsiteInfoSection';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

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
    designation: 'LEAD SOFTWARE ENGINEER',
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
      <WebsiteInfoSection />

      <CreatorsSection
        devenInfo={devenInfo}
        sohamInfo={sohamInfo}
        copiedTarget={copiedTarget}
        onCopyEmail={handleCopyEmail}
      />

      <ContactSection
        contactEmail={contactEmail}
        copiedTarget={copiedTarget}
        onCopyEmail={handleCopyEmail}
      />

      <Footer
        icon="hardware"
        brandName="Bolt"
        brandHighlight="Calculator"
        tagline="The industrial standard for precision bolt load verification. Providing engineers with mission-critical data since 2012."
      />
    </div>
  );
}
