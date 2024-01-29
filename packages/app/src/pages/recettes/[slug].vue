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
	<pre>
        {{ recette }}
    </pre
	>
	<!-- <NuxtImg :src="recette.image.url"></NuxtImg> -->
</template>
