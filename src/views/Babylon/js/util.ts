function initRepeatPosition({ parent, child }) {
    let { x: px, y: py, z: pz } = parent.getBoundingInfo().minimum ?? {};
    let { x: cx, y: cy, z: cz } = child.getBoundingInfo().minimum ?? {};
    let { x, y, z } = { x: px - cx, y: py - cy, z: pz - cz };
    console.log(x, y, z);
  
    child.position.x = x;
    child.position.y = y;
    child.position.z = z;
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
};
export {initRepeatPosition,loadAmmoModule };