import * as BABYLON from "babylonjs";
let veries = [
  // [0,0,0],
  [7.8, 0, 0],
  [12, 0, 0],
  [0, 0, 3.2],
  [5.8, 0, 0],
  [0, 0, 8.4],
  [-5.2, 0, 0],
  [0, 0, 5.1],
  [-5.2, 0, 0],
  [0, 0, 5.1],
  [-5.8, 0, 0],
  [-3.4, 0, 0],
  [-6, 0, 0],
  [0, 0, -6.6],
  [0, 0, -4.2],
  [0, 0, -3.4],
  [0, 0, -7.6],
];

let pointsScene:any[] = [];
let pointsLists: BABYLON.Vector3[] = [];
export function SetVectoriesPoint({ scene,camera }: { scene: BABYLON.Scene }) {
  //   test(scene)
  let re = [0, 0, 0];
  veries.forEach((item, index) => {
    let point = BABYLON.MeshBuilder.CreateSphere(
      `point${index}`,
      {
        diameter: 0.01,
      },
      scene
    );
    let [x, y, z] = item;
    re[0] += x;
    re[1] += y;
    re[2] += z;
    point.position = new BABYLON.Vector3(...re);
    pointsLists.push(point.position);
    pointsScene.push(point);
    // point.lookAt(camera.getWorldMatrix());
    // let txt = makeTextPlane(index, new BABYLON.Color3(0, 0, 0), 2, scene);
    // txt.parent = point;
  });
  console.log(pointsLists);
  console.log(pointsScene);
}
export function SetVectoriesLines({ scene }: { scene: BABYLON.Scene }) {
  let lineSystem = BABYLON.MeshBuilder.CreateLines(
    "lineSystem",
    { points: pointsLists },
    scene
  );
}
//标识点number
function makeTextPlane(text: any, color: any, size: any, scene: any) {
  var plane = BABYLON.MeshBuilder.CreatePlane("TextPlane", { size,sideOrientation: BABYLON.Mesh.DOUBLESIDE }, scene);
  var s = new BABYLON.StandardMaterial("TextPlaneMaterial", scene);
  //   plane.material.backFaceCulling = false;
  var dynamicTexture = new BABYLON.DynamicTexture(
    "DynamicTexture",
    { width: 512, height: 256 },
    scene,
    true
  );
  dynamicTexture.hasAlpha = true;
  dynamicTexture.drawText(
    text,
    75,
    135,
    "bold 136px Arial",
     "pink", "white", true, true
  );
  s.diffuseTexture = dynamicTexture;
  s.specularColor = new BABYLON.Color3(0, 0, 0);
  plane.material = s;
  return plane;
}

function test(scene) {
  var groundWidth = 20;
  var groundHeight = 10;

  var ground = BABYLON.MeshBuilder.CreatePlane(
    "ground1",
    { width: groundWidth, height: groundHeight },
    scene
  );

  //Create dynamic texture
  var textureResolution = 512;
  var textureGround = new BABYLON.DynamicTexture(
    "dynamic texture",
    { width: 512, height: 256 },
    scene,
    true
  );
  // var textureContext = textureGround.getContext();

  var materialGround = new BABYLON.StandardMaterial("Mat", scene);
  materialGround.diffuseTexture = textureGround;
  ground.material = materialGround;

  //Add text to dynamic texture
  var font = "bold 44px monospace";
  textureGround.drawText("Grass", 5, 235, font, "green", "white", true, true);
}


export {
    pointsScene
}