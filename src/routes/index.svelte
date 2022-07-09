<script>
    import Anim from "../lib/components/Anim.svelte";
</script>

<section class="h-screen bg-[url('https://images.unsplash.com/photo-1556139943-4bdca53adf1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-no-repeat bg-center flex px-10 lg:px-40 justify-evenly items-center flex-wrap-reverse ">
    <div>
        <h1 class="text-5xl lg:text-7xl text-center">Joshua<b>Vachon</b></h1>
        <p class="max-w-md text-sm mt-5 px-5 text-justify">Co-fondateur, développeur et reponsable technique pour le Studio Cyberfjord, ainsi que co-fondateur, développeur et rédacteur pour le projet Historiamati.ca (Humatica). Je suis également candidat à la maîtrise en informatique appliquée à l'histoire (M.A)</p>
        <div class="flex flex-row justify-around mt-6">
            <div class="poste">Développeur</div>
            <div class="poste">Historien</div>
            <div class="poste">Curieux</div>
        </div>
    </div>
    <div>
        <Anim/>

    </div>
</section>

<style>
    .poste{
        @apply bg-white bg-opacity-50 px-5 py-3 rounded-md shadow-lg;
    }
</style>

