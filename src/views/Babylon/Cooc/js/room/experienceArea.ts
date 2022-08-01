import {
    enablePhysicsImpostor,
    TestGUI,
    initRepeatPosition,
  } from "../../../js/util";
  
  export function createExperienceArea({ scene }) {
    let wrap = null;
    wrap = BABYLON.MeshBuilder.CreateBox(
      "Conference",
      { height: 6, width: 150, depth: 47 },
      scene
    );
    wrap.material = new BABYLON.StandardMaterial("roomMaterial", scene);
    wrap.material.alpha = 0.1;
    wrap.material.diffuseColor = new BABYLON.Color3(120, 20, 0);
  
    createExperienceRoom({ scene, wrap });
    // createSecondRow({ scene, wrap });
    // createThreeRow({ scene, wrap });
    // createFourRow({ scene, wrap });
    // createConferenceRoom({ scene, wrap });
    return wrap;
  }
  
  function createExperienceRoom({ scene, wrap }) {
    let elevRoom1 = BABYLON.MeshBuilder.CreateBox(
      "ExperienceRoom1",
      { height: 6, width: 45, depth: 47 },
      scene
    );
    elevRoom1.parent = wrap;
    initRepeatPosition({ parent: wrap, child: elevRoom1 });

    ////
    let elevRoom2 = elevRoom1.clone('ExperienceRoom2');
    elevRoom2.position = elevRoom2.position.add(new BABYLON.Vector3(105,0,0))
  }
  