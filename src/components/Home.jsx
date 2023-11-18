"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useSnapshot } from "valtio"
import state from "@/store"

import { headContainerAnimation, headContentAnimation, headTextAnimation, slideAnimation } from "@/config/motion"
import Image from "next/image"
import { CustomButton } from "./ui"

// ffff
const Home = () => {

    const snap = useSnapshot(state)

    return (
        <AnimatePresence>
            {snap.intro && (
                <motion.div className="home" {...slideAnimation('left')}>
                    <motion.header {...slideAnimation("down")}>
                        <Image
                            src="/threejs.png"
                            alt=""
                            width={329}
                            height={338}
                            className="w-8 h-8 object-contain"
                            priority
                        />
                    </motion.header>

                    <motion.div className="home-content" {...headContainerAnimation}>
                        <motion.div {...headTextAnimation}>
                            <h1 className="head-text">
                                LETS&apos;S <br className="xl:block hidden" /> DO IT
                            </h1>
                        </motion.div>
                        <motion.div className="flex flex-col gap-5" {...headContentAnimation}>
                            <p className="max-w-md font-normal text-gray-600 text-base">
                                Create your Unique and exclusive shurt with our brand-new 3D customization tool <strong>Unleash your imagination</strong> and define your own style
                            </p>

                            <CustomButton
                                type="filled"
                                title="Customize It"
                                handleClick={() => state.intro = false}
                                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Home