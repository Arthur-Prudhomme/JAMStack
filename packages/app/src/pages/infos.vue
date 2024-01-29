<script lang="ts" setup>
const { find } = useStrapi();
const route = useRoute();

const {
	data: recettes,
	pending,
	error,
} = useAsyncData("recettes", () =>
	find(`recettes/${route.query.id}`, {
		populate: "*",
	})
);
console.log(recettes);
</script>

<template>
	<div>hello</div>
	<pre>
        {{ recettes }}
    </pre
	>
</template>
