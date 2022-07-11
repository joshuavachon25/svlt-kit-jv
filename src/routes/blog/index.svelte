<script>
    export let posts
    let articlesAffichage = 10
</script>

<section class="min-h-screen fond flex px-10 lg:px-40 py-12 justify-evenly  flex-wrap-reverse ">
    <section>
            <div class="container mx-auto px-4">
                <div class="mb-6 flex flex-wrap justify-center">
                    <div class="mb-16 w-full text-center">
                        <span class="text-purple-400 font-bold">Piannotage claviale</span>
                        <h2 class="text-4xl lg:text-5xl font-bold font-heading">Mes billets</h2>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-16">
                        {#each posts as post, i}
                            {#if i === 0}
                                <div class="mb-6 lg:mb-0 w-full lg:w-1/2 px-3">
                                    <div class="h-full flex flex-col rounded shadow">
                                        <a href="/blog/{post.slug}"><img class="rounded-t object-cover h-80 lg:h-full w-full" src="{post.cover}" alt=""></a>
                                        <div class="mt-auto p-6 rounded-b bg-white">
                                            <span class="text-sm text-gray-400">{post.creation || ''}</span>
                                            <a href="/blog/{post.slug}"><h2 class="my-2 text-2xl font-bold">{post.title || ''}</h2></a>
                                            <p class="mb-6 text-gray-400 leading-loose">{post.resume || ''}</p>
                                            <a class="text-purple-600 hover:text-green-700 font-bold" href="/blog/{post.slug}">Lire l'article</a>
                                        </div>
                                    </div>
                                </div>
                            {:else if i >= 1 && i <= 4}
                                <div class="flex flex-wrap w-full lg:w-1/2">
                                    <div class="mb-6 w-full lg:w-1/2 px-3">
                                        <div class="rounded overflow-hidden shadow">
                                            <img class="lg:h-48 w-full rounded-t object-cover" src="https://images.unsplash.com/photo-1413752362258-7af2a667b590?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1055&amp;q=80" alt="">
                                            <div class="p-6 rounded-b bg-white">
                                                <span class="text-sm text-gray-400">24 Jan, 2021</span>
                                                <h2 class="my-2 text-2xl font-bold">Morbi scelerisque nulla et lectus</h2>
                                                <a class="text-purple-600 hover:text-purple-700 font-bold" href="#">Lire l'article</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            {:else}

                            {/if}
                        {/each}



                    </div>
                    <div>
                        {#if posts.length > articlesAffichage}
                        <a class="inline-block py-2 px-6 rounded-l-xl rounded-t-xl bg-purple-600 hover:bg-purple-700 text-gray-50 font-bold leading-loose outline-none transition duration-200" href="#">Charger plus d'articles</a>
                        {/if}
                    </div>
                </div>
            </div>
    </section>
</section>

<style>

</style>
