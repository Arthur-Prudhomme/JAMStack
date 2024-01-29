<script lang="ts" setup>
const { findOne } = useStrapi();
const route = useRoute();

const {
	data: recette,
	pending,
	error,
} = useAsyncData("recette", () =>
	findOne(`recettes/${route.params.slug}`, {
		populate: "*",
	})
);
console.log(recette);
</script>

<template>
	<div v-if="recette">
		<NuxtLink to="/"> retour </NuxtLink>
		<div>
			<NuxtImg :src="recette?.data.image.url"></NuxtImg>
			<pre>
        {{ recette }}
    </pre
			>
		</div>
	</div>
	<!-- <NuxtImg :src="recette.image.url"></NuxtImg> -->
</template>
