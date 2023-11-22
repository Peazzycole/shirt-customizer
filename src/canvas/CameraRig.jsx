"use client"

import React, { PropsWithChildren, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'
import { useSnapshot } from 'valtio'
import state from '@/store'

const CameraRig = ({ children }) => {

    const group = useRef()
    const snap = useSnapshot(state)

    useFrame((state, delta) => {
        const isBreakPoint = window.innerWidth <= 1260
        const isMobile = window.innerWidth >= 360 && window.innerWidth <= 600
        const isSmallMobile = window.innerWidth <= 360
        const isTablet = window.innerWidth >= 610 && window.innerWidth <= 1259

        let targetPosition = [-0.4, 0, 2]
        if (snap.intro) {
            if (isBreakPoint) targetPosition = [0, 0, 2]
            if (isTablet) targetPosition = [0, 0.15, 2.7]
            if (isMobile) targetPosition = [0, 0.2, 3]
            if (isSmallMobile) targetPosition = [0, 0.5, 4]

        } else {
            if (isMobile) targetPosition = [0, 0, 3]
            else targetPosition = [0, 0, 2]
        }

        // set model camera position
        easing.damp3(state.camera.position, targetPosition, 0.25, delta)

        // set the model rotation
        easing.dampE(
            group.current.rotation,
            [state.pointer.y / 10, -state.pointer.x / 5, 0],
            0.25,
            delta
        )
    })


    return (
        <group ref={group}>
            {children}
        </group>
    )
}

export default CameraRig