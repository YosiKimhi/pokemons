import Particles from "react-particles-js";
import React from "react";

export default function RegularParticles(){

    return (
        <Particles
            style={{position: 'absolute', height: '100%', width: '100%', zIndex: '-1'}}
            params={{
                particles: {
                    line_linked: {
                        color: '#3f51b5',
                        opacity: 1
                    },
                    number: {
                        value: 80,
                        density: {
                            enable:true,
                            value_area:800
                        },
                    },
                    color: {
                        color: '#3f51b5',
                    },
                    move: {
                        speed: 2,
                    },
                },
            }}
        />
    )
}
