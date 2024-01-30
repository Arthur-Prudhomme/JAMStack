<script lang="ts" setup>
const search = useSearchStore();
</script>

<template>
	<body class="container bg-black text-white">
		<div v-if="search.results" class="w-[90%] mx-auto">
			<div class="flex flex-col items-center">
				<h1>LOTR Slightly Incorrect Lore</h1>
				<input
					class="w-[99%] text-center mb-[20px] rounded-2xl bg-black text-white"
					v-model="search.search"
					placeholder="Search Character"
					type="text"
				/>
			</div>
			<div class="grid grid-cols-4 gap-5">
				<div
					class="flex justify-between w-[100%] h-[100%]"
					v-for="lotrCharacter in search.results"
					:key="lotrCharacter.id"
				>
					<div
						class="border-solid border-2 border-white w-[100%] h-[100%] rounded-2xl"
					>
						<NuxtLink
							class="no-underline text-white"
							:to="`/lotr-characters/${lotrCharacter.slug}`"
						>
							<NuxtImg
								class="w-[100%] max-w-[100%] h-[70%] object-cover rounded-ss-2xl rounded-se-2xl"
								:src="lotrCharacter?.portrait.url"
							></NuxtImg>
							<h2 class="m-0px">{{ lotrCharacter.name }}</h2>
							<div class="flex">
								<p>Age : {{ lotrCharacter.age }}</p>
								<p>&nbsp;|&nbsp;</p>
								<p>Species : {{ lotrCharacter.species }}</p>
							</div>
						</NuxtLink>
					</div>
				</div>
			</div>
		</div>
	</body>
</template>
