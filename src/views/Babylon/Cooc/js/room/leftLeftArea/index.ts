import {
  enablePhysicsImpostor,
  TestGUI,
  initRepeatPosition,
} from "../../../../js/util";
import { createDaPing } from "./daping";
import { createDaPingSeat } from "./dapingSeat";
export function createDTLeftArea({ scene }) {
  let wrap = null;
  wrap = BABYLON.MeshBuilder.CreateBox(
    "Conference",
    { height: 6, width: 150, depth: 304 },
    scene
  );
  wrap.material = new BABYLON.StandardMaterial("roomMaterial", scene);
  wrap.material.alpha = 0.1;
  wrap.material.diffuseColor = new BABYLON.Color3(120, 20, 0);

  // createElevatorPeopleRoom({ scene, wrap });
  // createSecondRow({ scene, wrap });
  // createThreeRow({ scene, wrap });
  // createFourRow({ scene, wrap });
  // createConferenceRoom({ scene, wrap });
  //大屏
  let daping = createDaPing({ scene });
  daping.parent = wrap;
  initRepeatPosition({ parent: wrap, child: daping });
  daping.position = daping.position.add(new BABYLON.Vector3(0, 0, 80));
  let dapingseat = createDaPingSeat({ scene });
  dapingseat.parent = wrap;
  initRepeatPosition({ parent: wrap, child: dapingseat });
  dapingseat.position = dapingseat.position.add(new BABYLON.Vector3(24, 0, 0));
  return wrap;
}

function createElevatorPeopleRoom({ scene, wrap }) {
  let elevRoom1 = BABYLON.MeshBuilder.CreateBox(
    "elevRoom1",
    { height: 6, width: 20, depth: 30 },
    scene
  );
  elevRoom1.parent = wrap;
  initRepeatPosition({ parent: wrap, child: elevRoom1 });
  elevRoom1.position = elevRoom1.position.add(new BABYLON.Vector3(95, 0, 0));
  let elevRoom2 = elevRoom1.clone("elevRoom2");
  elevRoom2.position = elevRoom2.position.add(new BABYLON.Vector3(0, 0, 30));
  let elevRoom3 = elevRoom1.clone("elevRoom3");
  elevRoom3.position = elevRoom3.position.add(new BABYLON.Vector3(65, 0, 0));
  let elevRoom4 = elevRoom1.clone("elevRoom4");
  elevRoom4.position = elevRoom4.position.add(new BABYLON.Vector3(65, 0, 30));
}
