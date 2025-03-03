'use client'

import { Canvas } from '@react-three/fiber';
import React from 'react';
import Model from './Model';

interface ModelProps {
    activeMenu: number | null;
}

export default function Base({ activeMenu }: ModelProps) {
    return (
        <div className='fixed top-0 left-0 h-screen w-full'>
            {/* Canvasは固定表示で、トップに表示するために調整 */}
            <Canvas>
                <Model activeMenu={activeMenu} />
            </Canvas>
        </div>
    );
}
