import * as BABYLON from "babylonjs";
import { pointsScene } from "./Points";
let YangTai = null;

export function CreateYangTai({ scene }: { scene: BABYLON.Scene }) {
  YangTai = BABYLON.MeshBuilder.CreateBox(
    "masterRoom",
    {
      width: 12,
      height: 8,
      depth: 3.2,
    },
    scene
  );

  YangTai.material = new BABYLON.StandardMaterial("roomMaterial", scene);
  YangTai.position = new BABYLON.Vector3(13.8, 4, 1.7);
  YangTai.material.alpha = 0.1;

  let ytw = BABYLON.MeshBuilder.CreateBox(
    "masterRoom",
    {
      width: 12,
      height: 8,
      depth: 0.2,
    },
    scene
  );
  ytw.parent = YangTai;
  let ytwDoor = BABYLON.MeshBuilder.CreateBox(
    "masterRoom",
    {
      width: 10,
      height: 7,
      depth: 0.2,
    },
    scene
  );
  ytwDoor.parent = YangTai;
  ytwDoor.position = new BABYLON.Vector3(0, -1, 0);
  let a = getCSG(ytw, ytwDoor, scene);
  a.parent = YangTai;
  a.position = new BABYLON.Vector3(0, 0, 1.6);
  ytwDoor.dispose();
  ytw.dispose();

  let ytwDoorLeft = BABYLON.MeshBuilder.CreateBox(
    "masterRoom",
    {
      width: 0.2,
      height: 3,
      depth: 3.2,
    },
    scene
  );
  ytwDoorLeft.parent = YangTai;
  ytwDoorLeft.position = new BABYLON.Vector3(5.9, -2.5, 0);

  let ytwDoorFront1 = BABYLON.MeshBuilder.CreateBox(
    "masterRoom",
    {
      width: 1.6,
      height: 3,
      depth: 0.2,
    },
    scene
  );
  let ytwDoorFront2 = BABYLON.MeshBuilder.CreateBox(
    "masterRoom",
    {
      width: 10.4,
      height: 3,
      depth: 0.2,
    },
    scene
  );
  ytwDoorFront1.parent = YangTai;
  ytwDoorFront2.parent = YangTai;
  ytwDoorFront1.position = new BABYLON.Vector3(5.2, -2.5, -1.6);
  ytwDoorFront2.position = new BABYLON.Vector3(-0.8, -2.5, -1.6);
  ytwDoorFront2.material = new BABYLON.StandardMaterial("roomMaterial", scene);
  ytwDoorFront2.material.alpha = 0.7;
}

function getCSG(sceneA, sceneB, scene) {
  let sphereCSG = BABYLON.CSG.FromMesh(sceneA);
  let boxCSG = BABYLON.CSG.FromMesh(sceneB);
  let booleanCSG = sphereCSG.subtract(boxCSG);
  let newMesh = booleanCSG.toMesh("newMesh", null, scene);
  return newMesh;
}
