import * as BABYLON from "babylonjs";

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
}