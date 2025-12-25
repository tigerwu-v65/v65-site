import React from "react";




export default function FrameByFrame() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {/* FRAME-by-FRAME page content */}
        <div className="portfolio-wrapper">
            <h1 className="portfolio-text">PORTFOLIO</h1>
            <div className="top-wrapper">
                <div className="wrapper1">
                    <img
                        src="/pictures/WechatIMG6245.jpg"
                        alt=""
                        className="portfolio-image1"
                    />
                    <div className="outline-light-chaser"/>
                </div>
                
                <div className="wrapper2">
                    <img
                        src="/pictures/WechatIMG7324.png"
                        alt=""
                        className="portfolio-image2"
                    />
                    <div className="outline-light-chaser"/>
                </div>
                
            </div>
            <div className="bottom-wrapper">
                <p className="portfolio-subtitle">Our Picks From 2025.</p>
            </div>
        </div>
    </div>
  );
}
