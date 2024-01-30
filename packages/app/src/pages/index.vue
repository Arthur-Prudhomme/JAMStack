<script lang="ts" setup>
const search = useSearchStore();
</script>

<template>
	<div class="container">
		<div>
			<div class="flex flex-col items-center">
				<h1>LOTR Slightly Incorrect Lore</h1>
				<input
					class="w-[60%] text-center mb-[20px]"
					v-model="search.search"
					placeholder="Search Character"
					type="text"
				/>
			</div>
			<div v-if="search.results" class="grid grid-cols-4 gap-5 mx-[5%]">
				<div
					class="flex justify-between w-[100%] h-[100%]"
					v-for="lotrCharacter in search.results"
					:key="lotrCharacter.id"
				>
					<div
						class="border-solid border-2 border-black w-[100%] h-[100%] rounded-2xl"
					>
						<NuxtLink
							class="no-underline text-black"
							:to="`/lotr-characters/${lotrCharacter.slug}`"
						>
							<NuxtImg
								class="w-[100%] max-w-[100%] h-[70%] object-cover rounded-ss-2xl rounded-se-2xl"
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
