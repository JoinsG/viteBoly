<template>
  <canvas id="house"></canvas>
</template>

<script lang='ts'>
import { defineComponent, onMounted } from 'vue'
import * as BABYLON from 'babylonjs'
import { SetVectoriesPoint, SetVectoriesLines } from './js/Points'
import { CreateMasterRoom } from './js/MasterBedroom'
import { CreateSecondaryRecumbent1 } from './js/SecondaryRecumbent1'
import { CreateYangTai } from './js/YangTai'
import { CreateSmallYangTai } from './js/SmallYangTai'
import { CreateBathRoom } from './js/BathRooom'
import { CreateGuestGuardRoom } from './js/GuestGuardRoom'
import { CreateSecondaryRecumbent2 } from './js/SecondaryRecumbent2'
import { CreateKitchenRoom } from './js/KitchenRoom'
import { localAxes } from '../js/Axis'
import { loadAmmoModule } from '../js/util'
// import * as Ammo from 'https://cdn.babylonjs.com/ammo.js'
import '@/assets/js/ammo.js'
export default defineComponent({
  name: '',
  setup: () => {
    let canvas: any, engine: any, scene: BABYLON.Scene, camera: BABYLON.Camera
    let activeModel = null
    let activeColor = null
    onMounted(() => {
      // Get the canvas DOM element
      canvas = document.getElementById('house')
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

      SetVectoriesPoint({ scene })
      //   SetVectoriesLines({scene})

      let worldAxis = localAxes({ size: 6, scene })
      // the canvas/window resize event handler
      window.addEventListener('resize', function () {
        engine.resize()
      })
      // initMouse()
      sceneClickInit()
    })

    const initHouseMesh = () => {
      CreateMasterRoom({ scene }) //主卧
      CreateYangTai({ scene }) //主阳台
      CreateBathRoom({ scene }) //主卫
      CreateSecondaryRecumbent1({ scene }) //客房1
      CreateGuestGuardRoom({ scene }) //客房2
      CreateSecondaryRecumbent2({ scene }) //客卫2
      CreateKitchenRoom({ scene }) //厨房
      CreateSmallYangTai({ scene }) //厨阳
    }
    const createScene = async () => {
      scene = new BABYLON.Scene(engine)
      // console.log(Ammo);
      // camera = new BABYLON.FlyCamera(
      //   'camera',
      //   new BABYLON.Vector3(0, 20, -10),
      //   scene
      // )

      camera = new BABYLON.UniversalCamera(
        'camera',
        new BABYLON.Vector3(0, 20, 20),
        scene
      )

      camera.setTarget(BABYLON.Vector3.Zero())
      // camera = new BABYLON.DeviceOrientationCamera(
      //   'camera',
      //   new BABYLON.Vector3(2, 10, 0),
      //   scene
      // )
      camera.attachControl(canvas, true)

      // Parameters: name, position, scene
      // camera = new BABYLON.FlyCamera(
      //   'FlyCamera',
      //   new BABYLON.Vector3(0, 5, -10),
      //   scene
      // )

      // Airplane like rotation, with faster roll correction and banked-turns.
      // Default is 100. A higher number means slower correction.
      // camera.rollCorrect = 10
      // // Default is false.
      // camera.bankedTurn = true
      // // Defaults to 90° in radians in how far banking will roll the camera.
      // camera.bankedTurnLimit = Math.PI / 2
      // // How much of the Yawing (turning) will affect the Rolling (banked-turn.)
      // // Less than 1 will reduce the Rolling, and more than 1 will increase it.
      // camera.bankedTurnMultiplier = 1
      const light = new BABYLON.HemisphericLight(
        'light',
        new BABYLON.Vector3(0, 1, 0),
        scene
      )

      loadAmmoModule().then(async () => {
        console.log(window.Ammo)
        await window.Ammo()
        var gravityVector = new BABYLON.Vector3(0, -9.8, 0)
        // var physicsPlugin = new BABYLON.AmmoJSPlugin()

        scene.enablePhysics(gravityVector, new BABYLON.AmmoJSPlugin())
        // camera.setTarget(new BABYLON.Vector3(0, 0, 0))
        // camera.applyGravity = true
        camera.checkCollisions = true
        camera.speed = 0.25
        camera.angularSensibility = 5500
        scene.collisionsEnabled = true
        initHouseMesh()
        var ground = BABYLON.Mesh.CreateGround('ground1', 106, 106, 2, scene)
        // var sp = BABYLON.MeshBuilder.CreateSphere(
        //   'sp1',
        //   {
        //     diameter: 1,
        //   },
        //   scene
        // )
        // sp.position = new BABYLON.Vector3(0, 10, 1)
        ground.physicsImpostor = new BABYLON.PhysicsImpostor(
          ground,
          BABYLON.PhysicsImpostor.BoxImpostor,
          { mass: 0, friction: 0.5, restitution: 0.7 },
          scene
        )
        ground.position = new BABYLON.Vector3(0, -0.5, 0)
        // sp.physicsImpostor = new BABYLON.PhysicsImpostor(
        //   sp,
        //   BABYLON.PhysicsImpostor.BoxImpostor,
        //   { mass: 1, friction: 0.5, restitution: 0.7 },
        //   scene
        // )
        camera.checkCollisions = true
        // camera.applyGravity = true
        camera.ellipsoid = new BABYLON.Vector3(0.6, 1, 1.2) //碰撞距离
        ground.checkCollisions = true
        // sp.checkCollisions = true
        //  },300)

        // var speedCharacter = 8
        // var gravity = 0.15
        // var character = sp

        // character.ellipsoid = new BABYLON.Vector3(0.5, 1.0, 0.5)
        // character.ellipsoidOffset = new BABYLON.Vector3(0, 1.0, 0)

        // var forwards = new BABYLON.Vector3(
        //   parseFloat(Math.sin(character.rotation.y)) / speedCharacter,
        //   gravity,
        //   parseFloat(Math.cos(character.rotation.y)) / speedCharacter
        // )
        // forwards.negate()
        // character.moveWithCollisions(forwards)
        // // or
        // var backwards = new BABYLON.Vector3(
        //   parseFloat(Math.sin(character.rotation.y)) / speedCharacter,
        //   -gravity,
        //   parseFloat(Math.cos(character.rotation.y)) / speedCharacter
        // )
        // character.moveWithCollisions(backwards)
        ///物理结束
      })

      // let box = BABYLON.MeshBuilder.CreateBox(
      //   'masterRoom',
      //   {
      //     width: 3,
      //     height: 3,
      //     depth: 3,
      //   },
      //   scene
      // )
      // box.material = new BABYLON.StandardMaterial('roomMaterial', scene)
      // box.material.alpha = 0.8

      // var ray = new BABYLON.Ray()
      // var rayHelper = new BABYLON.RayHelper(ray)

      // var localMeshDirection = new BABYLON.Vector3(0, 0, 1)
      // var localMeshOrigin = new BABYLON.Vector3(0, 0, 0.4)
      // var length = 3
      // rayHelper.attachToMesh(box, localMeshDirection, localMeshOrigin, length)
      // rayHelper.show(scene)
      scene.registerBeforeRender(function () {
        // box.position = camera.position
        // let hit = ray.intersectsMeshes([box])
        // var hits = scene.multiPickWithRay(ray)
        // if (hits) {
        //   console.log(hits)
        // }
      })

      // //绑定点击事件
      // window.addEventListener('click', function () {
      //   // 尝试拾取对象
      //   var pickResult = scene.pick(scene.pointerX, scene.pointerY)
      //   if (pickResult.hit) {
      //     // impact.position.x = pickResult.pickedPoint.x;
      //     // impact.position.y = pickResult.pickedPoint.y;
      //     console.log(pickResult)
      //   }
      // })
      // scene's actions
      scene.actionManager = new BABYLON.ActionManager(scene)
      return scene
    }
    function initMouse() {
      // 触发鼠标锁定
      canvas.addEventListener('click', function () {
        canvas.requestPointerLock()
      })

      // 再次点击页面，取消鼠标锁定处理
      document.addEventListener('click', function () {
        if (document.pointerLockElement == canvas) {
          // document.exitPointerLock()
        }
      })
      function moufunction(e) {
        // console.log(e)
      }
      // 检测鼠标锁定状态变化
      document.addEventListener(
        'pointerlockchange',
        function () {
          if (document.pointerLockElement == canvas) {
            document.addEventListener('mousemove', moufunction, false)
          } else {
            document.removeEventListener('mousemove', moufunction, false)
          }
        },
        false
      )
    }
  },
  components: {},
})
</script>

<style scoped>
#house {
  width: 100%;
  height: 100%;
}
</style>