import {
  enablePhysicsImpostor,
  TestGUI,
  initRepeatPosition,
} from "../../../js/util";

export function createConferenceArea({ scene }) {
  let wrap = null;
  wrap = BABYLON.MeshBuilder.CreateBox(
    "Conference",
    { height: 6, width: 224, depth: 80 },
    scene
  );
  wrap.material = new BABYLON.StandardMaterial("roomMaterial", scene);
  wrap.material.alpha = 0.1;
  wrap.material.diffuseColor = new BABYLON.Color3(120, 20, 0);

  createBiggerConferenceRoom({ scene, wrap });
  // createSecondRow({ scene, wrap });
  // createThreeRow({ scene, wrap });
  // createFourRow({ scene, wrap });
  createConferenceRoom({ scene, wrap });
  return wrap;
}

function createBiggerConferenceRoom({ scene, wrap }) {
  let room = null;
  room = BABYLON.MeshBuilder.CreateBox(
    "bigger",
    { height: 6, width: 84, depth: 78 },
    scene
  );
  room.material = new BABYLON.StandardMaterial("roomMaterial", scene);
  room.material.diffuseColor = new BABYLON.Color3(1, 0, 0.1);
  room.material.alpha = 0.3;
  //
  room.parent = wrap;
  initRepeatPosition({ parent: wrap, child: room });
  room.position = room.position.add(new BABYLON.Vector3(70, 0, 2));
  return room;
}
function createConferenceRoom({ scene, wrap }) {
  let room = null;
  room = BABYLON.MeshBuilder.CreateBox(
    "room1",
    { height: 6, width: 68, depth: 40 },
    scene
  );

  room.parent = wrap;
  initRepeatPosition({ parent: wrap, child: room });
  room.position = room.position.add(new BABYLON.Vector3(1, 0, 0));

  let room2 = room.clone("room2");
  console.log(room2);
  room2.position = room2.position.add(new BABYLON.Vector3(0, 0, 40));
  let room3 = room.clone("room3");
  console.log(room3);
  room3.position = room3.position.add(new BABYLON.Vector3(154, 0, 40));
  let room4 = room.clone("room4");
  console.log(room4);
  room4.position = room4.position.add(new BABYLON.Vector3(154, 0, 0));

  room.material = new BABYLON.StandardMaterial("roomMaterial", scene);
  room.material.diffuseColor = new BABYLON.Color3(1, 0, 0.2);
  room.material.alpha = 0.3;
  //
  room2.material = new BABYLON.StandardMaterial("roomMaterial", scene);
  room2.material.diffuseColor = new BABYLON.Color3(1, 10, 0.2);
  room2.material.alpha = 0.3;
  //
  room4.material = new BABYLON.StandardMaterial("roomMaterial", scene);
  room4.material.diffuseColor = new BABYLON.Color3(1, 20, 0.2);
  room4.material.alpha = 0.3;
  //
  //   return [room,room2,room3,room4];
}
