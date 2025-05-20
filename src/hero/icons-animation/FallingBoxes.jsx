import { motion } from "framer-motion";
import { useEffect, useState } from "react";
const boxes = [
  { y: 0, x: 50, mobileX: 50 , mobileY: 0,rotate: 360, delay: 0.2 , img: './images/icons-techs/git.svg'},    // Caja 2: gira
  { y: -200, x: 0, mobileX: 0 , mobileY: -200,scale: 1.5, delay: 0.4 , img: './images/icons-techs/react.svg'},     // Caja 3: crece
  { y: -80, x: 0, mobileX: -20, mobileY: -80, opacity: 0.5, delay: 0.6 ,  img: './images/icons-techs/typescript.svg'},
  { y: -120, x: 0, mobileX: 6, mobileY: -120,opacity: 0.5, delay: 0.6 , img: './images/icons-techs/tailwindcss.svg'}   ,
  { y: -10, x: -40, mobileX:-100 , mobileY: -10,opacity: 0.5, delay: 0.6 , img: './images/icons-techs/firebase.svg'}  ,
  { y: -100, x: -100, mobileX: -200, mobileY: -210,opacity: 0.5, delay: 0.6 , img: './images/icons-techs/javascript.svg'}   // Caja 4: baja más y semi-transparente
];

export default function FallingBoxes() {

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {

    const handleResize = () => {
      setWidth(window.innerWidth);

    };

    window.addEventListener('resize', handleResize);
    
    // Limpieza
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 
  return (
    <div className="flex gap-0 sm:gap-4 justify-center items-center mt-[250px] sm:w-[60%] z-10">
      {boxes.map((anim, i) => (
        <motion.div
          key={i}
          initial={{ y: -200, opacity: 0 }}
          animate={{
            y: width > 640 ? anim.y : anim.mobileY,
            // x: anim.x,
            x: width > 640 ? anim.x : anim.mobileX,
            opacity: anim.opacity ?? 1,
            rotate: anim.rotate ?? 0,
            scale: anim.scale ?? 1
          }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 10,
            delay: anim.delay
          }}
          >
            <div className="w-20 h-20 bg-blue-500 rounded-md p-2">
              <img className="object-cover" src={anim.img} alt="" />
            </div>
          </motion.div>

      ))}
    </div>
  );
}
