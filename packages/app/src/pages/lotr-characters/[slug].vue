<script lang="ts" setup>
const { findOne } = useStrapi();
const route = useRoute();

const {
	data: lotrCharacter,
	pending,
	error,
} = useAsyncData("lotr-character" + route.params.slug, () =>
	findOne(`lotr-characters/${route.params.slug}`, {
		populate: "*",
	})
);
</script>

<template>
	<div v-if="lotrCharacter">
		<NuxtLink to="/"> retour </NuxtLink>
		<div>
			<NuxtImg :src="lotrCharacter?.data.portrait.url"></NuxtImg>
			<pre>
        {{ lotrCharacter }}
    </pre
			>
		</div>
	</div>
	<!-- <NuxtImg :src="recette.image.url"></NuxtImg> -->
</template>
