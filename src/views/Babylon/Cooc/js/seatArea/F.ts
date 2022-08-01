import { CreateSeat } from "../seat";
import {
  enablePhysicsImpostor,
  TestGUI,
  initRepeatPosition,
} from "../../../js/util";
export function createFArea({ scene }) {
  let wrap = null;
  wrap = BABYLON.MeshBuilder.CreateBox(
    "seat",
    { height: 6, width: 150, depth: 140 },
    scene
  );
  wrap.material = new BABYLON.StandardMaterial("roomMaterial", scene);
  wrap.material.alpha = 0.1;

  createFirtRow({ scene, wrap });
  createSecondRow({ scene, wrap });
  createThreeRow({ scene, wrap });
  createFourRow({ scene, wrap });

  return wrap;
}

function createFirst({ scene, wrap, count = 9 }) {
  let x = 0;
  for (let i = 0; i < count; i++) {
    let item = CreateSeat({ scene });
    item.parent = wrap;
    initRepeatPosition({ parent: wrap, child: item });
    item.position = item.position.add(new BABYLON.Vector3(x, 0, 0));
    x += 15;
  }
}

function createSecond({ scene, wrap, count = 9 }) {
  let z = 13;
  let x = 0;
  for (let i = 0; i < count; i++) {
    let item = CreateSeat({ scene });
    item.parent = wrap;
    initRepeatPosition({ parent: wrap, child: item });
    item.position = item.position.add(new BABYLON.Vector3(x, 0, z));
    x += 15;
    item.rotation.y = Math.PI;
  }
}
function createFirtRow({ scene, wrap }) {
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
    new BABYLON.Vector3(0, 0, 12)
  );
  return firstRowWrap;
}
function createSecondRow({ scene, wrap }) {
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

  let seatSingle = CreateSeat({ scene });
  seatSingle.parent = firstRowWrap;
  initRepeatPosition({ parent: firstRowWrap, child: seatSingle });
  let x = 15;
  for (let i = 0; i < 16; i++) {
    if (i === 8) {
      x = 15;
    }
    if ([1, 2, 6, 9, 10, 14].includes(i)) {
      x += 15;
      continue;
    }

    let cloneitem = seatSingle.clone();

    cloneitem.position = cloneitem.position.add(new BABYLON.Vector3(x, 0, 0));
    if (i > 7) {
      cloneitem.position = cloneitem.position.add(
        new BABYLON.Vector3(0, 0, 13)
      );
      cloneitem.rotation.y = Math.PI;
    }
    let seatNumber = TestGUI('F01-01',scene)
    seatNumber.parent = cloneitem
    x += 15;
  }
  // createFirst({ scene, wrap: firstRowWrap });
  // createSecond({ scene, wrap: firstRowWrap });

  firstRowWrap.position = firstRowWrap.position.add(
    new BABYLON.Vector3(0, 0, 42)
  );
  seatSingle.dispose();
  return firstRowWrap;
}

function createThreeRow({ scene, wrap }) {
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
    new BABYLON.Vector3(0, 0, 72)
  );
  return firstRowWrap;
}
function createFourRow({ scene, wrap }) {
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
    new BABYLON.Vector3(0, 0, 102)
  );
  return firstRowWrap;
}
