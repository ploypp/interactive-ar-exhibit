// -----JS CODE-----
//@input SceneObject enabledScene
//@input SceneObject disabledScene
//@input Component.RenderMeshVisual flowerInput
//@input Asset.Material newMaterial
//@input SceneObject sceneFlowers

script.enabledScene.enabled = true;
script.disabledScene.enabled = false;
script.flowerInput.clearMaterials;
script.flowerInput.addMaterial(script.newMaterial);
script.sceneFlowers.enabled = true;