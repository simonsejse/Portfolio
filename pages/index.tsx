import React, { useCallback }from 'react'


import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import particlesOptions from "../particles.json";
import { ISourceOptions } from "tsparticles-engine";


function HomePage  (){
    // this customizes the component tsParticles installation
   const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    const options = {
      /* custom options */
    };
    return (
            <>
                <main className="flex">
                    <SectionOne/>>
                </main>
            </>
    )
}

const SectionOne = 


export default HomePage

