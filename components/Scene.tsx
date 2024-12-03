'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import { Suspense, useState } from 'react';
import dynamic from 'next/dynamic';
import * as THREE from 'three';
import InteractiveButton from './InteractiveButton';
import { Archivo_Black } from 'next/font/google';
import LvrboyModel from './LvrboyModel';

const archivo = Archivo_Black({
  weight: '400',
  subsets: ['latin'],
});

const VimeoPlayer = dynamic(() => import('./VimeoPlayer'), {
  ssr: false,
  loading: () => null
});

function LoadingFallback() {
  return (
    <Html center>
      <div className="text-white text-xl font-semibold">
        <div className="flex items-center justify-center space-x-2">
          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>Loading model...</span>
        </div>
      </div>
    </Html>
  );
}

export default function Scene() {
  const [showVideo, setShowVideo] = useState(false);
  const [isModelLoading, setIsModelLoading] = useState(true);

  const handleVideoClose = () => {
    setShowVideo(false);
  };

  return (
    <div className="relative w-full h-screen bg-[#ffc0eb]">
      <Canvas
        shadows
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          outputEncoding: THREE.sRGBEncoding,
          powerPreference: "high-performance"
        }}
        dpr={[1, 2]}
      >
        <fog attach="fog" args={['#ffc0eb', 5, 15]} />
        <color attach="background" args={['#ffc0eb']} />
        
        <Suspense fallback={<LoadingFallback />}>
          <ambientLight intensity={1} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          
          <LvrboyModel onLoad={() => setIsModelLoading(false)} />
          
          <OrbitControls
            enablePan={false}
            enableZoom={true}
            minDistance={3}
            maxDistance={7}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 1.5}
            enableDamping={true}
            dampingFactor={0.05}
            rotateSpeed={0.5}
            autoRotate={false}
            enableTouchRotate={true}
            enableTouchZoom={true}
          />
        </Suspense>
      </Canvas>

      <div className="absolute top-6 left-0 right-0 z-10 pointer-events-none px-4">
        <h1 
          className={`
            flex 
            items-center 
            justify-center 
            text-[4rem] 
            md:text-[6rem] 
            lg:text-[8rem] 
            font-black
            tracking-[0.15em] 
            text-white
            text-center 
            uppercase 
            select-none
            [text-shadow:_0_0_40px_rgba(255,255,255,0.6),_4px_4px_2px_rgba(0,0,0,0.25)]
            transition-all
            duration-300
            hover:tracking-[0.2em]
            hover:[text-shadow:_0_0_60px_rgba(255,255,255,0.6),_4px_4px_2px_rgba(0,0,0,0.2)]
            ${archivo.className}
          `}
          style={{
            fontFeatureSettings: '"kern" 1, "liga" 1, "calt" 1',
            fontVariantCaps: 'all-small-caps',
          }}
        >
          <span className="mr-1 md:mr-2 relative">
            LVRB
            <span className="absolute -inset-2 bg-white/10 blur-xl rounded-lg"></span>
          </span>
          <InteractiveButton onClick={() => setShowVideo(true)} />
          <span className="ml-1 md:mr-2 relative">
            Y
            <span className="absolute -inset-2 bg-white/10 blur-xl rounded-lg"></span>
          </span>
        </h1>
      </div>

      {showVideo && (
        <VimeoPlayer
          videoId="1035273314"
          onClose={handleVideoClose}
        />
      )}
      <div className="absolute bottom-4 left-0 right-0 z-10 flex justify-center">
        <p className={`
          text-xs
          md:text-sm
          text-white
          font-light
          tracking-wider
          select-none
          ${archivo.className}
        `}>
          LVRBOY<span className="text-[0.7em] align-super">©</span>
        </p>
      </div>
    </div>
  );
}

