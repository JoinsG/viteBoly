// import * as BABYLON from "babylonjs";
function initRepeatPosition({ parent, child }) {
  let { x: px, y: py, z: pz } = parent.getBoundingInfo().minimum ?? {};
  let { x: cx, y: cy, z: cz } = child.getBoundingInfo().minimum ?? {};
  let { x, y, z } = { x: px - cx, y: py - cy, z: pz - cz };
  // console.log(x, y, z);

  child.position.x = x;
  child.position.y = y;
  child.position.z = z;
}
//开启重力
export function enablePhysicsImpostor({
  mesh,
  scene,
  op = { mass: 0, friction: 0.5, restitution: 0.7 },
}) {
  mesh.physicsImpostor = new BABYLON.PhysicsImpostor(
    mesh,
    BABYLON.PhysicsImpostor.BoxImpostor,
    op,
    scene
  );
  mesh.checkCollisions = true;
}

function setMaterialDefault({ mesh, scene }) {
  mesh.material = new BABYLON.StandardMaterial("roomMaterial", scene);
  // mesh.material.diffuseColor = new BABYLON.Color3(1, 0, 0)
}

const loadScriptAsync = (url: string): Promise<void> => {
  return new Promise((resolve) => {
    const tag = document.createElement("script");
    tag.onload = () => {
      resolve();
    };
    tag.onerror = () => {
      throw new Error(`failed to load ${url}`);
    };
    tag.async = true;
    tag.src = url;
    document.head.appendChild(tag);
  });
};

const loadAmmoModule = async (): Promise<void> => {
  // there were some wasm checks here that I never tested out so I don't remember the og source here
  // console.log(wasmSupported ? 'WebAssembly is supported' : 'WebAssembly is not supported')
  // if (wasmSupported) loadScriptAsync(`${path}/ammo.wasm.js`, () => doneCallback())
  await loadScriptAsync("./src/assets/js/ammo.js");
  // await loadScriptAsync("./src/assets/js/gui.js");
};

function TestGUI(text,scene) {
  console.log(1)
  // GUI
  var plane = BABYLON.MeshBuilder.CreateTiledPlane("plane",{
    size:6,
    tileSize:6
  },scene);

  plane.position.y = 4;

  plane.billboardMode = BABYLON.Mesh.BILLBOARDMODE_ALL;

  var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateForMesh(plane);

  var button1 = BABYLON.GUI.Button.CreateSimpleButton('butt1', `${text}`);
  button1.width = 6;
  button1.height = 6.4;
  button1.color = "white";
  button1.fontSize = 250;
  button1.background = "green";
  button1.onPointerUpObservable.add(function () {
    alert("you did it!");
  });
  advancedTexture.addControl(button1);
  return plane;
}

export { initRepeatPosition, loadAmmoModule, setMaterialDefault,TestGUI };
