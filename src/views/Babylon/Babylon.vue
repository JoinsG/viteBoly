<template>
  <canvas id="Babylon"></canvas>
</template>

<script lang='ts'>
import { defineComponent, onMounted } from 'vue'
import * as BABYLON from 'babylonjs'
import { localAxes } from './js/Axis'
export default defineComponent({
  name: 'Babylon',
  setup: () => {
    let canvas: any, engine: any, scene: BABYLON.Scene, camera: BABYLON.Camera
    onMounted(() => {
      // Get the canvas DOM element
      canvas = document.getElementById('Babylon')
      // Load the 3D engine
      engine = new BABYLON.Engine(canvas, true, {
        preserveDrawingBuffer: true,
        stencil: true,
      })
      createScene()
      // CreateScene function that creates and return the scene

      // run the render loop
      engine.runRenderLoop(function () {
        scene.render()
      })
      // the canvas/window resize event handler
      window.addEventListener('resize', function () {
        engine.resize()
      })
    })
    const createScene = () => {
      scene = new BABYLON.Scene(engine)
      scene.gravity = new BABYLON.Vector3(0, -0.15, 0)
      camera = new BABYLON.ArcRotateCamera(
        'camera',
        -Math.PI / 2,
        Math.PI / 2.5,
        3,
        new BABYLON.Vector3(0, 0, 0),
        scene
      )
      camera.attachControl(canvas, true)
      const light = new BABYLON.HemisphericLight(
        'light',
        new BABYLON.Vector3(0, 1, 0),
        scene
      )
      const box = BABYLON.MeshBuilder.CreateBox('box', { size: 4 }, scene)
      box.position = new BABYLON.Vector3(2, 2, 2)
      //   box.position.addInPlace(new BABYLON.Vector3(-2, -2, -2))
      //   box.translate(new BABYLON.Vector3(2,2,2),1,BABYLON.Space.WORLD)
      let boxAxis = localAxes({ size: 4, scene })
      boxAxis.parent = box
      console.log(box)
      console.log(box.getVerticesData('position'))
      console.log(box.getPositionInCameraSpace())
      console.log(box.getPivotPoint())
      let { x, y, z } = box.getFacetPosition(1)
      let boxPoints = BABYLON.MeshBuilder.CreateSphere(
        'point',
        { diameter: 1 },
        scene
      )
      boxPoints.position = new BABYLON.Vector3(x, y, z)
      box.material = new BABYLON.StandardMaterial('boxMaterial', scene)
      //   box.material.wireframe = true
      box.material.alpha = 0.5
      box.showBoundingBox = true
      let box1 = BABYLON.MeshBuilder.CreateBox('box1', {}, scene)
      box1.material = new BABYLON.StandardMaterial('boxMaterial1', scene)
      box1.parent = box
      box1.position = new BABYLON.Vector3(0, 0, 0)

      let worldAxis = localAxes({ size: 6, scene })

      const myPoints = [
        new BABYLON.Vector3(.1, .0, 0),
        new BABYLON.Vector3(Math.PI/6 *1, Math.sin(1), 0),
    ]
      const myPoints1 = [
        new BABYLON.Vector3(.1, .0,-0.1),
        new BABYLON.Vector3(Math.cos(1), Math.sin(1), -.1),
    ]
      const myPoints2 = [
        new BABYLON.Vector3(0, .0, -0.1),
        new BABYLON.Vector3(Math.cos(1), Math.sin(1), 0),
    ]

    const lines1 = BABYLON.MeshBuilder.CreateLines("lines", {points: myPoints},scene);
    const lines2 = BABYLON.MeshBuilder.CreateLines("lines", {points: myPoints1},scene);
    const lines3 = BABYLON.MeshBuilder.CreateLines("lines", {points: myPoints2},scene);
   
      return scene
    }
    return {}
  },
  components: {},
})
</script>

<style scoped>
#Babylon {
  width: 100%;
  height: 100%;
}
</style>