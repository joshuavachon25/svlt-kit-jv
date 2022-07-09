<script>
    import {Rive} from "@rive-app/canvas";
    import {onMount} from 'svelte';
    let canvas

    onMount(() => {
        new Rive({
            src: "/riv/test.riv",
            canvas: canvas,
            autoplay: true
        });
    })


</script>

<canvas bind:this={canvas} width="320" height="320"></canvas>