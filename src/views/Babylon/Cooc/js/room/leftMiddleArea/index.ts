import {
  enablePhysicsImpostor,
  TestGUI,
  initRepeatPosition,
} from "../../../../js/util";
import { createInterviewRoom } from "./interviewRoom";
import { createQianTaiBackRoom } from "./qianTaiBackRoom";
import { createBiggerHuiuiRoom } from "./biggerHuiyi";
//   import { createDaPingSeat } from "./dapingSeat";
export function createQianTaiArea({ scene }) {
  let wrap = null;
  wrap = BABYLON.MeshBuilder.CreateBox(
    "Conference",
    { height: 8, width: 270, depth: 304 },
    scene
  );
  wrap.material = new BABYLON.StandardMaterial("roomMaterial", scene);
  wrap.material.alpha = 0.25;
  wrap.material.diffuseColor = new BABYLON.Color4(1, 1, 1, 0.25);
  // createElevatorPeopleRoom({ scene, wrap });
  // createSecondRow({ scene, wrap });
  // createThreeRow({ scene, wrap });
  // createFourRow({ scene, wrap });
  // createConferenceRoom({ scene, wrap });
  //面试间
  let InterviewRoom = createInterviewRoom({ scene });
  InterviewRoom.parent = wrap;
  initRepeatPosition({ parent: wrap, child: InterviewRoom });
  InterviewRoom.position = InterviewRoom.position.add(
    new BABYLON.Vector3(5, 0, 0)
  );
  //前台后面的房间
  let QianTaiBackRoom = createQianTaiBackRoom({ scene });
  QianTaiBackRoom.parent = wrap;
  initRepeatPosition({ parent: wrap, child: QianTaiBackRoom });
  QianTaiBackRoom.position = QianTaiBackRoom.position.add(
    new BABYLON.Vector3(87, 0, 0)
  );
  //前台旁边大会议室
  let BiggerHuiuiRoom = createBiggerHuiuiRoom({ scene });
  BiggerHuiuiRoom.parent = wrap;
  initRepeatPosition({ parent: wrap, child: BiggerHuiuiRoom });
  BiggerHuiuiRoom.position = BiggerHuiuiRoom.position.add(
    new BABYLON.Vector3(181, 0, 0)
  );
  // let dapingseat = createDaPingSeat({ scene });
  // dapingseat.parent = wrap;
  // initRepeatPosition({ parent: wrap, child: dapingseat });
  // dapingseat.position = dapingseat.position.add(new BABYLON.Vector3(24, 0, 0));
  return wrap;
}
