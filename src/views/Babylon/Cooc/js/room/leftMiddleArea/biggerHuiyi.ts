import {
  enablePhysicsImpostor,
  TestGUI,
  initRepeatPosition,
} from "../../../../js/util";

export function createBiggerHuiuiRoom({ scene }) {
  let wrap = null;

  const shape = [
    new BABYLON.Vector3(0, 0, 0),
    new BABYLON.Vector3(0, 0, 17),
    new BABYLON.Vector3(37.5, 0, 80),
    new BABYLON.Vector3(89, 0, 80),
    new BABYLON.Vector3(89, 0, 0),
    new BABYLON.Vector3(0, 0, 0),
  ];
  //Holes in XoZ plane
  const holes = [];
  holes[0] = [
    new BABYLON.Vector3(1, 0, 0),
    new BABYLON.Vector3(1, 0, 17),
    new BABYLON.Vector3(37.5, 0, 79),
    new BABYLON.Vector3(88, 0, 79),
    new BABYLON.Vector3(88, 0, 0),
    new BABYLON.Vector3(0, 0, 0),
  ];

  // createElevatorPeopleRoom({ scene, wrap });
  // createSecondRow({ scene, wrap });
  // createThreeRow({ scene, wrap });
  // createFourRow({ scene, wrap });
  // createConferenceRoom({ scene, wrap });
  wrap = BABYLON.MeshBuilder.ExtrudePolygon("polygon", {
    shape: shape,
    holes: holes,
    depth:6,
    sideOrientation: BABYLON.Mesh.DOUBLESIDE,
  }); //scene is
  wrap.material = new BABYLON.StandardMaterial("roomMaterial", scene);
  wrap.material.alpha = 1;
  wrap.material.diffuseColor = new BABYLON.Color3(0, 1, 1);
  return wrap;
}
