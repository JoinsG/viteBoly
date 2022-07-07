// import * as BABYLON from "babylonjs";
import { initRepeatPosition, TestGUI } from "../../js/util.js";

let Rooms = null;
let WallLeft = null;
let WallRight = null;
let WindowWall = null;
let WindowScene = null;
export function CreateSecondaryRecumbent2({ scene }: { scene: BABYLON.Scene }) {
  Rooms = BABYLON.MeshBuilder.CreateBox(
    "masterRoom",
    {
      width: 6,
      height: 8,
      depth: 6.6,
    },
    scene
  );
  Rooms.material = new BABYLON.StandardMaterial("roomMaterial", scene);
  Rooms.position = new BABYLON.Vector3(3, 4, 3.3);
  Rooms.position = Rooms.position.add(new BABYLON.Vector3(0, 0, 15.2));
  Rooms.material.alpha = 0.8;
  let RoomsPlane = TestGUI('客房2',scene)
  RoomsPlane.parent = Rooms
  /////////////
  WallLeft = BABYLON.MeshBuilder.CreateBox(
    "masterRoom",
    {
      width: 0.2,
      height: 8,
      depth: 6.6,
    },
    scene
  );
  WallLeft.parent = Rooms;
  initRepeatPosition({ parent: Rooms, child: WallLeft });
  //   WallLeft.position = new BABYLON.Vector3(1.9, 0, 0.85);
  WallRight = WallLeft.clone();
  //   WallRight.position = new BABYLON.Vector3(-1.9, 0, 0.85);
  initRepeatPosition({ parent: Rooms, child: WallRight });
  WallRight.position = WallRight.position.add(new BABYLON.Vector3(5.8, 0, 0));

  WindowWall = BABYLON.MeshBuilder.CreateBox(
    "masterRoom",
    {
      width: 6,
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
  initRepeatPosition({ parent: Rooms, child: newMesh });

  newMesh.position = newMesh.position.add(new BABYLON.Vector3(0, 0, 6.6));

  WindowWall.dispose();
  WindowScene.dispose();


}
