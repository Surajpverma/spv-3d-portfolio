/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

"use client"

import React, { useRef } from "react";
import { useGLTF, Html } from "@react-three/drei";
import { motion } from "framer-motion-3d";

const headContentAnimation = {
  initial: { scale: 0, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: {
    type: "spring",
    damping: 6,
    stiffness: 50,
    restDelta: 0.001,
    duration: 0.5,
    delay: 1,
    delayChildren: 0.2,
  },
};

export default function Laptop(props) {
  const { nodes, materials } = useGLTF("/model.gltf");

  return (
    <motion.group {...props} dispose={null} {...headContentAnimation}>
      <Html
        transform
        wrapperClass="htmlScreen"
        distanceFactor={1}
        position={[0, 0.23, -1.4]}
        rotation-x={-0.256}
      >
        <iframe src="https://spv-comic.vercel.app/" />
      </Html>
      <group position-y={-0.8} scale={0.103}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001.geometry}
          material={materials["Frame.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_1.geometry}
          material={materials["Frame.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_2.geometry}
          material={materials.HeadPhoneHole}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_3.geometry}
          material={materials.USB_C_INSIDE}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_4.geometry}
          material={materials["Frame.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_5.geometry}
          material={materials.TouchbarBorder}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_6.geometry}
          material={materials.Keyboard}
        />
        <group position={[0, -0.509, 0]} scale={5.796}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle006.geometry}
            material={materials["Frame.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle006_1.geometry}
            material={materials.USB_C_INSIDE}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.FrontCameraRing001.geometry}
          material={materials["CameraRIngBlack.002"]}
          position={[-0.155, 19.571, -16.151]}
          scale={5.796}
        />
        <group position={[-11.786, -0.15, -8.301]} scale={5.796}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle.geometry}
            material={materials["Keyboard.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle_1.geometry}
            material={materials.Key}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle_2.geometry}
            material={materials.Touchbar}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.KeyboardKeyHole.geometry}
          material={materials["Keyboard.001"]}
          position={[-11.786, -0.152, -8.301]}
          scale={5.796}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.RubberFoot.geometry}
          material={materials.DarkRubber}
          position={[-11.951, -0.751, 7.857]}
          scale={5.796}
        />
        <group position={[0.011, -0.211, -10.559]} scale={5.796}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle012.geometry}
            material={materials.HingeBlack}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle012_1.geometry}
            material={materials.HingeMetal}
          />
        </group>
        <group position={[-15.026, 0.031, 0.604]} scale={5.796}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle009.geometry}
            material={materials["Frame.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle009_1.geometry}
            material={materials.SpeakerHole}
          />
        </group>
        <group position={[12.204, 0.031, 0.604]} scale={5.796}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle003.geometry}
            material={materials["Frame.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle003_1.geometry}
            material={materials.SpeakerHole}
          />
        </group>
        <group
          position={[0.007, -0.472, -10.412]}
          rotation={[1.311, 0, 0]}
          scale={5.796}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle002.geometry}
            material={materials["Frame.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle002_1.geometry}
            material={materials.Screen}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle002_2.geometry}
            material={materials.ScreenGlass}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle002_3.geometry}
            material={materials.Rubber}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle002_4.geometry}
            material={materials.DisplayGlass}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.AppleLogo000.geometry}
            material={materials["AppleLogo.004"]}
            position={[0.005, -0.111, -1.795]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={0.579}
          />
        </group>
      </group>
    </motion.group>
  );
}

useGLTF.preload("/model.gltf");
