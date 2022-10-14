import {
  enablePhysicsImpostor,
  TestGUI,
  initRepeatPosition,
} from "../../../../js/util";
import { CreateSeat } from "../../seat";

function createFirst({ scene, wrap, count = 3 }) {
  let z = 0;
  for (let i = 0; i < count; i++) {
    let item = CreateSeat({ scene });
    item.parent = wrap;
    initRepeatPosition({ parent: wrap, child: item });
    item.position = item.position.add(new BABYLON.Vector3(13, 0, z));
    z += 15;
    item.rotation.y = -Math.PI / 2;
  }
}

function createSecond({ scene, wrap, count = 3 }) {
  let z = 0;
  let x = 0;
  for (let i = 0; i < count; i++) {
    let item = CreateSeat({ scene });
    item.parent = wrap;
    initRepeatPosition({ parent: wrap, child: item });
    item.position = item.position.add(new BABYLON.Vector3(0, 0, z));
    z += 15;
    item.rotation.y = Math.PI / 2;
  }
}
export function createLeftAreaBot({ scene }) {
  let wrap = null;
  wrap = BABYLON.MeshBuilder.CreateBox(
    "Conference",
    { height: 6, width: 143, depth: 80 },
    scene
  );
  wrap.material = new BABYLON.StandardMaterial("roomMaterial", scene);
  wrap.material.alpha = 0.1;
  wrap.material.diffuseColor = new BABYLON.Color3(120, 120, 0);

  createBottomAreaFirstSeatRow({ scene, wrap });
  createBottomAreaSecondSeatRow({ scene, wrap });
  createBottomAreaThreeSeatRow({ scene, wrap });
  createBottomAreaFourSeatRow({ scene, wrap });
  createBottomAreaFiveSeatRow({ scene, wrap });
  // createSecondRow({ scene, wrap });
  // createThreeRow({ scene, wrap });
  // createFourRow({ scene, wrap });
  // createConferenceRoom({ scene, wrap });
  return wrap;
}
function createBottomAreaFirstSeatRow({ scene, wrap, count = 3 }) {
  let firstRowWrap = null;
  firstRowWrap = BABYLON.MeshBuilder.CreateBox(
    "seat",
    { height: 6, width: 0, depth: 0 },
    // { height: 6, width: 13.5, depth: 2 },
    scene
  );
  firstRowWrap.material = new BABYLON.StandardMaterial("roomMaterial", scene);
  firstRowWrap.material.alpha = 0.5;
  firstRowWrap.parent = wrap;
  initRepeatPosition({ parent: wrap, child: firstRowWrap });
  createFirst({ scene, wrap: firstRowWrap });
  createSecond({ scene, wrap: firstRowWrap });
  firstRowWrap.position = firstRowWrap.position.add(
    new BABYLON.Vector3(20, 0, 0)
  );
  return firstRowWrap;
}
function createBottomAreaSecondSeatRow({ scene, wrap, count = 3 }) {
  let firstRowWrap = null;
  firstRowWrap = BABYLON.MeshBuilder.CreateBox(
    "seat",
    { height: 6, width: 0, depth: 0 },
    // { height: 6, width: 13.5, depth: 2 },
    scene
  );
  firstRowWrap.material = new BABYLON.StandardMaterial("roomMaterial", scene);
  firstRowWrap.material.alpha = 0.5;
  firstRowWrap.parent = wrap;
  initRepeatPosition({ parent: wrap, child: firstRowWrap });
  createFirst({ scene, wrap: firstRowWrap });
  createSecond({ scene, wrap: firstRowWrap });
  firstRowWrap.position = firstRowWrap.position.add(
    new BABYLON.Vector3(50, 0, 0)
  );
  return firstRowWrap;
}
function createBottomAreaThreeSeatRow({ scene, wrap, count = 3 }) {
  let firstRowWrap = null;
  firstRowWrap = BABYLON.MeshBuilder.CreateBox(
    "seat",
    { height: 6, width: 0, depth: 0 },
    // { height: 6, width: 13.5, depth: 2 },
    scene
  );
  firstRowWrap.material = new BABYLON.StandardMaterial("roomMaterial", scene);
  firstRowWrap.material.alpha = 0.5;
  firstRowWrap.parent = wrap;
  initRepeatPosition({ parent: wrap, child: firstRowWrap });
  createFirst({ scene, wrap: firstRowWrap });
  createSecond({ scene, wrap: firstRowWrap });
  firstRowWrap.position = firstRowWrap.position.add(
    new BABYLON.Vector3(80, 0, 0)
  );
  return firstRowWrap;
}
function createBottomAreaFourSeatRow({ scene, wrap, count = 3 }) {
  let firstRowWrap = null;
  firstRowWrap = BABYLON.MeshBuilder.CreateBox(
    "seat",
    { height: 6, width: 0, depth: 0 },
    // { height: 6, width: 13.5, depth: 2 },
    scene
  );
  firstRowWrap.material = new BABYLON.StandardMaterial("roomMaterial", scene);
  firstRowWrap.material.alpha = 0.5;
  firstRowWrap.parent = wrap;
  initRepeatPosition({ parent: wrap, child: firstRowWrap });
  createFirst({ scene, wrap: firstRowWrap });
  createSecond({ scene, wrap: firstRowWrap });
  firstRowWrap.position = firstRowWrap.position.add(
    new BABYLON.Vector3(110, 0, 0)
  );
  return firstRowWrap;
}
function createBottomAreaFiveSeatRow({ scene, wrap, count = 3 }) {
  let firstRowWrap = null;
  firstRowWrap = BABYLON.MeshBuilder.CreateBox(
    "seat",
    { height: 6, width: 0, depth: 0 },
    // { height: 6, width: 13.5, depth: 2 },
    scene
  );
  firstRowWrap.material = new BABYLON.StandardMaterial("roomMaterial", scene);
  firstRowWrap.material.alpha = 0.5;
  firstRowWrap.parent = wrap;
  initRepeatPosition({ parent: wrap, child: firstRowWrap });
  createFirst({ scene, wrap: firstRowWrap });
  // createSecond({ scene, wrap: firstRowWrap });
  firstRowWrap.position = firstRowWrap.position.add(
    new BABYLON.Vector3(-10, 0, 0)
  );
  return firstRowWrap;
}
