import * as BABYLON from "babylonjs";

let BathRoomWrap1 = null

let BathRoomWallLeft = null
let BathRoomWallRight = null
let BathRoomWallFront = null


export function CreateBathRoom({scene}:{scene:BABYLON.Scene}){
    BathRoomWrap1 = BABYLON.MeshBuilder.CreateBox('masterRoom',{
        width:3,
        height:4,
        depth: 1.7
    },scene)
    BathRoomWrap1.material = new BABYLON.StandardMaterial('roomMaterial', scene)
    BathRoomWrap1.position = new BABYLON.Vector3(1.5,2,4.65)
    BathRoomWrap1.material.alpha = 0.1

    BathRoomWallLeft = BABYLON.MeshBuilder.CreateBox('masterRoom',{
        width:3,
        height:4,
        depth: 0.1
    },scene)
    BathRoomWallLeft.parent = BathRoomWrap1
    BathRoomWallLeft.position = new BABYLON.Vector3(0,0,-0.85)
    BathRoomWallRight = BABYLON.MeshBuilder.CreateBox('masterRoom',{
        width:3,
        height:4,
        depth: 0.1
    },scene)
    BathRoomWallRight.parent = BathRoomWrap1
    BathRoomWallRight.position = new BABYLON.Vector3(0,0,0.85)
    BathRoomWallFront = BABYLON.MeshBuilder.CreateBox('masterRoom',{
        width:0.1,
        height:4,
        depth: 1.7
    },scene)
    BathRoomWallFront.parent = BathRoomWrap1
    BathRoomWallFront.position = new BABYLON.Vector3(-1.25,0,0)
}