import * as BABYLON from "babylonjs";
import { initRepeatPosition } from "../../js/util";

let Rooms = null;

let WallLeft = null;
let WallRight = null;
let WindowWall = null;
let WindowScene = null;
export function CreateSecondaryRecumbent1({ scene }: { scene: BABYLON.Scene }) {
  Rooms = BABYLON.MeshBuilder.CreateBox(
    "SecondaryRecumbent1-Rooms",
    {
      width: 5.8,
      height: 8,
      depth: 8.4,
    },
    scene
  );
  Rooms.material = new BABYLON.StandardMaterial("roomMaterial", scene);
  Rooms.position = new BABYLON.Vector3(22.7, 4, 7.3);
  Rooms.material.alpha = 0.1;

  WallLeft = BABYLON.MeshBuilder.CreateBox(
    "SecondaryRecumbent1-WallLeft",
    {
      width: 0.2,
      height: 8,
      depth: 8.4,
    },
    scene
  );
  WallLeft.parent = Rooms;
  WallLeft.position = new BABYLON.Vector3(3, 0, 0);
  WallRight = WallLeft.clone();
  WallRight.position = new BABYLON.Vector3(-2.8, 0, 0);

  WindowWall = BABYLON.MeshBuilder.CreateBox(
    "SecondaryRecumbent1-WindowWall",
    {
      width: 5.8,
      height: 8,
      depth: 0.2,
    },
    scene
  );
  WindowWall.parent = Rooms;

  WindowScene = BABYLON.MeshBuilder.CreateBox(
    "SecondaryRecumbent1-WindowScene",
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
  let newMesh = booleanCSG.toMesh("SecondaryRecumbent1-newMesh", null, scene);
  newMesh.parent = Rooms;
  newMesh.position = new BABYLON.Vector3(0, 0, -4.1);

  WindowWall.dispose();
  WindowScene.dispose();

  let zt = BABYLON.MeshBuilder.CreateBox(
    "zt",
    {
      width: 5.8,
      height: 1.6,
      depth: 1,
    },
    scene
  );
  zt.parent = Rooms;
  initRepeatPosition({ parent: Rooms, child: zt });


  //客厅房的围墙
  let points1 = [
    [0, 0, 0],
    [5.8, 0, 0],
    [5.8, 0, 0.2],
    [0.2, 0, 0.2],
    [0.2, 0, 5.8],
    [0, 0, 5.8],
    [0, 0, 0],
  ].map((item) => {
    let [x, y, z] = item;
    return new BABYLON.Vector3(x, y, z);
  });
  let Wall = BABYLON.MeshBuilder.ExtrudePolygon(
    "KitchenDesktop",
    { shape: points1, depth: 8, sideOrientation: BABYLON.Mesh.DOUBLESIDE },
    scene
  );
  Wall.parent = Rooms;
  initRepeatPosition({ parent: Rooms, child: Wall });
  // Wall.position = Wall.position.add(new BABYLON.Vector3(9.9, 0, 5.8));
  Wall.position = Wall.position.add(new BABYLON.Vector3(0, 0, 8.4));
}
