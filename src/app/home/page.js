'use client';
import { useEffect } from 'react';
import Footer from '../components/Footer';
import FeaturesSection from '../components/home/FeaturesSection';
import HeroSection from '../components/home/HeroSection';
import LiveAnalysisSection from '../components/home/LiveAnalysisSection';
import NavBar from '../components/NavBar';

export default function HomePage() {
  // Declare animateCounters before useEffect hooks so it can be used
  function animateCounters() {
    const counters = document.querySelectorAll('.counter-animate');
    counters.forEach((counter) => {
      if (counter.classList.contains('animated')) return;
      counter.classList.add('animated');
      const target = +counter.getAttribute('data-target');
      const duration = 2000;
      const stepTime = 20;
      const steps = duration / stepTime;
      const increment = target / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          counter.innerText = target.toLocaleString();
          clearInterval(timer);
        } else {
          counter.innerText = Math.floor(current).toLocaleString();
        }
      }, stepTime);
    });
  }

  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          if (entry.target.id === 'analysis-section') {
            animateCounters();
          }
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    const analysisSection = document.getElementById('analysis-section');
    if (analysisSection) observer.observe(analysisSection);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Parallax effect
    const handleMouseMove = (e) => {
      const container = document.querySelector('.parallax-container');
      if (!container) return;
      const xAxis = (window.innerWidth / 2 - e.pageX) / 40;
      const yAxis = (window.innerHeight / 2 - e.pageY) / 40;
      container.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 selection:bg-primary/20 scrollbar-hide">
        <NavBar
          variant="horizontal"
          icon="build"
          brandName="Bolt"
          brandHighlight="Calculator"
        />
        <HeroSection />
        <FeaturesSection />
        <LiveAnalysisSection />
      </div>
      <Footer showSocialLinks={true} />
    </>
  );
}
