<script lang="ts" setup>
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
		<div class="flex flex-col items-center gap-y-4">
			<h1>LOTR</h1>
		</div>

		<div v-if="lotrCharacters">
			<ul>
				<li
					v-for="lotrCharacter in lotrCharacters?.data"
					:key="lotrCharacter.id"
				>
					<NuxtLink :to="`/lotr-characters/${lotrCharacter.slug}`">{{
						lotrCharacter.name
					}}</NuxtLink>
				</li>
			</ul>
		</div>
	</div>
</template>
