import * as BABYLON from "babylonjs";
import { initRepeatPosition } from "../../js/util.js";
let YangTai = null;

export function CreateSmallYangTai({ scene }: { scene: BABYLON.Scene }) {
  YangTai = BABYLON.MeshBuilder.CreateBox(
    "masterRoom",
    {
      width: 5.8,
      height: 8,
      depth: 3.2,
    },
    scene
  );

  YangTai.material = new BABYLON.StandardMaterial("roomMaterial", scene);
  YangTai.position = new BABYLON.Vector3(12.3, 4, 20.4);
  YangTai.material.alpha = 0.3;

  ///厨房桌面
  let points1 = [
    [0, 0, 0],
    [0, 0, 2.8],
    [5.8, 0, 2.8],
    [5.8, 0, 0],
    [5.6, 0, 2.6],
    [0.2, 0, 2.6],
    [0.2, 0, 0],
    [0, 0, 0],
  ].map((item) => {
    let [x, y, z] = item;
    return new BABYLON.Vector3(x, y, z);
  });
  let YangTaiWall = BABYLON.MeshBuilder.ExtrudePolygon(
    "KitchenDesktop",
    { shape: points1, depth: 3, sideOrientation: BABYLON.Mesh.DOUBLESIDE },
    scene
  );
  YangTaiWall.parent = YangTai;
  initRepeatPosition({ parent: YangTai, child: YangTaiWall });

  let DoorWall = BABYLON.MeshBuilder.CreateBox(
    "DoorWall",
    {
      width: 5.8,
      height: 8,
      depth: 0.2,
    },
    scene
  );
  let DoorWallHole = BABYLON.MeshBuilder.CreateBox(
    "DoorWall",
    {
      width: 3,
      height: 7,
      depth: 0.2,
    },
    scene
  );
  DoorWallHole.position = new BABYLON.Vector3(0.6, -0.5, 0);
  let a = getCSG(DoorWall, DoorWallHole, scene);
  a.parent = YangTai;
  initRepeatPosition({ parent: YangTai, child: a });
  DoorWall.dispose()
  DoorWallHole.dispose()

  //////////
  let WallPoints = [
    [0, 0, 0],
    [2, 0, 0],
    [2, 0, 0.2],
    [1.8, 0, 0.2],
    [0.2, 0, 0.2],
    [0.1, 0, 5.6],
    [0, 0, 5.6],
    [0, 0, 0],
  ].map((item) => {
    let [x, y, z] = item;
    return new BABYLON.Vector3(x, y, z);
  });

  let Wall = BABYLON.MeshBuilder.ExtrudePolygon(
    "KitchenDesktop",
    { shape: WallPoints, depth: 8, sideOrientation: BABYLON.Mesh.DOUBLESIDE },
    scene
  );
  Wall.parent = YangTai
  initRepeatPosition({ parent: YangTai, child: Wall });
  Wall.position = Wall.position.add(new BABYLON.Vector3(5.8,0,-2.4))

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
  testBox.position = new BABYLON.Vector3(6, 6, 6);
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
  console.log(boxChild.parent.getBoundingInfo());
  console.log(boxChild.getBoundingInfo());
  //   console.log(a);
  //   console.log(a.getBoundingInfo());
  initRepeatPosition({ parent: testBox, child: boxChild });
}

function initRepeatPosition({ parent, child }) {
  let { x: px, y: py, z: pz } = parent.getBoundingInfo().minimum ?? {};
  let { x: cx, y: cy, z: cz } = child.getBoundingInfo().minimum ?? {};
  let { x, y, z } = { x: px - cx, y: py - cy, z: pz - cz };
  console.log(x, y, z);

  child.position.x = x;
  child.position.y = y;
  child.position.z = z;
}
