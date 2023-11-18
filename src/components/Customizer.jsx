"use client"

import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { useSnapshot } from "valtio"

import config from "@/config/config"
import state from "@/store"
import { downloadCanvasToImage, reader } from "@/config/helpers"
import { EditorTabs, FilterTabs, DecalTypes } from '../config/constants'
import { fadeAnimation, slideAnimation } from "@/config/motion"
import { AIPicker, ColorPicker, CustomButton, FilePicker, Tab } from "./ui"


const Customizer = () => {

    const [file, setFile] = useState('')
    const [prompt, setPrompt] = useState('')
    const [generateImg, setGenerateImg] = useState(false)
    const [activeEditorTab, setActiveEditorTab] = useState('')
    const [activeFilterTab, setActiveFilterTab] = useState({
        logoShirt: true,
        stylishShirt: false
    })

    const snap = useSnapshot(state)

    const generateTabContent = () => {
        switch (activeEditorTab) {
            case "colorpicker":
                return <ColorPicker />
            case "filepicker":
                return <FilePicker
                    file={file}
                    setFile={setFile}
                    readFile={readFile}
                />
            case "aipicker":
                return <AIPicker
                    prompt={prompt}
                    setPrompt={setPrompt}
                    generateImg={generateImg}
                    handleSubmit={handleSubmit}
                />
            default:
                return null
        }
    }

    const handleSubmit = async (type) => {
        if (!prompt) return alert("please enter a prompt")

        // ------for Openai image generation-------- //
        try {
            setGenerateImg(true)
            // const response = await fetch('/api/v1/dalle', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify({ prompt })
            // })

            // const data = await response.json()

            // console.log(data)

            // handleDecals(type, `data:image/png;base64,${data.photo}`)
        } catch (error) {
            alert(error)
        } finally {
            setGenerateImg(false)
            setActiveEditorTab("")
        }
    }

    const handleDecals = (type, result) => {
        const decalType = DecalTypes[type]

        state[decalType.stateProperty] = result

        if (!activeFilterTab[decalType.filterTab]) {
            handleActiveFilterTab(decalType.filterTab)
        }
    }

    const handleActiveFilterTab = (tabName) => {
        switch (tabName) {
            case "logoShirt":
                state.isLogoTexture = !activeFilterTab[tabName]
                break;
            case "stylishShirt":
                state.isFullTexture = !activeFilterTab[tabName]
                break;
            default:
                state.isFullTexture = true
                state.isLogoTexture = false
        }

        setActiveFilterTab((prev) => {
            return {
                ...prev,
                [tabName]: !prev[tabName]
            }
        })
    }

    const readFile = (type) => {
        reader(file).then((result) => {
            handleDecals(type, result)
            setActiveEditorTab("")
        })
    }

    return (
        <AnimatePresence>
            {!snap.intro && (
                <>
                    <motion.div key="custom" className="absolute top-0 left-0 z-10" {...slideAnimation('left')}>
                        <div className="flex items-center min-h-screen">
                            <div className="editortabs-container tabs">
                                {EditorTabs.map((tab) => (
                                    <Tab
                                        key={tab.name}
                                        tab={tab}
                                        isFilterTab
                                        isActiveTab=""
                                        handleClick={() => { setActiveEditorTab(tab.name) }}
                                    />
                                ))}

                                {generateTabContent()}
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="absolute z-10 top-5 right-5" {...fadeAnimation}
                    >
                        <CustomButton
                            type="filled"
                            title="Go Back"
                            handleClick={() => state.intro = true}
                            customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                        />
                    </motion.div>

                    <motion.div
                        className="filtertabs-container"
                        {...slideAnimation('up')}
                    >
                        {FilterTabs.map((tab) => (
                            <Tab
                                key={tab.name}
                                tab={tab}
                                isFilterTab
                                isActiveTab={activeFilterTab[tab.name]}
                                handleClick={() => { handleActiveFilterTab(tab.name) }}
                            />
                        ))}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}

export default Customizer