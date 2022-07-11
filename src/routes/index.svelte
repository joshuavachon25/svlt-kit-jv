<script>
    import { Canvas, Mesh, HemisphereLight, PerspectiveCamera, OrbitControls, Text} from 'threlte'
    import {SphereBufferGeometry, MeshStandardMaterial, TextureLoader} from 'three'
    import {onMount} from "svelte";
    import { spring } from 'svelte/motion'

    let earthMaterial = new MeshStandardMaterial({color: 0x000000})

    function createMaterial() {
        const loader = new TextureLoader();
        loader.loadAsync("https://raw.githubusercontent.com/AlexWarnes/three-sc-sandbox/main/static/sc_textures/earthmap1k.jpg")
            .then((texture) => {
                earthMaterial = new MeshStandardMaterial({
                    map: texture,
                })
            })
    }

    onMount(() => {
        createMaterial()
    })

</script>
<!--
<div class="h-screen w-full bg-cover" style="background-image: url('https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80');">
    <Canvas class="pl-24 relative">
        <PerspectiveCamera position={{ x: 0, y: 0, z: 4 }}>
            <OrbitControls enableDamping enableZoom={false}/>
        </PerspectiveCamera>
        <HemisphereLight skyColor={0xffffff} groundColor={0xac844c} intensity={0.5} />
        <Text text="JOSHUA" outlineWidth="1" fontSize="0.3" anchorX='center' anchorY='bottom-baseline' position={{y: 0.1, x:0, z: 1.05}}/>
        <Text text="VACHON" fontSize="0.25" anchorX='center' anchorY='top-baseline' position={{y: -0.1, x:0, z: 1.05}}/>
        <Text text="Développement web • Cartographie • Humanités numériques" fontSize="0.05" anchorX='center' anchorY='center' position={{y: -0.15, x:0, z: 1.05}}/>
        <Mesh castShadow interactive geometry={new SphereBufferGeometry(1, 40, 40)} material={earthMaterial}/>
    </Canvas>

</div>-->

<section class="min-h-screen fond flex px-10 w-full py-12 flex-col">


</section>