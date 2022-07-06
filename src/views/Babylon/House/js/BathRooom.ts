// import * as BABYLON from "babylonjs";
import { enablePhysicsImpostor,TestGUI } from "../../js/util";

let BathRoomWrap1 = null;

let BathRoomWallLeft = null;
let BathRoomWallRight = null;
let BathRoomWallFront = null;

export function CreateBathRoom({ scene }: { scene: BABYLON.Scene }) {
  BathRoomWrap1 = BABYLON.MeshBuilder.CreateBox(
    "masterRoom",
    {
      width: 6,
      height: 8,
      depth: 3.4,
    },
    scene
  );
  BathRoomWrap1.material = new BABYLON.StandardMaterial("roomMaterial", scene);
  BathRoomWrap1.position = new BABYLON.Vector3(3, 4, 9.3);
  BathRoomWrap1.material.alpha = 0.1;
  BathRoomWrap1.isPickable = false;
  let RoomsPlane = TestGUI('主卫',scene)
  RoomsPlane.parent = BathRoomWrap1
  //////////
  BathRoomWallLeft = BABYLON.MeshBuilder.CreateBox(
    "masterRoom",
    {
      width: 6,
      height: 8,
      depth: 0.2,
    },
    scene
  );
  BathRoomWallLeft.parent = BathRoomWrap1;
  BathRoomWallLeft.position = new BABYLON.Vector3(0, 0, -1.7);
  BathRoomWallRight = BABYLON.MeshBuilder.CreateBox(
    "masterRoom",
    {
      width: 6,
      height: 8,
      depth: 0.2,
    },
    scene
  );
  BathRoomWallRight.parent = BathRoomWrap1;
  BathRoomWallRight.position = new BABYLON.Vector3(0, 0, 1.7);
  BathRoomWallFront = BABYLON.MeshBuilder.CreateBox(
    "masterRoom",
    {
      width: 0.2,
      height: 8,
      depth: 3.4,
    },
    scene
  );
  BathRoomWallFront.parent = BathRoomWrap1;
  BathRoomWallFront.position = new BABYLON.Vector3(-2.9, 0, 0);
  //开启物理
  //开启碰撞
  enablePhysicsImpostor({ mesh: BathRoomWallLeft, scene });
  enablePhysicsImpostor({ mesh: BathRoomWallRight, scene });
  enablePhysicsImpostor({ mesh: BathRoomWallFront, scene });
}
