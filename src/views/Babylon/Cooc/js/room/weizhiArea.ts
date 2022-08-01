import {
  enablePhysicsImpostor,
  TestGUI,
  initRepeatPosition,
} from "../../../js/util";
export function createWeizhiArea({ scene }) {
  let wrap = null;
  wrap = BABYLON.MeshBuilder.CreateBox(
    "seat",
    { height: 6, width: 24, depth: 60 },
    scene
  );
  wrap.material = new BABYLON.StandardMaterial("roomMaterial", scene);
  wrap.material.diffuseColor = new BABYLON.Color3(120, 10, 0);
  wrap.material.alpha = 0.3;
  createWeizhiRoom1({ scene, wrap });
  createWeizhiRoom2({ scene, wrap });
  createWeizhiRoom({ scene, wrap });
  return wrap;
}

function createWeizhiRoom1({ scene, wrap }) {
  let room = null;
  room = BABYLON.MeshBuilder.CreateBox(
    "seat",
    { height: 6, width: 24, depth: 20 },
    scene
  );
  room.material = new BABYLON.StandardMaterial("roomMaterial", scene);
  room.material.diffuseColor = new BABYLON.Color3(1, 0, 0.1);
  room.material.alpha = 0.3;
  //
  room.parent = wrap;
  initRepeatPosition({ parent: wrap, child: room });
  room.position = room.position.add(new BABYLON.Vector3(0, 0, 0));
  return room;
}
function createWeizhiRoom2({ scene, wrap }) {
  let room = null;
  room = BABYLON.MeshBuilder.CreateBox(
    "seat",
    { height: 6, width: 24, depth: 20 },
    scene
  );
  room.material = new BABYLON.StandardMaterial("roomMaterial", scene);
  room.material.diffuseColor = new BABYLON.Color3(1, 0, 0.2);
  room.material.alpha = 0.3;
  //
  room.parent = wrap;
  initRepeatPosition({ parent: wrap, child: room });
  room.position = room.position.add(new BABYLON.Vector3(0, 0, 20));
  return room;
}

function createWeizhiRoom({ scene, wrap }) {
  let room = null;
  room = BABYLON.MeshBuilder.CreateBox(
    "seat",
    { height: 6, width: 24, depth: 20 },
    scene
  );
  room.material = new BABYLON.StandardMaterial("roomMaterial", scene);
  room.material.diffuseColor = new BABYLON.Color3(1, 0, 0.3);
  room.material.alpha = 0.3;
  //
  room.parent = wrap;
  initRepeatPosition({ parent: wrap, child: room });
  room.position = room.position.add(new BABYLON.Vector3(0, 0, 40));
  return room;
}
