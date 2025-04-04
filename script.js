if (navigator.xr) {
    console.log("WebXR disponible");
} else {
    console.log("WebXR no soportado en este navegador.");
}

document.getElementById("start-ar").addEventListener("click", async () => {
    if (navigator.xr) {
        try {
            const session = await navigator.xr.requestSession("immersive-ar", {
                requiredFeatures: ["local"]
            });

            const renderer = new THREE.WebGLRenderer({ alpha: true });
            renderer.xr.enabled = true;
            document.body.appendChild(renderer.domElement);

            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 20);
            scene.add(camera);

            const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
            scene.add(light);

            const loader = new THREE.GLTFLoader();
            loader.load("modelo.glb", function (gltf) {
                scene.add(gltf.scene);
            });

            const xrRefSpace = await session.requestReferenceSpace("local");
            const onXRFrame = (time, frame) => {
                session.requestAnimationFrame(onXRFrame);
                renderer.render(scene, camera);
            };

            session.requestAnimationFrame(onXRFrame);
        } catch (error) {
            console.error("Error al iniciar AR:", error);
        }
    } else {
        alert("Tu dispositivo no es compatible con WebXR.");
    }
});
