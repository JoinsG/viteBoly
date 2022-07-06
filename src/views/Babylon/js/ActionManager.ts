// import * as BABYLON from "babylonjs";
function initActionManager({
  scene,
  mesh,
}: {
  scene: BABYLON.Scene;
  mesh: BABYLON.Mesh;
}){
  mesh.actionManager = new BABYLON.ActionManager(scene);
  return Promise.resolve(mesh);
}




export {
    initActionManager
}