<script>
    import {Rive} from "@rive-app/canvas";
    import {onMount} from 'svelte';
    let canvas

    onMount(() => {
        new Rive({
            src: "/riv/intro.riv",
            canvas: canvas,
            autoplay: true
        });
    })


</script>

<canvas bind:this={canvas} class="max-w-sm md:max-w-full" width="1024" height="800"></canvas>
