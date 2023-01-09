import React from "react";
import Link from "next/link";

import { FaMoon, FaSun } from "react-icons/fa";
import {
    
    useColorMode,
    IconButton,
  } from "@chakra-ui/react";

const Navbar = () => {
    const { toggleColorMode, colorMode } = useColorMode();
  return (
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"20px"}}>
        <div >
          <Link href={"/"}>Dipali Goswami</Link>
        </div>
        <div>
          <Link href={"/projects"}>Projects</Link>
        </div>
        <div>
          <Link href={"/exp"}>Experience</Link>
        </div>
      </div>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"20px"}}>
        <div>
        <IconButton
                aria-label="toggle theme"
                rounded="full"
                size="md"
                onClick={toggleColorMode}
                icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
              />
        </div>
        <div>
            <img src="https://i.ibb.co/s3RVSRM/IMG-20220619-WA0010.jpg" style={{width:"40px",height:"40px",borderRadius:"50%"}}/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
