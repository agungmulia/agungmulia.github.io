<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import * as THREE from 'three'

const canvas = ref(null)
let renderer, scene, camera, points, frame
let pointer = { x: 0, y: 0 }

const PARTICLE_COUNT = 700

function buildScene(width, height) {
  scene = new THREE.Scene()

  camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100)
  camera.position.z = 14

  const positions = new Float32Array(PARTICLE_COUNT * 3)
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 26
    positions[i * 3 + 1] = (Math.random() - 0.5) * 16
    positions[i * 3 + 2] = (Math.random() - 0.5) * 14
  }

  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

  const material = new THREE.PointsMaterial({
    size: 0.06,
    color: 0xec4899,
    transparent: true,
    opacity: 0.75,
    sizeAttenuation: true,
  })

  points = new THREE.Points(geometry, material)
  scene.add(points)
}

function onResize() {
  const { clientWidth, clientHeight } = canvas.value.parentElement
  camera.aspect = clientWidth / clientHeight
  camera.updateProjectionMatrix()
  renderer.setSize(clientWidth, clientHeight)
}

function onPointerMove(event) {
  pointer.x = (event.clientX / window.innerWidth - 0.5) * 2
  pointer.y = (event.clientY / window.innerHeight - 0.5) * 2
}

function animate() {
  points.rotation.y += 0.0007
  points.rotation.x += 0.0002
  camera.position.x += (pointer.x * 1.5 - camera.position.x) * 0.02
  camera.position.y += (-pointer.y * 1.5 - camera.position.y) * 0.02
  camera.lookAt(scene.position)
  renderer.render(scene, camera)
  frame = requestAnimationFrame(animate)
}

onMounted(() => {
  const { clientWidth, clientHeight } = canvas.value.parentElement
  buildScene(clientWidth, clientHeight)

  renderer = new THREE.WebGLRenderer({ canvas: canvas.value, alpha: true, antialias: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setSize(clientWidth, clientHeight)

  window.addEventListener('resize', onResize)
  window.addEventListener('pointermove', onPointerMove)
  animate()
})

onUnmounted(() => {
  cancelAnimationFrame(frame)
  window.removeEventListener('resize', onResize)
  window.removeEventListener('pointermove', onPointerMove)
  points?.geometry.dispose()
  points?.material.dispose()
  renderer?.dispose()
})
</script>

<template>
  <canvas ref="canvas" class="absolute inset-0 h-full w-full"></canvas>
</template>
