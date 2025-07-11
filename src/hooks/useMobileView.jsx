// custom hook to check current screen width
import { useState, useEffect } from "react";


export function useMobileView(treshold = 768) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < treshold);

  useEffect(() => {
    // function to change isMobile boolean value based on treshold
    const handleResize = () => setIsMobile(window.innerWidth < treshold);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [treshold]);

  // returns boolean value;
  return isMobile;
}