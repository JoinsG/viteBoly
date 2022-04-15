import * as BABYLON from "babylonjs";

let Rooms = null

let WallLeft = null
let WallRight = null
let WindowWall = null
let WindowScene = null
export function CreateMasterRoom({scene}:{scene:BABYLON.Scene}){
    Rooms = BABYLON.MeshBuilder.CreateBox('masterRoom',{
        width:3.9,
        height:4,
        depth: 3.8
    },scene)
    Rooms.material = new BABYLON.StandardMaterial('roomMaterial', scene)
    Rooms.position = new BABYLON.Vector3(1.95,2,1.9)
    Rooms.material.alpha = 0.1

    WallLeft= BABYLON.MeshBuilder.CreateBox('masterRoom',{
        width:.1,
        height:4,
        depth: 5.5
    },scene)
    WallLeft.parent = Rooms
    WallLeft.position = new BABYLON.Vector3(1.9,0,0.85)
    WallRight = WallLeft.clone()
    WallRight.position = new BABYLON.Vector3(-1.9,0,0.85)

    WindowWall = BABYLON.MeshBuilder.CreateBox('masterRoom',{
        width:3.7,
        height:4,
        depth: .1
    },scene)
    WindowWall.parent = Rooms


    WindowScene = BABYLON.MeshBuilder.CreateBox('masterRoom',{
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
    newMesh.position = new BABYLON.Vector3(0,0,-1.85)

    WindowWall.dispose()
    WindowScene.dispose()
}