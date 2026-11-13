"use client";

import { useRef, useState } from 'react';

export default function Music() {
    const [open, setOpen] = useState(false)
    const [playing, setPlaying] = useState(false)
    const audioRef = useRef<HTMLAudioElement>(null)

    return (
        <>
            {/* custom music controls */}
            <div className='flex flex-wrap justify-center items-center gap-3 xl:gap-8 mb-7'>
                <button className='font-bold text-sm border-2 border-white hover:bg-white hover:text-black duration-800 px-4 py-2' onClick={() => { if (audioRef.current) {audioRef.current.currentTime = 0; audioRef.current.play()} }}>↻ RESTART</button>
                <button className='font-bold text-sm border-2 border-white hover:bg-white hover:text-black duration-800 px-4 py-2' onClick={() => audioRef.current?.play()}>▶ PLAY</button>
                <button className='font-bold text-sm border-2 border-white hover:bg-white hover:text-black duration-800 px-4 py-2' onClick={() => audioRef.current?.pause()}>Ⅱ PAUSE</button>
            </div>

            {/* popup */}
            <div className={`fixed bottom-13 right-6 z-50 w-[min(240px,calc(100vw-2.5rem))] border border-white/75 bg-black p-2 transition-all duration-800 ease-in-out ${open ? 'visible pointer-events-auto opacity-100 translate-y-0' : 'invisible pointer-events-none opacity-0 translate-y-2'}`}>
                <p className="font-mono text-sm"> Paparazzi (Dubstep) - Slowed </p>
                <audio ref={audioRef} controls src="/music/paparazzi_dubstep_slowed.mp3" hidden/>
            </div>

            {/* button */}
            <button onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} className='fixed bottom-6 right-6 z-50 cursor-pointer shadow-[0_0_5px_2px_rgba(255,255,255,0.15)] bg-black border border-white text-xl w-12 h-12' onClick={() => { if (playing) { audioRef.current?.pause(); setPlaying(false) } else { audioRef.current?.play(); setPlaying(true) } } }>♫</button>
            
        </>
    );
}