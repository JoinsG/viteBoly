import * as BABYLON from "babylonjs";
import { initRepeatPosition } from "../../js/util.js";

let Rooms = null;
let WallLeft = null;
let WallRight = null;
let WindowWall = null;
let WindowScene = null;
export function CreateSecondaryRecumbent2({ scene }: { scene: BABYLON.Scene }) {
  Rooms = BABYLON.MeshBuilder.CreateBox(
    "masterRoom",
    {
      width: 3,
      height: 4,
      depth: 3.3,
    },
    scene
  );
  Rooms.material = new BABYLON.StandardMaterial("roomMaterial", scene);
  Rooms.position = new BABYLON.Vector3(1.5, 2, 1.65);
  Rooms.position = Rooms.position.add(new BABYLON.Vector3(0, 0, 7.6));
  Rooms.material.alpha = 0.8;

  WallLeft = BABYLON.MeshBuilder.CreateBox(
    "masterRoom",
    {
      width: 0.1,
      height: 4,
      depth: 3.3,
    },
    scene
  );
  WallLeft.parent = Rooms;
  initRepeatPosition({ parent: Rooms, child: WallLeft });
  //   WallLeft.position = new BABYLON.Vector3(1.9, 0, 0.85);
  WallRight = WallLeft.clone();
  //   WallRight.position = new BABYLON.Vector3(-1.9, 0, 0.85);
  initRepeatPosition({ parent: Rooms, child: WallRight });
  WallRight.position = WallRight.position.add(new BABYLON.Vector3(2.9, 0, 0));



  WindowWall = BABYLON.MeshBuilder.CreateBox(
    "masterRoom",
    {
      width: 3,
      height: 4,
      depth: 0.1,
    },
    scene
  );
  WindowWall.parent = Rooms;

  WindowScene = BABYLON.MeshBuilder.CreateBox(
    "masterRoom",
    {
      width: 1.5,
      height: 1,
      depth: 0.1,
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

  newMesh.position = newMesh.position.add(new BABYLON.Vector3(0, 0, 3.3));

  WindowWall.dispose();
  WindowScene.dispose();
}
