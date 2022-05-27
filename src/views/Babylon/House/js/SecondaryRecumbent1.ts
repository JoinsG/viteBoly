import * as BABYLON from "babylonjs";
import { initRepeatPosition } from "../../js/util";

let Rooms = null

let WallLeft = null
let WallRight = null
let WindowWall = null
let WindowScene = null
export function CreateSecondaryRecumbent1({scene}:{scene:BABYLON.Scene}){
    Rooms = BABYLON.MeshBuilder.CreateBox('SecondaryRecumbent1',{
        width:2.9,
        height:4,
        depth: 4.2
    },scene)
    Rooms.material = new BABYLON.StandardMaterial('roomMaterial', scene)
    Rooms.position = new BABYLON.Vector3(11.35,2,3.65)
    Rooms.material.alpha = 0.1

    WallLeft= BABYLON.MeshBuilder.CreateBox('SecondaryRecumbent1',{
        width:.1,
        height:4,
        depth: 4.2
    },scene)
    WallLeft.parent = Rooms
    WallLeft.position = new BABYLON.Vector3(1.5,0,0)
    WallRight = WallLeft.clone()
    WallRight.position = new BABYLON.Vector3(-1.4,0,0)

    WindowWall = BABYLON.MeshBuilder.CreateBox('SecondaryRecumbent1',{
        width:2.9,
        height:4,
        depth: .1
    },scene)
    WindowWall.parent = Rooms


    WindowScene = BABYLON.MeshBuilder.CreateBox('SecondaryRecumbent1',{
        width:1.5,
        height:1,
        depth: .1
    },scene)
    WindowScene.parent = WindowWall
    
    let sphereCSG = BABYLON.CSG.FromMesh(WindowWall);
    let boxCSG = BABYLON.CSG.FromMesh(WindowScene);
    let booleanCSG = sphereCSG.subtract(boxCSG);
    let newMesh = booleanCSG.toMesh("newMesh", null, scene);
    newMesh.parent = Rooms
    newMesh.position = new BABYLON.Vector3(0,0,-2.05)

    WindowWall.dispose()
    WindowScene.dispose()


    let points1 = [
        [0, 0, 0],
        [2.9, 0, 0],
        [2.9, 0, 0.1],
        [0.1, 0, 0.1],
        [0.1, 0, 2.9],
        [0, 0, 2.9],
        [0, 0, 0],
      ].map((item) => {
        let [x, y, z] = item;
        return new BABYLON.Vector3(x, y, z);
      });
      let Wall = BABYLON.MeshBuilder.ExtrudePolygon(
        "KitchenDesktop",
        { shape: points1, depth: 4, sideOrientation: BABYLON.Mesh.DOUBLESIDE },
        scene
      );
      Wall.parent = Rooms;
      initRepeatPosition({ parent: Rooms, child: Wall });
      // Wall.position = Wall.position.add(new BABYLON.Vector3(9.9, 0, 5.8));
      Wall.position = Wall.position.add(new BABYLON.Vector3(0, 0, 4.2));
}