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
        <div class="container px-4 mx-auto mb-10 lg:mb-0">
            <div class="w-full lg:w-1/2">
                <div class="flexlg:h-96 ">

                    <h2 class="mb-8 lg:mb-2 text-3xl leading-tight md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight font-bold font-heading">{title}</h2>
                    <div class="flex items-center justify-center">
                        <div class="mr-6">
                            <img class="w-16 h-16 object-cover rounded-full" src="{cover}" alt="">
                        </div>
                        <div>
                            <h3 class="text-2xl font-bold font-heading">Danny Bailey</h3>
                            <p class="text-lg text-indigo-500">February 26, 2021</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container px-4 mx-auto">
            <div class="max-w-2xl mx-auto pt-12 lg:pt-20 article">
                <slot></slot>
            </div>
        </div>
    </section>

</section>


<style>

</style>

