import {
    enablePhysicsImpostor,
    TestGUI,
    initRepeatPosition,
  } from "../../../../js/util";
  
  export function createQianTaiBackRoom({ scene }) {
    let wrap = null;
    wrap = BABYLON.MeshBuilder.CreateBox(
      "InterviewRoom",
      { height: 6, width: 95, depth: 17 },
      scene
    );
    wrap.material = new BABYLON.StandardMaterial("roomMaterial", scene);
    wrap.material.alpha = 1;
    wrap.material.diffuseColor = new BABYLON.Color3(0, 0, 1);
  
    // createElevatorPeopleRoom({ scene, wrap });
    // createSecondRow({ scene, wrap });
    // createThreeRow({ scene, wrap });
    // createFourRow({ scene, wrap });
    // createConferenceRoom({ scene, wrap });
    return wrap;
  }
  
  function createElevatorPeopleRoom({ scene, wrap }) {
    let elevRoom1 = BABYLON.MeshBuilder.CreateBox(
      "InterviewRoom1",
      { height: 6, width: 37.5, depth: 18 },
      scene
    );
    elevRoom1.parent = wrap;
    initRepeatPosition({ parent: wrap, child: elevRoom1 });

    elevRoom1.material = new BABYLON.StandardMaterial("roomMaterial", scene);
    elevRoom1.material.alpha = 0.3;
    elevRoom1.material.diffuseColor = new BABYLON.Color3(1, 0, 0);

    elevRoom1.position = elevRoom1.position.add(new BABYLON.Vector3(1,0,0))
    let elevRoom2 = elevRoom1.clone('InterviewRoom2')
    elevRoom2.position = elevRoom2.position.add(new BABYLON.Vector3(38.5,0,0))
    // let elevRoom3 = elevRoom1.clone('elevRoom3')
    // elevRoom3.position = elevRoom3.position.add(new BABYLON.Vector3(65,0,0))
    // let elevRoom4 = elevRoom1.clone('elevRoom4')
    // elevRoom4.position = elevRoom4.position.add(new BABYLON.Vector3(65,0,30))
  }
  