import {
  enablePhysicsImpostor,
  TestGUI,
  initRepeatPosition,
} from "../../js/util";

export function CreateSeat({ scene }) {
  let SEATWRAP = null;
  let SEAT_TABLE = null;
  let SEAT_STOOL = null;

  SEATWRAP = BABYLON.MeshBuilder.CreateBox(
    "seat",
    { height: 15, width: 15, depth: 13 },
    scene
  );
  SEAT_TABLE = BABYLON.MeshBuilder.CreateBox(
    "table",
    { height: 10, width: 15, depth: 5 },
    scene
  );
  SEAT_STOOL = BABYLON.MeshBuilder.CreateSphere(
    "stool",
    { diameter: 5 },
    scene
  );

  SEATWRAP.material = new BABYLON.StandardMaterial('roomMaterial', scene)
  SEATWRAP.material.alpha = 0.1

  SEAT_TABLE.parent = SEATWRAP;
  initRepeatPosition({ parent: SEATWRAP, child: SEAT_TABLE });
  SEAT_TABLE.position = SEAT_TABLE.position.add(new BABYLON.Vector3(0,0,8))
  SEAT_STOOL.parent = SEATWRAP;
  initRepeatPosition({ parent: SEATWRAP, child: SEAT_STOOL });
  SEAT_STOOL.position = SEAT_STOOL.position.add(new BABYLON.Vector3(5,0,0))
  SEATWRAP.isPickable = false;
  return SEATWRAP;
}
