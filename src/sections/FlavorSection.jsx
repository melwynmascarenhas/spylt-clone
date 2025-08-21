import FlavorTitle from "../components/FlavorTitle";
import FlavorSlider from "../components/FlavorSlider";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const FlavorSection = () => {
  const sliderRef = useRef();

  const isTablet = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  useGSAP(() => {
    if (!isTablet) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".flavor-section",
          start: "2% top",
          end: `+=${sliderRef.current.scrollWidth}px`,
          scrub: true,
          pin: true,
        },
      });

      tl.to(".flavor-section", {
        x: (sliderRef.current.scrollWidth - window.innerWidth / 2) * -1,
        ease: "power1.inOut",
      });
    }

    const titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top top",
        end: "bottom 80%",
        scrub: true,
      },
    });

    titleTl
      .to(".first-text-split", {
        xPercent: -30,
        ease: "power1.inOut",
      })
      .to(
        ".flavor-text-scroll",
        {
          xPercent: -22,
          ease: "power1.inOut",
        },
        "<"
      )
      .to(
        ".second-text-split",
        {
          xPercent: -10,
          ease: "power1.inOut",
        },
        "<"
      );
  });

  return (
    <section className="flavor-section">
      <div
        ref={sliderRef}
        className="h-full flex lg:flex-row flex-col items-center relative"
      >
        <div className="lg:w-[57%] flex-none h-80 lg:h-full md:mt-20 xl:mt-0">
          <FlavorTitle />
        </div>
        <div className="h-full">
          <FlavorSlider />
        </div>
      </div>
    </section>
  );
};

export default FlavorSection;
