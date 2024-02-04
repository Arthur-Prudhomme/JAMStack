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
console.log(lotrCharacter);
</script>

<template>
	<div v-if="lotrCharacter">
		<NuxtLink to="/"> retour </NuxtLink>
		<div
			class="flex flex-row border-solid border-2 border-white w-[80%] h-[100%] mx-auto rounded-2xl"
		>
			<NuxtImg
				class="w-[50%] max-w-[50%] object-cover rounded-ss-2xl rounded-es-2xl mr-[20px]"
				:src="lotrCharacter?.data.portrait.url"
			></NuxtImg>
			<div>
				<h1>{{ lotrCharacter?.data.name }}</h1>
				<h3>Species : {{ lotrCharacter?.data.species }}</h3>
				<h3>Age : {{ lotrCharacter?.data.age }}</h3>
				<div>
					<h3>Once said :</h3>
					<ul>
						<li>
							<p>{{ lotrCharacter?.data.onceSaid }}</p>
						</li>
					</ul>
				</div>
				<div>
					<h3>Did Not Said :</h3>
					<ul>
						<li>
							<p>{{ lotrCharacter?.data.didNotSaid }}</p>
						</li>
					</ul>
				</div>
				<!-- <div>
						<h3>He Is :</h3>
						<ul>
							<li v-for="tags in lotrCharacter?.data.lotr_tags">
								<p>{{ tags.tag }}</p>
							</li>
						</ul>
					</div> -->
			</div>
		</div>
	</div>
	<!-- <div class="w-[20%] mx-auto">
		<img class="w-[100%]" src="../../assets/css/one_ring.gif" />
	</div> -->
	<!-- <NuxtImg :src="recette.image.url"></NuxtImg> -->
</template>
