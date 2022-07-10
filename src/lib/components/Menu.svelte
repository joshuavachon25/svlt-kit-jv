<script>
  import Logo from "./Logo.svelte";
  import {page} from "$app/stores";
  export let data

  $: pathNamed = $page.url.pathname
</script>

<div class="fixed top-0 w-16 md:w-24 left-0 h-screen bg-gray-800 flex flex-col text-white shadow-md z-50">
  <Logo/>
  <div class="grow flex flex-col justify-between items-center">
    <div>
      {#each data.main as item}
        <a sveltekit:prefetch class="w-16 h-16 my-2 lg:my-0 lg:w-24 lg:h-24 block flex flex-col justify-center items-center gap-1 md:gap-2 hover:text-mauve {pathNamed === item.url ? 'text-mauve': 'text-white '}" href={item.url}>
          <i class="{item.icone} fa-2x "></i>
          <p class="text-xs">{item.titre}</p>
        </a>
      {/each}
    </div>
    <div class="fixed bottom-0 flex flex-col gap-3 w-16 md:w-24 justify-center items-center py-5">
      {#each data.reseaux as item}
        <a href="{item.url}" target="_blank"><i class="{item.icone} fa-2xl my-1 text-white hover:text-mauve"></i></a>
      {/each}

    </div>
  </div>
</div>