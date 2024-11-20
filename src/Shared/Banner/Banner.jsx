import hill1 from "../../assets/images/hill1.png";
import hill2 from "../../assets/images/hill2.png";
import hill3 from "../../assets/images/hill3.png";
import hill4 from "../../assets/images/hill4.png";
import hill5 from "../../assets/images/hill5.png";
import leaf from "../../assets/images/leaf.png";
import plant from "../../assets/images/plant.png";
import tree from "../../assets/images/tree.png";
import profile from "../../assets/images/profile.jfif";
import "animate.css";

import { useEffect } from "react";

const Banner = () => {
  useEffect(() => {
    // Select individual elements using unique IDs
    const textHeader = document.getElementById("textHeader");
    const textParagraph = document.getElementById("textParagraph");
    const profileImage = document.getElementById("profile");
    const leaf = document.getElementById("leaf");
    const hill1 = document.getElementById("hill1");
    const hill4 = document.getElementById("hill4");
    const hill5 = document.getElementById("hill5");

    const handleScroll = () => {
      const value = window.scrollY;
      const movementSpeed = 2.5; // Adjust speed as required

      // Apply same movement speed for header and paragraph
      if (textHeader) textHeader.style.transform = `translateY(${value * movementSpeed}px)`;
      if (textParagraph) textParagraph.style.transform = `translateY(${value * movementSpeed}px)`;
      if (profileImage) profileImage.style.transform = `translateY(${value * movementSpeed}px)`;

      // Parallax effects for other elements
      if (leaf) {
        leaf.style.top = value * -1.5 + "px";
        leaf.style.left = value * 1.5 + "px";
      }
      if (hill5) hill5.style.left = value * 1.5 + "px";
      if (hill4) hill4.style.left = value * -1.5 + "px";
      if (hill1) hill1.style.top = value * -1.5 + "px";
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="overflow-hidden">
      <div className="flex justify-center items-center h-[100vh] relative pointer-events-none">
        {/* Background and parallax layers */}
        <img id="hill1" className="absolute w-full" src={hill1} alt="" />
        <img id="hill2" className="absolute w-full" src={hill2} alt="" />
        <img id="hill3" className="absolute w-full" src={hill3} alt="" />
        <img id="hill4" className="absolute w-full" src={hill4} alt="" />
        <img id="hill5" className="absolute w-full" src={hill5} alt="" />
        <img id="tree" className="absolute w-full" src={tree} alt="" />
        <img id="leaf" className="absolute w-full" src={leaf} alt="" />
        <img id="plant" className="absolute w-full z-30" src={plant} alt="" />

        {/* Content container */}
        <div className="absolute flex justify-between items-center gap-10 z-20">
          {/* Text container */}
          <div className="flex flex-col justify-center text-white animate__animated animate__fadeInLeft">
            <h1 id="textHeader" className="text-3xl">
              Hi, I'm <span>Bhavya Bansal</span>
            </h1>
            <p id="textParagraph" className="mt-2">
              Chief Technology Officer | AI Enthusiast | Innovator
            </p>
          </div>

          {/* Profile image */}
          <div className="animate__animated animate__fadeInRight">
            <img
              id="profile"
              className="w-56 h-56 rounded-md"
              src={profile}
              alt="Profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
