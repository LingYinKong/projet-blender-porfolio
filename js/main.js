// import * as THREE from 'three'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
// import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
// import Stats from 'three/examples/jsm/libs/stats.module'

// const scene = new THREE.Scene()
// scene.add(new THREE.AxesHelper(5))

// const light = new THREE.PointLight(0xffffff, 1000)
// light.position.set(2.5, 7.5, 15)
// scene.add(light)

// const camera = new THREE.PerspectiveCamera(
//     75,
//     window.innerWidth / window.innerHeight,
//     0.1,
//     1000
// )
// camera.position.z = 3

// const renderer = new THREE.WebGLRenderer()
// renderer.setSize(window.innerWidth, window.innerHeight)
// document.body.appendChild(renderer.domElement)

// const controls = new OrbitControls(camera, renderer.domElement)
// controls.enableDamping = true

// // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })

// const objLoader = new OBJLoader()
// objLoader.load(
//     './Bears.obj',
//     (object) => {
//         // (object.children[0] as THREE.Mesh).material = material
//         // object.traverse(function (child) {
//         //     if ((child as THREE.Mesh).isMesh) {
//         //         (child as THREE.Mesh).material = material
//         //     }
//         // })
//         scene.add(object)
//     },
//     (xhr) => {
//         console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
//     },
//     (error) => {
//         console.log(error)
//     }
// )

// window.addEventListener('resize', onWindowResize, false)
// function onWindowResize() {
//     camera.aspect = window.innerWidth / window.innerHeight
//     camera.updateProjectionMatrix()
//     renderer.setSize(window.innerWidth, window.innerHeight)
//     render()
// }

// const stats = new Stats()
// document.body.appendChild(stats.dom)

// function animate() {
//     requestAnimationFrame(animate)

//     controls.update()

//     render()

//     stats.update()
// }

// function render() {
//     renderer.render(scene, camera)
// }

// animate()

// const texture = new THREE.TextureLoader().load('textures/land_ocean_ice_cloud_2048.jpg' ); 
// // immediately use the texture for material creation 

// const material = new THREE.MeshBasicMaterial( { map:texture } );

// // instantiate a loader
// const loader = new THREE.TextureLoader();

// // load a resource
// loader.load(
// 	// resource URL
// 	'medias/bEAR_tECTURE.001.png',

// 	// onLoad callback
// 	function ( texture ) {
// 		// in this example we create the material when the texture is loaded
// 		const material = new THREE.MeshBasicMaterial( {
// 			map: texture
// 		 } );
// 	},

// 	// onProgress callback currently not supported
// 	undefined,

// 	// onError callback
// 	function ( err ) {
// 		console.error( 'An error happened.' );
// 	}
// );