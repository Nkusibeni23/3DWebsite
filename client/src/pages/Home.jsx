import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";

import state from "../store";
import { CustomButton } from "../components";
import {
  headContentAnimation,
  headContainerAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";

export default function Home() {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className=" px-6" {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            <img
              src="./threejs.png"
              alt="ThreeJS Logo"
              className="w-8 h-8 object-contain"
            />
          </motion.header>
          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className=" text-5xl font-extrabold mb-5">
                LET&apos;S <br className="xl:block hidden" /> DO IT.
              </h1>
            </motion.div>
            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-5"
            >
              <p className="max-w-md font-normal text-gray-600 text-base">
                Create your unique and exclusive shirt with our brand-new
                customization tool. <strong>Unleash your imagination.</strong>{" "}
                and define your own style.
              </p>
              <CustomButton
                type="filled"
                title="Customize It"
                handleClick={() => (state.intro = false)}
                CustomStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
