import { useEffect } from "react";
import "../assets/slide/slideshow.css";
import "../assets/style/style.unified.css";
import "../assets/mv/gm_css.css";
import "../assets/scrollin/fadein.css";

export default function Home() {
  useEffect(() => {
    const loadScript = (src) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = false;
      document.body.appendChild(script);
    };

    loadScript("/js/include-common.js");
    loadScript("/js/slideshow.js");
    loadScript("/js/slide-init.js");

    return () => {
      // Cleanup if necessary
    };
  }, []);

  return (
    <div className="container">
      {/* Header */}
      <div id="header-include"></div>

      {/* Main Visual Section */}
      <section className="main-visual">
        <div className="slideshow-container">
          <div className="slideshow fade">
            <img src={require("../assets/img/slide/slide1.jpg")} alt="Slide 1" />
          </div>
          <div className="slideshow fade">
            <img src={require("../assets/img/slide/slide2.jpg")} alt="Slide 2" />
          </div>
          <div className="slideshow fade">
            <img src={require("../assets/img/slide/slide3.jpg")} alt="Slide 3" />
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="intro">
        <h2>うどんの駅へようこそ</h2>
        <p>ここに簡単な紹介文が入ります。素材へのこだわり、製法など。</p>
      </section>

      {/* Footer */}
      <div id="footer-include"></div>

      {/* Bottom Navigation */}
      <div id="bottom-nav-include"></div>
    </div>
  );
}
