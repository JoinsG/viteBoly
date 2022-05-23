function initRepeatPosition({ parent, child }) {
    let { x: px, y: py, z: pz } = parent.getBoundingInfo().minimum ?? {};
    let { x: cx, y: cy, z: cz } = child.getBoundingInfo().minimum ?? {};
    let { x, y, z } = { x: px - cx, y: py - cy, z: pz - cz };
    console.log(x, y, z);
  
    child.position.x = x;
    child.position.y = y;
    child.position.z = z;
  }
export {initRepeatPosition };