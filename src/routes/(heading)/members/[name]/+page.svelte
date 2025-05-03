<script lang="ts">
import CenterContainer from "$lib/components/center-container.svelte";
let { data } = $props();

</script>

<CenterContainer class="py-6 sm:py-10 flex justify-center">
    <div class="flex flex-col sm:flex-row items-center sm:items-start gap-20">
        <img
          src={data.member.photo}
          class="size-60 rounded-full object-cover"
          alt=""
        />
        <div class="text-center sm:text-left max-w-prose ">
          <h2 class="font-bold text-2xl font-fira">{data.member.name}</h2>
          <p class="mt-6">{data.member.description}</p>
        </div>
      </div>
</CenterContainer>
