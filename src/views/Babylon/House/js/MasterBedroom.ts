import * as BABYLON from "babylonjs";
import { enablePhysicsImpostor, setMaterialDefault } from "../../js/util";
import { initActionManager } from "../../js/ActionManager";

let Rooms = null;

let WallLeft = null;
let WallRight = null;
let WindowWall = null;
let WindowScene = null;
export function CreateMasterRoom({ scene }: { scene: BABYLON.Scene }) {
  Rooms = BABYLON.MeshBuilder.CreateBox(
    "masterRoom",
    {
      width: 7.8,
      height: 8,
      depth: 7.6,
    },
    scene
  );
  Rooms.material = new BABYLON.StandardMaterial("roomMaterial", scene);
  Rooms.position = new BABYLON.Vector3(3.9, 4, 3.8);
  Rooms.material.alpha = 0.1;

  Rooms.isPickable = false;

  WallLeft = BABYLON.MeshBuilder.CreateBox(
    "masterRoom-WallLeft",
    {
      width: 0.2,
      height: 8,
      depth: 11,
    },
    scene
  );
  setMaterialDefault({ mesh: WallLeft, scene });
  initActionManager({ mesh: WallLeft, scene }).then((mes) => {
    console.log(2);
    mes.actionManager.registerAction(
      new BABYLON.SetValueAction(
        BABYLON.ActionManager.OnPickTrigger,
        mes.material,
        "diffuseColor",
        BABYLON.Color3.Black()
      )
    );
  });
  WallLeft.parent = Rooms;
  WallLeft.position = new BABYLON.Vector3(3.8, 0, 1.7);
  // WallRight = WallLeft.clone("masterRoom-WallRight",null,true,true);
  WallRight = BABYLON.MeshBuilder.CreateBox(
    "masterRoom-WallLeft",
    {
      width: 0.2,
      height: 8,
      depth: 7.5,
    },
    scene
  );
  WallRight.parent = Rooms;
  // WallRight.name = "masterRoom-WallRight";
  WallRight.position = new BABYLON.Vector3(-3.8, 0, -0.05);
  setMaterialDefault({ mesh: WallRight, scene });
  initActionManager({ mesh: WallRight, scene }).then((mes) => {
    console.log(2);
    mes.actionManager.registerAction(
      new BABYLON.SetValueAction(
        BABYLON.ActionManager.OnPickTrigger,
        mes.material,
        "diffuseColor",
        BABYLON.Color3.Black()
      )
    );
  });

  WindowWall = BABYLON.MeshBuilder.CreateBox(
    "masterRoom",
    {
      width: 7.4,
      height: 8,
      depth: 0.2,
    },
    scene
  );
  WindowWall.parent = Rooms;

  WindowScene = BABYLON.MeshBuilder.CreateBox(
    "masterRoom",
    {
      width: 3,
      height: 2,
      depth: 0.2,
    },
    scene
  );
  WindowScene.parent = WindowWall;

  let sphereCSG = BABYLON.CSG.FromMesh(WindowWall);
  let boxCSG = BABYLON.CSG.FromMesh(WindowScene);
  let booleanCSG = sphereCSG.subtract(boxCSG);
  let newMesh = booleanCSG.toMesh("masterRoom-window", null, scene);
  newMesh.parent = Rooms;
  newMesh.position = new BABYLON.Vector3(0, 0, -3.7);
  setMaterialDefault({ mesh: newMesh, scene });

  WindowWall.dispose();
  WindowScene.dispose();

  //开启物理
  //开启碰撞
  enablePhysicsImpostor({ mesh: WallLeft, scene });
  enablePhysicsImpostor({ mesh: WallRight, scene });
  enablePhysicsImpostor({ mesh: newMesh, scene });
}
