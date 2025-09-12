import { motion } from "framer-motion";
import Profile from "../images/Profile.png";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export function Home () {
    return (
        <>
        <div className="grid grid-cols-2 max-w-screen h-screen overflow-hidden">
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
                    <a href="mailto:mnaseef2k02@gmail.com" 
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => { navigator.clipboard.writeText("mnaseef2k02@gmail.com"); alert("Email address copied to clipboard!"); }} 
                        className="rounded-full p-3 hover:bg-gray-300 transition-colors duration-300">
                        <SiGmail size={30}/></a>
                    <a href="http://www.linkedin.com/in/v-s-muhammed-naseef-03b90221b"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full p-3 hover:bg-gray-300 transition-colors duration-300">
                        <FaLinkedin size={30}/></a>
                    <a href="http://www.github.com/mnazfs" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full p-3 hover:bg-gray-300 transition-colors duration-300">
                        <FaGithub size={30}/></a>
                    <a href="https://api.whatsapp.com/send?phone=916238062964" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full p-3 hover:bg-gray-300 transition-colors duration-300">
                        <FaWhatsapp size={30}/></a>
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
            <div className="absolute top-0 bottom-0 left-1/2 w-25 h-screen bg-black transform -skew-x-5 origin-top shadow-xl"/>
        </div>
        <div className="bg-gray-200 grid grid-cols-3">
            <motion.div className="flex items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}>
                <h1 className="font-exo text-4xl p-5">About Me</h1>
            </motion.div>
            <div className="col-span-2">
            <motion.p className="font-montserrat text-lg p-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}>
                Aspiring Software Developer with a strong foundation in computer science principles, programming, and full-stack web development. Proficient in designing and implementing efficient algorithms, solving complex problems, and writing clean, optimized code. Experienced in developing practical projects, including web-based applications, database systems, and IoT/microcontroller-based solutions, which demonstrate both technical expertise and creativity.
            </motion.p>
            <motion.p className="font-montserrat text-lg p-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}>
                Adaptable and quick to learn emerging technologies, with hands-on knowledge in the MERN stack, Python, C, Java, and microcontroller programming. Skilled at collaborating in interdisciplinary teams, managing project workflows, and delivering solutions under deadlines. Passionate about leveraging technology to create impactful applications that improve efficiency, accessibility, and user experience.
            </motion.p>
            </div>
        </div>
        </>
    );
}