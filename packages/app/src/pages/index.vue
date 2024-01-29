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
			<h1>Recettes</h1>
		</div>

		<div>
			<ul>
				<li v-for="recette in recettes.data" :key="recette.id">
					<NuxtLink :to="`/recettes/${recette.slug}`">{{
						recette.title
					}}</NuxtLink>
				</li>
			</ul>
		</div>
	</div>
</template>
