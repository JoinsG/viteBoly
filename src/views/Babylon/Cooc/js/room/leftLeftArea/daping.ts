
export function createDaPing({ scene }){
    let wrap = null;
    wrap = BABYLON.MeshBuilder.CreateBox(
      "daping",
      { height: 6, width: 150, depth: 1 },
      scene
    );
    wrap.material = new BABYLON.StandardMaterial("roomMaterial", scene);
    wrap.material.alpha = 0.1;
    wrap.material.diffuseColor = new BABYLON.Color3(120, 20, 0);

    return wrap;
}