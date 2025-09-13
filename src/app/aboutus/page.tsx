import React from 'react';
import Link from 'next/link';

export default function AboutUs() {
  return (
    <div>
      <h1>About Us Page</h1>
      <p>This is the About Us page of the portfolio website.</p>

      {/* New tab me open karega */}
      <a 
        href="/resume/nitin-kumar-resume.pdf" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        👀 View Resume
      </a>

      {/* Yeh bhi chalega, lekin Link static files ke liye recommended nahi hai */}
      <Link href="/resume/nitin-kumar-resume.pdf">helloooo</Link>

      {/* Direct download karega */}
      <a 
        href="/resume/nitin-kumar-resume.pdf" 
        download="Nitin-Kumar-Resume.pdf"
      >
        ⬇️ Download Resume
      </a>
    </div>
  );
}
