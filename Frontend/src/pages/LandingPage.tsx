import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Image } from "primereact/image";
import { Button } from "primereact/button";
import logo from "assets/logo.png";
import styles from "pages/LandingPage.module.css";

const LandingPage = () => {
  const ref = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.defaults({ ease: "none", duration: 2 });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });
    tl.fromTo(
      "#logo",
      { opacity: 1, yPercent: 0 },
      { opacity: 0, yPercent: -100 }
    )
      .from("#section1", { opacity: 0, xPercent: -100 })
      .from("#section2", { opacity: 0, xPercent: 100 })
      .from("#section3", { opacity: 0, yPercent: -100 });
  }, []);

  return (
    <div className={styles.container}>
      <div ref={ref} className={styles.section}>
        <div id="logo" className={styles.logowrapper}>
          <Image src={logo} />
          <p>Meme</p>
          <Button> 카카오 로그인</Button>
        </div>
        <section id="section1" className={styles.section1}>
          <h2>Title 1</h2>
        </section>
        <section id="section2" className={styles.section2}>
          <h2>Title 2</h2>
        </section>
        <section id="section3" className={styles.section3}>
          <h2>Title 3</h2>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;
