import * as BABYLON from "babylonjs";
import { pointsScene } from "./Points";
let YangTai = null;

export function CreateYangTai({ scene }: { scene: BABYLON.Scene }) {
  YangTai = BABYLON.MeshBuilder.CreateBox(
    "masterRoom",
    {
      width: 6,
      height: 4,
      depth: 1.6,
    },
    scene
  );

  YangTai.material = new BABYLON.StandardMaterial("roomMaterial", scene);
  YangTai.position = new BABYLON.Vector3(6.9, 2, 0.8);
  YangTai.material.alpha = 0.01;

  let ytw = BABYLON.MeshBuilder.CreateBox(
    "masterRoom",
    {
      width: 6,
      height: 4,
      depth: 0.1,
    },
    scene
  );
  ytw.parent = YangTai;
  let ytwDoor = BABYLON.MeshBuilder.CreateBox(
    "masterRoom",
    {
      width: 5,
      height: 3.5,
      depth: 0.1,
    },
    scene
  );
  ytwDoor.parent = YangTai;
  ytwDoor.position = new BABYLON.Vector3(0, -0.5, 0);
  let a = getCSG(ytw, ytwDoor, scene);
  a.parent = YangTai;
  a.position = new BABYLON.Vector3(0, 0, 0.8);
  ytwDoor.dispose();
  ytw.dispose();

  let ytwDoorLeft = BABYLON.MeshBuilder.CreateBox(
    "masterRoom",
    {
      width: 0.1,
      height: 1.5,
      depth: 1.6,
    },
    scene
  );
  ytwDoorLeft.parent = YangTai;
  ytwDoorLeft.position = new BABYLON.Vector3(2.95, -0.75, 0);

  let ytwDoorFront1 = BABYLON.MeshBuilder.CreateBox(
    "masterRoom",
    {
      width: 0.8,
      height: 1.5,
      depth: 0.1,
    },
    scene
  );
  let ytwDoorFront2 = BABYLON.MeshBuilder.CreateBox(
    "masterRoom",
    {
      width: 5.2,
      height: 1.5,
      depth: 0.1,
    },
    scene
  );
  ytwDoorFront1.parent = YangTai;
  ytwDoorFront2.parent = YangTai;
  ytwDoorFront1.position = new BABYLON.Vector3(2.6, -0.75, -0.8);
  ytwDoorFront2.position = new BABYLON.Vector3(-0.4, -0.75, -0.8);
  ytwDoorFront2.material = new BABYLON.StandardMaterial("roomMaterial", scene);
  ytwDoorFront2.material.alpha = 0.7;

  testMesh(scene);
}

function getCSG(sceneA, sceneB, scene) {
  let sphereCSG = BABYLON.CSG.FromMesh(sceneA);
  let boxCSG = BABYLON.CSG.FromMesh(sceneB);
  let booleanCSG = sphereCSG.subtract(boxCSG);
  let newMesh = booleanCSG.toMesh("newMesh", null, scene);
  return newMesh;
}

function testMesh(scene) {
  let testBox = BABYLON.MeshBuilder.CreateBox(
    "testBox",
    {
      width: 4,
      height: 4,
      depth: 4,
    },
    scene
  );
  testBox.material = new BABYLON.StandardMaterial("roomMaterial", scene);
  testBox.position = new BABYLON.Vector3(12, 12, 12);
  testBox.material.alpha = 0.1;

  let boxChild = BABYLON.MeshBuilder.CreateBox(
    "boxChild",
    {
      width: 1,
      height: 1,
      depth: 1,
    },
    scene
  );
  boxChild.material = new BABYLON.StandardMaterial("boxChild", scene);
  //   boxChild.position = new BABYLON.Vector3(6.9, 2, 0.8);
  boxChild.material.alpha = 0.5;
  boxChild.parent = testBox;
  console.log(testBox.getBoundingInfo());
  console.log(boxChild.getBoundingInfo());
  //   console.log(a);
  //   console.log(a.getBoundingInfo());
}
