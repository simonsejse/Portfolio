import React, { useCallback } from 'react'


import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import particlesOptions from "../particles.json";
import { ISourceOptions } from "tsparticles-engine";


function HomePage() {
    // this customizes the component tsParticles installation
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    const options = {
        /* custom options */
    };
    return (
        <>
            <main className="flex flex-col">
                <SectionOne />
                <SectionTwo />
            </main>
        </>
    )
}


function SectionOne() {
    // this customizes the component tsParticles installation
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    const options = {
        /* custom options */
    };
    return (
        <>
            <Particles options={particlesOptions as ISourceOptions} init={particlesInit} />
            <section className="h-screen flex justify-around items-center">
                <h1 className="text-white text-4xl font-sans">Simon</h1>
                <h1 className="text-white text-4xl font-sans">Hjalte</h1>
            </section>
        </>
    )
}

const SectionTwo = () => {
    return (
        <section className="bg-red-500 h-[100vh]">
            <h1>das</h1>
        </section>
    )
};


export default HomePage

