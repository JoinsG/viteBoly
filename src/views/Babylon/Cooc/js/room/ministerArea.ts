import {
  enablePhysicsImpostor,
  TestGUI,
  initRepeatPosition,
} from "../../../js/util";
export function createMinisterArea({ scene }) {
  let wrap = null;
  wrap = BABYLON.MeshBuilder.CreateBox(
    "seat",
    { height: 6, width: 150, depth: 20 },
    scene
  );
  wrap.material = new BABYLON.StandardMaterial("roomMaterial", scene);
  wrap.material.diffuseColor = new BABYLON.Color3(10, 0, 0);
  wrap.material.alpha = 0.1;
  createMinisterRoom1({ scene, wrap });
  createMinisterRoom2({ scene, wrap });
  createReceptionRoom({ scene, wrap });
  return wrap;
}

function createMinisterRoom1({ scene, wrap }) {
  let room = null;
  room = BABYLON.MeshBuilder.CreateBox(
    "seat",
    { height: 6, width: 80, depth: 20 },
    scene
  );
  room.material = new BABYLON.StandardMaterial("roomMaterial", scene);
  room.material.diffuseColor = new BABYLON.Color3(1, 0, 0.1);
  room.material.alpha = 0.3;
  //
  room.parent = wrap;
  initRepeatPosition({ parent: wrap, child: room });
  room.position = room.position.add(new BABYLON.Vector3(70, 0, 0));
  return room;
}
function createMinisterRoom2({ scene, wrap }) {
  let room = null;
  room = BABYLON.MeshBuilder.CreateBox(
    "seat",
    { height: 6, width: 50, depth: 20 },
    scene
  );
  room.material = new BABYLON.StandardMaterial("roomMaterial", scene);
  room.material.diffuseColor = new BABYLON.Color3(1, 0, 0.2);
  room.material.alpha = 0.3;
  //
  room.parent = wrap;
  initRepeatPosition({ parent: wrap, child: room });
  room.position = room.position.add(new BABYLON.Vector3(0, 0, 0));
  return room;
}

function createReceptionRoom({ scene, wrap }) {
  let room = null;
  room = BABYLON.MeshBuilder.CreateBox(
    "seat",
    { height: 6, width: 20, depth: 20 },
    scene
  );
  room.material = new BABYLON.StandardMaterial("roomMaterial", scene);
  room.material.diffuseColor = new BABYLON.Color3(1, 0, 0.3);
  room.material.alpha = 0.3;
  //
  room.parent = wrap;
  initRepeatPosition({ parent: wrap, child: room });
  room.position = room.position.add(new BABYLON.Vector3(50, 0, 0));
  return room;
}
