<script>
    import { Canvas, Mesh, HemisphereLight, PerspectiveCamera, OrbitControls, Text, useTexture } from 'threlte'
    import {SphereBufferGeometry, MeshStandardMaterial, CircleBufferGeometry} from 'three'
    import { HTML } from 'threlte/extras'
    import { spring } from 'svelte/motion'
    const sphereMaterial = new MeshStandardMaterial({ color: 0xffffff});
    let txt = 'JOSHUA VACHON'

</script>

<div class="h-screen w-full bg-cover" style="background-image: url('https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80');">
    <Canvas class="pl-24 relative">
        <PerspectiveCamera position={{ x: 2, y: 2, z: 2 }}>
            <OrbitControls enableDamping enableZoom={false}/>
        </PerspectiveCamera>
        <HemisphereLight skyColor={0x4c8eac} groundColor={0xac844c} intensity={0.6} />
        <Text interactive on:pointerenter={() => txt = 'JOSHUA L.J. VACHON'} on:pointerleave={() => txt = 'JOSHUA VACHON'} bind:text={txt} position={{y: 1.1, x:-0.5}}/>
        <Mesh castShadow interactive geometry={new SphereBufferGeometry(1, 40, 40)} material={sphereMaterial}/>
    </Canvas>

    <div class="absolute bottom-2 md:bottom-20 right-2 lg:right-1/2 flex flex-col transform lg:translate-x-1/2 select-none justify-center items-end md:items-center">
        <h1 class="text-6xl lg:text-9xl text-white leading-none"><span class="font-bold">JOSHUA</span><br>VACHON</h1>
        <p class="hidden lg:flex lg:text-2xl text-white">Développement web • Cartographie • Humanités numériques</p>
        <p class="flex lg:hidden text-xl text-white">Développement web</p>
        <p class="flex lg:hidden text-xl text-white">Cartographie</p>
        <p class="flex lg:hidden text-xl text-white">Humanités numériques</p>
    </div>


</div>