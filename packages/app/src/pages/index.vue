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
				placeholder="Chercher une recette"
				type="text"
			/>
			<div v-if="search.results">
				<div v-for="lotrCharacter in search.results" :key="lotrCharacter.id">
					<NuxtLink :to="`/lotr-characters/${lotrCharacter.slug}`">
						<div>
							<h2>{{ lotrCharacter.name }}</h2>
							<p>{{ lotrCharacter.age }}</p>
							<p>{{ lotrCharacter.species }}</p>
						</div>
					</NuxtLink>
				</div>
			</div>
		</div>
	</div>
</template>
