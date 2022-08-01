<template>
  <canvas id="Cooc"></canvas>
</template>

<script lang='ts'>
import { defineComponent, onMounted } from 'vue'
import * as earcut from 'earcut'
;(window as any).earcut = earcut
// import * as BABYLON from 'babylonjs'
import { CreateSeat } from './js/seat'
import { createFArea } from './js/seatArea/F'
import { createMinisterArea } from './js/room/ministerArea' //部长
import { createWeizhiArea } from './js/room/weizhiArea'
import { createConferenceArea } from './js/room/conferenceArea' //会议室
import { createElevatorArea } from './js/room/elevatorArea' //电梯区域
import { createExperienceArea } from './js/room/experienceArea' //体验区
import { createDTRgihtArea } from './js/room/leftRightArea/index' //大厅-右部
import { createDTLeftArea } from './js/room/leftLeftArea/index' //大厅-左部
import { createQianTaiArea } from './js/room/leftMiddleArea/index' //大厅-中部
import { createCoocMiddleArea } from './js/CoocMiddleArea'
import { enablePhysicsImpostor, TestGUI, initRepeatPosition } from '../js/util'
import { localAxes } from '../js/Axis'
export default defineComponent({
  name: 'Cooc',
  setup: () => {
    let canvas: any, engine: any, scene: BABYLON.Scene, camera: BABYLON.Camera
    let CoocHouse = null
    onMounted(() => {
      let testVe = new BABYLON.Vector3(0, 1, 0)
      let testVe2 = new BABYLON.Vector3(1, -.5, 0)
      console.log( BABYLON.Vector3.Dot( testVe.normalize(), testVe2.normalize()))
      // console.log(BABYLON.Vector3.Dot(testVe, testVe2))
      let angle = BABYLON.Vector3.GetAngleBetweenVectors(testVe, testVe2,new BABYLON.Vector3(1, 1, 1))
      console.log(angle)
      console.log(angle/Math.PI)

      // Get the canvas DOM element
      canvas = document.getElementById('Cooc')
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
      camera = new BABYLON.UniversalCamera(
        'camera',
        new BABYLON.Vector3(180, 500, 200),
        scene
      )
      camera.attachControl(canvas, true)
      const light = new BABYLON.HemisphericLight(
        'light',
        new BABYLON.Vector3(1, 1, 1),
        scene
      )
      // camera.position = new BABYLON.Vector3(0, 5, 0)
      camera.setTarget(new BABYLON.Vector3(180, 0, 200))
      CoocHouse = BABYLON.MeshBuilder.CreateBox(
        'box',
        { height: 6, width: 1645.75, depth: 304 },
        scene
      )
      CoocHouse.position = new BABYLON.Vector3(822.875, 3, 152)
      CoocHouse.material = new BABYLON.StandardMaterial('roomMaterial', scene)
      CoocHouse.material.alpha = 0.1
      let worldAxis = localAxes({ size: 6, scene })
      initCoocMesh()
      return scene
    }

    const initCoocMesh = () => {
      // let a = CreateSeat({ scene }) //主卧
      // a.parent = CoocHouse
      // initRepeatPosition({ parent: CoocHouse, child: a })
      let fArea = createFArea({ scene })
      fArea.parent = CoocHouse
      initRepeatPosition({ parent: CoocHouse, child: fArea })
      fArea.position = fArea.position.add(new BABYLON.Vector3(0, 0, 150))
      //////
      let ministerArea = createMinisterArea({ scene })
      ministerArea.parent = CoocHouse
      initRepeatPosition({ parent: CoocHouse, child: ministerArea })
      ministerArea.position = ministerArea.position.add(
        new BABYLON.Vector3(24, 0, 284)
      )
      //////F-左边区域
      let WeizhiArea = createWeizhiArea({ scene })
      WeizhiArea.parent = CoocHouse
      initRepeatPosition({ parent: CoocHouse, child: WeizhiArea })
      WeizhiArea.position = WeizhiArea.position.add(
        new BABYLON.Vector3(150, 0, 224)
      )
      //////会议室
      let ConferenceArea = createConferenceArea({ scene })
      ConferenceArea.parent = CoocHouse
      initRepeatPosition({ parent: CoocHouse, child: ConferenceArea })
      ConferenceArea.position = ConferenceArea.position.add(
        new BABYLON.Vector3(195, 0, 224)
      )
      //////电梯区
      let ElevatorArea = createElevatorArea({ scene })
      ElevatorArea.parent = CoocHouse
      initRepeatPosition({ parent: CoocHouse, child: ElevatorArea })
      ElevatorArea.position = ElevatorArea.position.add(
        new BABYLON.Vector3(170, 0, 102)
      )
      //体验区
      let ExperienceArea = createExperienceArea({ scene })
      ExperienceArea.parent = CoocHouse
      initRepeatPosition({ parent: CoocHouse, child: ExperienceArea })
      ExperienceArea.position = ExperienceArea.position.add(
        new BABYLON.Vector3(0, 0, 102)
      )
      //大厅--右部
      let middleArea = createDTRgihtArea({ scene })
      middleArea.parent = CoocHouse
      initRepeatPosition({ parent: CoocHouse, child: middleArea })
      middleArea.position = middleArea.position.add(
        new BABYLON.Vector3(440, 0, 0)
      )

      //大厅--左部
      let dtAreaLeft = createDTLeftArea({ scene })
      dtAreaLeft.parent = CoocHouse
      initRepeatPosition({ parent: CoocHouse, child: dtAreaLeft })
      dtAreaLeft.position = dtAreaLeft.position.add(
        new BABYLON.Vector3(0, 0, 0)
      )
      //大厅--中部
      let dtAreaMiddle = createQianTaiArea({ scene })
      dtAreaMiddle.parent = CoocHouse
      initRepeatPosition({ parent: CoocHouse, child: dtAreaMiddle })
      dtAreaMiddle.position = dtAreaMiddle.position.add(
        new BABYLON.Vector3(170, 0, 0)
      )

      ///中部
      let CoocMiddleArea = createCoocMiddleArea({ scene })
      CoocMiddleArea.parent = CoocHouse
      initRepeatPosition({ parent: CoocHouse, child: CoocMiddleArea })
      CoocMiddleArea.position = CoocMiddleArea.position.add(
        new BABYLON.Vector3(583, 0, 17)
      )
    }
    return {}
  },
  components: {},
})
</script>

<style scoped>
#Cooc {
  width: 100%;
  height: 100%;
}
</style>