import React from "react";
import { useState, useRef } from "react";

export default function HeroSection() {
  const [isMuted, setIsMuted] = useState(true);
  const videoref = useRef(null);

  const toggleMute = () => {
    if(videoref.current){
      videoref.current.muted = !videoref.current.muted;
      setIsMuted(videoref.current.muted);
    }
  };

  return (
    <section className="hero-section">
      <video
        ref={videoref}
        autoPlay
        loop
        muted
        playsInline
        className="hero-video"
        style={{
          opacity: isMuted ? 0.7 : 1,
          transition: 'opacity 0.8s ease',
        }}
      >
        <source src="/videos/demo-reel.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hero-overlay" 
            style={{
              opacity: isMuted ? 0.7 : 1,
              transition: 'opacity 0.8s ease',
            }}
      />

      <button 
        className="mute-button"
        onClick={toggleMute}
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M11 5L6 9H2v6h4l5 4V5z"/>
            <line x1="23" y1="9" x2="17" y2="15"/>
            <line x1="17" y1="9" x2="23" y2="15"/>
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M11 5L6 9H2v6h4l5 4V5z"/>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>
          </svg>
        )}
      </button>

      <div 
        className="hero-content"
        style={{ 
          opacity: isMuted ? 1 : 0,
          transition: 'opacity 0.8s ease',
        }}
      >
      <h1 className="hero-title">
        V65 STUDIO
      </h1>
      <div className="hero-year">2026</div>
      <p className="hero-tagline">
      Coming Soon.
      </p>
      </div>
      </section>
  );
}

