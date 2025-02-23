'use client'

import { Canvas } from '@react-three/fiber'
import React from 'react'
import Model from './Model'


interface ModelProps {
    activeMenu: number | null
}


export default function Base({ activeMenu }: ModelProps) {
    return (
        <div className='fixed top-0 h-screen w-full'>
            <Canvas>
                <Model activeMenu={activeMenu} />
            </Canvas>
        </div>
    )
}