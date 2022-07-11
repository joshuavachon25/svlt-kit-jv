<script>
    export let projets
</script>

<section class="min-h-screen fond flex px-10 w-full py-12 flex-col">

    <div class="mb-16 w-full text-center">
        <span class="text-purple-400 font-bold">Arts, codes & mots</span>
        <h2 class="text-4xl lg:text-5xl font-bold font-heading">Mes réalisations</h2>
    </div>

    <div class="flex flex-row flex-wrap w-4/5 mx-auto ">
        {#each projets as projet}
            <div class="w-1/5">
                <a href="/portfolio/{projet.slug}"><img src="{projet.cover}" alt="" class="h-[32rem] w-full object-cover rounded-t"></a>
                <div class="p-6 rounded-b bg-white">
                    <span class="text-sm text-gray-400">{projet.creation || 'En cours'}</span>
                    <h2 class="my-2 text-2xl font-bold">{projet.title}</h2>
                    <a class="text-purple-600 hover:text-purple-700 font-bold" href="/portfolio/{projet.slug}">Découvrir le projet</a></div>
            </div>
        {/each}

    </div>
</section>

