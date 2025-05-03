<script lang="ts">
    import {page} from '$app/state';
</script>


{#if page.status == 404}

<h1 class="text-5xl text-center font-bold text-lime-500">Upps..</h1>

<div class="flex justify-center mt-10">
  
    <img id="gif"
    src="https://midu.dev/images/this-is-fine-404.gif" 
    alt="This is fine">

</div>

<div class="mt-10 flex justify-center">

    <a
        href="/"
        class="inline-block rounded-full bg-lime-500 px-14 py-2 font-fira text-base font-semibold text-gray-900 shadow-xs hover:bg-lime-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-500"
    >
        Volver a inicio
    </a>
</div>	
{/if}