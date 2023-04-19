import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className="w-8 h-8">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#FFD700">
              <path d="M10 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L10 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L2.818 6.374a.75.75 0 01.416-1.28l4.21-.611L9.327.668A.75.75 0 0110 .25z" />
            </svg>
          </div>
          <div className='w-1 sm:h-80 h-40 yellow-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#FFD700]'>Sing</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop OpenAI powered React Web applications,<br className='sm:block hidden' />
            perform data analysis and know AWS!
          </p>
          <br></br>
          <p className={`${styles.heroCommentText} mt-2 text-white-100`}>Rotate me👇</p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
