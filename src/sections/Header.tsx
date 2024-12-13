'use client'

import React, { useState, useEffect } from "react";

export const Header = () => {
  const [activeSection, setActiveSection] = useState("Hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id], div[id]');
      let currentSection = activeSection;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= 0) {
          currentSection = section.id;
        }
      });

      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border 
      border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a href='#Hero' className={`nav-item ${activeSection === 'Hero' ? 'active' : ''}`}>Home</a>
        <a href='#Projects' className={`nav-item ${activeSection === 'Projects' ? 'active' : ''}`}>Projects</a>
        <a href='#About' className={`nav-item ${activeSection === 'About' ? 'active' : ''}`}>About</a>
        <a href='#Contact' className={`nav-item ${activeSection === 'Contact' ? 'active' : ''}`}>Contact</a>
      </nav>
    </div>
  );
};