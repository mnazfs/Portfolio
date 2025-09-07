import { motion } from "framer-motion";
import Profile from "../images/profile.png";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export function Home () {
    return (
        <div className="grid grid-cols-2 w-screen h-screen overflow-hidden">
            <div className="bg-gray-200 p-4 flex items-center justify-center text-shadow-white">
            <div className="justify-center grid grid-rows-4 align-start gap-5">
                <motion.p className="font-montserrat text-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}>
                    Hi, I am
                </motion.p>
                <motion.p  className="font-exo font-bold text-6xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}>
                    Muhammed Naseef
                </motion.p>
                <motion.p className="text-3xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}>
                    Computer Engineer | Fullstack Developer
                </motion.p>
                <motion.div className="flex gap-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}>
                    <a href="mailto:mnaseef2k02@gmail.com"><SiGmail size={30}/></a>
                    <a href="http://www.linkedin.com/in/v-s-muhammed-naseef-03b90221b"><FaLinkedin size={30}/></a>
                    <a href="http://www.github.com/mnazfs"><FaGithub size={30}/></a>
                    <a href="https://api.whatsapp.com/send?phone=916238062964"><FaWhatsapp size={30}/></a>
                </motion.div>
                </div>
                
            </div>
            <div className="bg-black p-4">
                <motion.div className="flex justify-center"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5 }}>
                    <img src={ Profile } alt="Profile picture"></img>
                </motion.div>
            </div>
            <div className="absolute top-0 bottom-0 left-1/2 w-20 bg-black transform -skew-x-5 origin-top shadow-xl"/>
        </div>
    );
}