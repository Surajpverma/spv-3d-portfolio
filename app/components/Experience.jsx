import { Environment, Float, PresentationControls, ContactShadows, Text } from '@react-three/drei'
import Laptop from './Laptop'
import { motion } from 'framer-motion-3d'

const headContentAnimation = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: {
      type: "spring",
      damping: 6,
      stiffness: 30,
      restDelta: 0.001,
      duration: 0.6,
      delay: 1,
      delayChildren: 0.2,
    },
  };

export default function Experience() {

    const isMobile = window.innerWidth < 768;
    
    return <group rotation-z={ isMobile ? Math.PI / 2 : 0 } rotation-x={ isMobile ? -Math.PI / 6 : 0 } rotation-y={ isMobile ? -Math.PI / 9 : 0 } scale={ isMobile ? 0.65 : 1 } >
        <Environment preset='city' />

        <color args={["#80002F"]} attach="background" />

        <PresentationControls
            global
            rotation={[0.13, 0.1, 0]}
            polar={[-0.4, 0.2]}
            azimuth={[-1, 0.75]}
            config={{
                mass: 2,
                tension: 400
            }}
            snap={{
                mass: 4,
                tension: 400
            }} >
            <Float rotationIntensity={0.5} >
                <rectAreaLight
                    width={2.5}
                    height={1.65}
                    intensity={65}
                    color={"#F09BA7"}
                    rotation={[-0.1, Math.PI, 0]}
                    position={[0, 0.55, -1.15]}
                />

                <Laptop />
                
                <motion.group {...headContentAnimation}>
                <Text
                    font='./bangers-v20-latin-regular.woff'
                    fontSize={1}
                    color={"#FFFFFF"}
                    position={[1.6, 0.65, 0.75]}
                    rotation-y={-1.5}
                    // rotation-x={ isMobile ? Math.PI / 2 : 0 }
                    >
                    SURAJ PAL
                </Text>
                </motion.group>
            </Float>
        </PresentationControls>

        <ContactShadows
            position-y={-1.4}
            opacity={0.4}
            blur={2.4}
            scale={5}
        />
    </group>
}