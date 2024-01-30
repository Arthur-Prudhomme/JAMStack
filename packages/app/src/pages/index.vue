<script lang="ts" setup>
const search = useSearchStore();
const { find } = useStrapi();
const {
	data: lotrCharacters,
	pending,
	error,
} = useAsyncData("lotr-characters", () =>
	find("lotr-characters", {
		populate: "*",
	})
);
</script>

<template>
	<div class="container">
		<div class="my-4">
			<h1>LOTR</h1>
			<input
				v-model="search.search"
				placeholder="Search Character"
				type="text"
			/>
			<div v-if="search.results" class="flex gap-[10px]">
				<div
					class="flex justify-between"
					v-for="lotrCharacter in search.results"
					:key="lotrCharacter.id"
				>
					<div class="border-solid border-2 border-black max-w-[350px]">
						<NuxtLink
							class="no-underline text-black"
							:to="`/lotr-characters/${lotrCharacter.slug}`"
						>
							<NuxtImg
								class="w-[100%] max-w-[100%]"
								:src="lotrCharacter?.portrait.url"
							></NuxtImg>
							<h2 class="m-0px">{{ lotrCharacter.name }}</h2>
							<div class="flex">
								<p class="mr-5px">Age : {{ lotrCharacter.age }}</p>
								<p>Species : {{ lotrCharacter.species }}</p>
							</div>
						</NuxtLink>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
