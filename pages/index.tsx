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
    return 
        <div>
            <Particles options={particlesOptions as ISourceOptions} init={particlesInit}/>
            <div>
                <h1>
                    Hello
                </h1>
            </div>
        </div>  

}

export default HomePage

