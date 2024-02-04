import Fuse from "fuse.js";
import { recipesMock } from "~/mocks/recipes.mock";

export const useSearchStore = defineStore("search", () => {
	const search = ref("");

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

	// TODO: Replace any with your Recipe type and change elements
	const elements = reactive<Array<any>>(lotrCharacters.value?.data ?? []);
	const keys = ["name", "species", "age"];
	// const queryTags = ref<string[]>([])

	// const setElements = (newElements: any) => {
	// 	elements.push(...newElements);
	// };

	const fuse = computed(
		() =>
			new Fuse(Array.from(elements), {
				keys,
				threshold: 0.2,
			})
	);

	const results = computed(() => {
		if (!search.value) return Array.from(elements);
		return [...fuse.value.search(search.value).map((r) => r.item)];
	});

	return { search, results, pending };
});
