import * as BABYLON from "babylonjs";
import { initRepeatPosition } from "../../js/util.js";
let Rooms = null;

let BathRoomWrap1 = null;
let BathRoomWallLeft = null;
let BathRoomWallRight = null;
let BathRoomWallFront = null;
export function CreateGuestGuardRoom({ scene }: { scene: BABYLON.Scene }) {
  Rooms = BABYLON.MeshBuilder.CreateBox(
    "GuestGuardRoom",
    {
      width: 2,
      height: 4,
      depth: 2.1,
    },
    scene
  );
  Rooms.material = new BABYLON.StandardMaterial("roomMaterial", scene);
  Rooms.position = new BABYLON.Vector3(1, 2, 6.55);
  Rooms.material.alpha = 0.1;

  //   Rooms.material = new BABYLON.StandardMaterial("roomMaterial", scene);
  //   Rooms.position = new BABYLON.Vector3(1.3, 2, 4.65);
  //   Rooms.material.alpha = 0.1;

  BathRoomWallLeft = BABYLON.MeshBuilder.CreateBox(
    "masterRoom",
    {
      width: 2,
      height: 4,
      depth: 0.1,
    },
    scene
  );
  BathRoomWallLeft.parent = Rooms;
  initRepeatPosition({ parent: Rooms, child: BathRoomWallLeft });
  BathRoomWallRight = BABYLON.MeshBuilder.CreateBox(
    "masterRoom",
    {
      width: 2,
      height: 4,
      depth: 0.1,
    },
    scene
  );
  BathRoomWallRight.parent = Rooms;
  initRepeatPosition({ parent: Rooms, child: BathRoomWallRight });
  BathRoomWallRight.position = BathRoomWallRight.position.add(
    new BABYLON.Vector3(0, 0, 2)
  );
  BathRoomWallFront = BABYLON.MeshBuilder.CreateBox(
    "masterRoom",
    {
      width: 0.1,
      height: 4,
      depth: 2.1,
    },
    scene
  );
  BathRoomWallFront.parent = Rooms;
  initRepeatPosition({ parent: Rooms, child: BathRoomWallFront });

  //   BathRoomWallFront.position = new BABYLON.Vector3(-1.25, 0, 0);

  //   let sphereCSG = BABYLON.CSG.FromMesh(WindowWall);
  //   let boxCSG = BABYLON.CSG.FromMesh(WindowScene);
  //   let booleanCSG = sphereCSG.subtract(boxCSG);
  //   let newMesh = booleanCSG.toMesh("newMesh", null, scene);
  //   newMesh.parent = Rooms;
  //   newMesh.position = new BABYLON.Vector3(0, 0, -1.85);

  //   WindowWall.dispose();
  //   WindowScene.dispose();
}
