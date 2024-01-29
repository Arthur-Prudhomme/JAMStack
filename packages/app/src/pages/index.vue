<script lang="ts" setup>
const { find } = useStrapi();
const {
	data: recettes,
	pending,
	error,
} = useAsyncData("recettes", () =>
	find("recettes", {
		populate: "*",
	})
);
console.log(recettes);
</script>

<template>
	<div class="container">
		<div class="flex flex-col items-center gap-y-4">
			<h1>ça va ça avance</h1>
			<div class="flex gap-x-4">
				<NuxtLink to="/start"> Documentation </NuxtLink>
				<NuxtLink to="/exemple-recherche"> Exemple de recherche </NuxtLink>
			</div>
		</div>

		<div>
			<ul>
				<li v-for="recette in recettes.data" :key="recette.id">
					<NuxtLink :to="{ name: 'infos', query: { id: recette.id } }">{{
						recette.title
					}}</NuxtLink>
				</li>
			</ul>
		</div>
	</div>
</template>
