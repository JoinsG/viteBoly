export function createDaPingSeat({ scene }) {
  let wrap = null;
  wrap = BABYLON.MeshBuilder.CreateBox(
    "DaPingSeat",
    { height: 6, width: 150, depth: 17 },
    scene
  );
  wrap.material = new BABYLON.StandardMaterial("DaPingSeatMaterial", scene);
  wrap.material.alpha = 0.4;
  wrap.material.diffuseColor = new BABYLON.Color3(120, 120, 120);

  return wrap;
}
