import * as BABYLON from "babylonjs";
import { enablePhysicsImpostor } from "../../js/util";

let Rooms = null;

let WallLeft = null;
let WallRight = null;
let WindowWall = null;
let WindowScene = null;
export function CreateMasterRoom({ scene }: { scene: BABYLON.Scene }) {
  Rooms = BABYLON.MeshBuilder.CreateBox(
    "masterRoom",
    {
      width: 7.8,
      height: 8,
      depth: 7.6,
    },
    scene
  );
  Rooms.material = new BABYLON.StandardMaterial("roomMaterial", scene);
  Rooms.position = new BABYLON.Vector3(3.9, 4, 3.8);
  Rooms.material.alpha = 0.1;

  Rooms.isPickable = false;

  WallLeft = BABYLON.MeshBuilder.CreateBox(
    "masterRoom",
    {
      width: 0.2,
      height: 8,
      depth: 11,
    },
    scene
  );
  WallLeft.parent = Rooms;
  WallLeft.position = new BABYLON.Vector3(3.8, 0, 1.7);
  WallRight = WallLeft.clone();
  WallRight.position = new BABYLON.Vector3(-3.8, 0, 1.7);

  WindowWall = BABYLON.MeshBuilder.CreateBox(
    "masterRoom",
    {
      width: 7.4,
      height: 8,
      depth: 0.2,
    },
    scene
  );
  WindowWall.parent = Rooms;

  WindowScene = BABYLON.MeshBuilder.CreateBox(
    "masterRoom",
    {
      width: 3,
      height: 2,
      depth: 0.2,
    },
    scene
  );
  WindowScene.parent = WindowWall;

  let sphereCSG = BABYLON.CSG.FromMesh(WindowWall);
  let boxCSG = BABYLON.CSG.FromMesh(WindowScene);
  let booleanCSG = sphereCSG.subtract(boxCSG);
  let newMesh = booleanCSG.toMesh("newMesh", null, scene);
  newMesh.parent = Rooms;
  newMesh.position = new BABYLON.Vector3(0, 0, -3.7);

  WindowWall.dispose();
  WindowScene.dispose();

  //开启物理
  //开启碰撞
  enablePhysicsImpostor({ mesh: WallLeft, scene });
  enablePhysicsImpostor({ mesh: WallRight, scene });
  enablePhysicsImpostor({ mesh: newMesh, scene });
}
