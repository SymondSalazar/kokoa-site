<script lang="ts">
	import github from "$lib/assets/icons/github.svg";
	import linkedin from "$lib/assets/icons/linkedin.svg";
	import { Link } from "lucide-svelte";

	type Props = {
		member: {
			name: string;
			role: string;
			photo: string;
			social_media: { nombre: string; link: string }[];
		};
	};
	let { member }: Props = $props();
</script>

<li class="text-center">
	<div class="relative mx-auto size-56 group rounded-full overflow-hidden">
		<img
			class="size-56 object-cover group-hover:grayscale group-hover:brightness-50 transition duration-150"
			src={member.photo}
			width="224"
			height="224"
			alt={member.name}
		/>
		<a href="/members/{member.name.split(" ").join("_")}" 
		class="absolute inset-0 flex items-center justify-center opacity-0 text-green-600 font-black group-hover:opacity-100 transition duration-150">
		Conoce a {member.name.split(" ")[0]}
		</a>
	</div>
	<h3 class="mt-6 text-base/7 font-semibold tracking-tight">{member.name}</h3>
	<p class="text-sm/6 text-lime-400">{member.role}</p>
	<ul role="list" class="mt-6 flex justify-center gap-x-6">
		{#each member.social_media as media}
			<li>
				<a href={media.link}>
					{#if media.nombre === "github"}
						<img
							class="opacity-60 hover:opacity-80"
							src={github}
							alt="Github"
							height="20"
							width="20"
						/>
					{:else if media.nombre === "linkedin"}
						<img
							class="opacity-60 hover:opacity-80"
							src={linkedin}
							alt="LinkedIn"
							height="20"
							width="20"
						/>
					{:else if media.nombre === "link"}
						<span class="sr-only">Link</span>
						<Link class="size-5 text-gray-400 hover:text-gray-300" aria-hidden="true" />
					{/if}
				</a>
			</li>
		{/each}
	</ul>
</li>
