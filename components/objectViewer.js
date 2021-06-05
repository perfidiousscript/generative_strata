import Head from "next/head";
import { useEffect } from "react";
import Image from "next/image";
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  BoxGeometry,
  PlaneGeometry,
  MeshPhongMaterial,
  Mesh,
  DirectionalLight,
  TextureLoader,
  Texture,
  RepeatWrapping,
  NearestFilter,
  DoubleSide,
  AxesHelper,
  WireframeGeometry,
  LineBasicMaterial,
  LineSegments,
} from "three";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

export default function ObjectViewer(props) {
  function displayObj(title) {
    const elementId = "#" + title;
    console.log("elementID:", elementId);
    const canvas = document.querySelector(elementId);
    const renderer = new WebGLRenderer({ canvas });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene = new Scene();
    const axesHelper = new AxesHelper(5);
    scene.add(axesHelper);

    {
      const color = 0xffffff;
      const intensity = 1;
      const light = new DirectionalLight(color, intensity);
      light.position.set(0, 5, 10);
      scene.add(light);
    }

    const fov = 45;
    const aspect = 2;
    const near = 0.1;
    const far = 100;
    const camera = new PerspectiveCamera(fov, aspect, near, far);
    camera.position.set = (0, 20, 20);

    // const controls = new OrbitControls(camera, canvas);
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 3, 0);
    controls.update();

    // Checker Plane
    // {
    //   const planeSize = 40;
    //   const loader = new TextureLoader();
    //   const texture = loader.load("public/images/checker.png");
    //   texture.wrapS = RepeatWrapping;
    //   texture.wrapT = RepeatWrapping;
    //   texture.magFilter = NearestFilter;
    //   const repeats = planeSize / 2;
    //   texture.repeat.set(repeats, repeats);
    //
    //   const planeGeo = new PlaneGeometry(planeSize, planeSize);
    //   const planeMat = new MeshPhongMaterial({
    //     map: texture,
    //     side: DoubleSide,
    //   });
    //
    //   const mesh = new Mesh(planeGeo, planeMat);
    //   mesh.rotation.x = Math.PI * -0.5;
    //   scene.add(mesh);
    // }

    {
      var material = new MeshPhongMaterial({
        color: "white",
        side: DoubleSide,
      });
      const objLoader = new OBJLoader();
      objLoader.load(`objects/${title}.obj`, function (obj) {
        obj.traverse(
          function (child) {
            if (child instanceof Mesh) {
              child.material = material;
            }
            scene.add(obj);
            obj.scale.multiplyScalar(0.03);
            obj.position.set(-30, 2, 0);
            scene.add(obj);
            renderer.render(scene, camera);
            requestAnimationFrame(render);
          },
          function (xhr) {
            console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
          },
          function (error) {
            console.log("An error happened", error);
          }
        );
      });
    }

    function render(time) {
      time *= 0.001;

      renderer.render(scene, camera);
      requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
  }

  useEffect(() => {
    displayObj(props.title);
  }, []);

  return <canvas id={props.title}></canvas>;
}
