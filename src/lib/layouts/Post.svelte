<script>
    export let title, cover, video
</script>

<section class="min-h-screen bg-fixed bg-cover bg-no-repeat bg-center flex px-10 lg:px-40 pt-28 pb-16 " style="background-image: url({cover})">

    <section class="relative w-3/5 pb-20 mx-auto bg-white bg-opacity-90 rounded-xl">
        {#if video}
            <div class="aspect-video">
                <iframe width="100%" src="https://www.youtube.com/embed/{video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="aspect-video"></iframe>
            </div>

        {/if}

        <div class="container px-4 mx-auto">

            <div class="max-w-2xl mx-auto pt-12 lg:pt-20 article">
                <h2 class="text-3xl leading-tight md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight font-bold font-heading">{title}</h2>
                <div class="text-xs mb-8">21 aout 2019 👾 Joshua L.J. Vachon</div>
                <slot></slot>
            </div>
        </div>
    </section>

</section>


<style>

</style>

