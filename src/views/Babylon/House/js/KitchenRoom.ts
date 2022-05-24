import * as BABYLON from "babylonjs";
import { initRepeatPosition } from "../../js/util.js";
import * as earcut from "earcut";
(window as any).earcut = earcut;
let Kitchen = null;
let WallLeft = null;
let WallRight = null;
let WindowWall = null;
let WindowScene = null;

let KitchenFrontWall = null;
let KitchenDoor = null;

let KitchenDesktop = null;

export function CreateKitchenRoom({ scene }: { scene: BABYLON.Scene }) {
  Kitchen = BABYLON.MeshBuilder.CreateBox(
    "Kitchen",
    {
      width: 1.7,
      height: 4,
      depth: 4.35,
    },
    scene
  );
  Kitchen.material = new BABYLON.StandardMaterial("roomMaterial", scene);
  Kitchen.position = new BABYLON.Vector3(0.85, 2, 2.175);
  Kitchen.position = Kitchen.position.add(new BABYLON.Vector3(3, 0, 6.65));
  Kitchen.material.alpha = 0.2;

  WallLeft = BABYLON.MeshBuilder.CreateBox(
    "WallLeft",
    {
      width: 0.1,
      height: 4,
      depth: 4.35,
    },
    scene
  );
  WallLeft.parent = Kitchen;
  initRepeatPosition({ parent: Kitchen, child: WallLeft });
  //   WallLeft.position = new BABYLON.Vector3(1.9, 0, 0.85);
  WallRight = WallLeft.clone();
  //   WallRight.position = new BABYLON.Vector3(-1.9, 0, 0.85);
  WallRight.position = new BABYLON.Vector3(0, 0, 0);
  KitchenDoor = BABYLON.MeshBuilder.CreateBox(
    "KitchenDoor",
    {
      width: 0.1,
      height: 4,
      depth: 1.6,
    },
    scene
  );
  KitchenDoor.parent = Kitchen;
  KitchenDoor.position = new BABYLON.Vector3(0, 0, -0.5);
  let KitDorSphereCSG = BABYLON.CSG.FromMesh(WallRight);
  let KitDorBoxCSG = BABYLON.CSG.FromMesh(KitchenDoor);
  let KitDoor = KitDorSphereCSG.subtract(KitDorBoxCSG);
  let KitchenDoorMesh = KitDoor.toMesh("KitchenDoorMesh", null, scene);
  KitchenDoorMesh.parent = Kitchen;
  initRepeatPosition({ parent: Kitchen, child: KitchenDoorMesh });
  KitchenDoorMesh.position = KitchenDoorMesh.position.add(
    new BABYLON.Vector3(1.7, 0, 0)
  );
  KitchenDoor.dispose();
  WallRight.dispose();
  //////////
  WindowWall = BABYLON.MeshBuilder.CreateBox(
    "WindowWall",
    {
      width: 1.7,
      height: 4,
      depth: 0.1,
    },
    scene
  );
  WindowWall.parent = Kitchen;

  WindowScene = BABYLON.MeshBuilder.CreateBox(
    "WindowScene",
    {
      width: 0.7,
      height: 0.5,
      depth: 0.1,
    },
    scene
  );
  WindowScene.parent = WindowWall;

  let sphereCSG = BABYLON.CSG.FromMesh(WindowWall);
  let boxCSG = BABYLON.CSG.FromMesh(WindowScene);
  let booleanCSG = sphereCSG.subtract(boxCSG);
  let newMesh = booleanCSG.toMesh("newMesh", null, scene);
  newMesh.parent = Kitchen;
  initRepeatPosition({ parent: Kitchen, child: newMesh });

  newMesh.position = newMesh.position.add(new BABYLON.Vector3(0, 0, 3.3));

  WindowWall.dispose();
  WindowScene.dispose();

  KitchenFrontWall = BABYLON.MeshBuilder.CreateBox(
    "KitchenFrontWall",
    {
      width: 1.7,
      height: 4,
      depth: 0.1,
    },
    scene
  );
  KitchenFrontWall.parent = Kitchen;
  initRepeatPosition({ parent: Kitchen, child: KitchenFrontWall });

  ///厨房桌面
  let points = [
    [0, 0, 0],
    [0, 0, 3.2],
    [1.7, 0, 3.2],
    [1.7, 0, 2.5],
    [0.8, 0, 2.5],
    [0.8, 0, 0],
    [0, 0, 0]
  ].map((item) => {
    let [x, y, z] = item;
    return new BABYLON.Vector3(x, y, z);
  });
  KitchenDesktop = BABYLON.MeshBuilder.ExtrudePolygon(
    "KitchenDesktop",
    { shape: points, depth: 1.4,sideOrientation: BABYLON.Mesh.DOUBLESIDE},
    scene
  );
//   KitchenDesktop.position = new BABYLON.Vector3(0, 10, 0);
    KitchenDesktop.parent = Kitchen;
    initRepeatPosition({ parent: Kitchen, child: KitchenDesktop });
}
