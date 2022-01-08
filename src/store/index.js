import { createApp } from 'vue';
import { createStore } from 'vuex';
import { setLocalStorageItem } from '../composables/setLocalItem';
// Create a new store instance.
const store = createStore({
	state() {
		return {
			recipes: [
				{
					id: '01',
					title: 'Chicken Stew',
					description:
						'Chicken Stew  is a delicious meal with chicken,  potatoes and sweet potatoes, onions and carrots. It"s all simmered in a rich seasoned chicken broth until tender. It"s one of our all time favorite meals ',
					ingredients: [
						'8 chicken thighs about 1 1/2 pounds diced',
						'2 tablespoon olive oil',
						'2 carrots diced',
						'1 small onion',
						'2 stalks celery diced',
						'5 tablespoons flour divided',
						'½ teaspoon rosemary',
						'½ teaspoon thyme',
						'¼ teaspoon sage',
						'salt and pepper to taste',
						'1 ½ cups potatoes peeled and diced',
						'1 ½ cups sweet potatoes peeled and diced',
						'½ red pepper finely diced',
						'¼ cup white wine',
						'4 cups chicken broth or chicken stock',
						'1 cup green beans or peas',
						'½ cup heavy cream',
					],
					methods: [
						'In a large pot or dutch oven, brown chicken in 1 tablespoon olive oil (it doesn"t have to be cooked through). Remove from pot and set aside. ',
						'Cook onion, carrot and celery in remaining olive oil for about 3 minutes or until onion is slightly softened. Stir in 3 tablespoons of flour, seasonings and salt & pepper to taste. Cook over medium heat about 2 minutes.',
						'Add potatoes, sweet potatoes, red pepper, white wine, browned chicken and broth. Bring to a boil, reduce heat and simmer covered for 30 minutes.',
						'Remove lid and stir in green beans and cream.',
						' Thicken if desired (below) and simmer an additional 10 minutes uncovered.',
						'To thicken: In a mason jar combine remaining 2 tablespoons flour and 1 cup water or broth.',
						'Shake very well (ensure there are no lumps) and add a little at a time to boiling stew to reach desired consistency.',
					],
					delete: false,
				},

				{
					id: '02',
					title: 'Chicken Biriyani',
					description:
						'Although widely associated with Indian cuisine, Chicken Biryani is a dish that has spread across a wide swath of South Asia, reaching as far west as Iraq and as far east as Indonesia. The vast geographical area Biryani calls home has resulted in a wide variety of preparations and ingredients; however, it is typically prepared by layering seasoned chicken with rice and aromatics and steaming them together',
					ingredients: [
						'1 tablespoonvegetable oil',
						'10 gramsgarlic (grated)',
						'10 gramsginger (grated)',
						'1serrano chili peppers (to taste, minced)',
						'5 gramsmint (finely chopped)',
						'10 gramscilantro (finely chopped)',
						'1 tablespoongaram masala',
						'6 cupswater',
						'2 1/2 teaspoonssalt',
						'5pods green cardamom (smashed)',
						'1 teaspooncumin seeds',
						'1bay leaf360 gramsbasmati rice (~2 cups)',
						'2 tablespoonghee',
						'2medium onions (sliced thin)',
						'1 cupreserved boiling liquid (from rice)',
						'1/2 teaspoonsaffron threads',
					],
					methods: [
						'To marinate the chicken for the biryani, combine the vegetable oil, garlic, ginger, chili peppers, mint, cilantro, garam masala, cinnamon and salt in a large bowl and stir together. Add the chicken pieces and toss together making sure the chicken is thoroughly coated in the marinade. Allow the chicken to marinate for at least 1 hour or up to overnight.',
						'In a pot wide enough to hold the chicken in a single layer, add the ghee and onions and saute the onions until they are well caramelized (15-20 minutes). Transfer the caramelized onions to a bowl and set aside.',
						'While the onions caramelize, prepare the rice by washing in a strainer under cold running water until the water runs clear.',
						'To par-boil the rice, add the water, salt, cardamom, cumin and bay leaf to a pot and bring to a boil. Add the rice and boil for 7 minutes. Drain the rice, reserving 1 cup of the liquid.',
						'In the pot you caramelized the onions in, add the chicken in a single layer, skin-side down. Fry until golden brown on one side (about 5 minutes). Flip the chicken over and fry the other side until golden brown. Transfer the chicken back to the bowl you marinated it in.',
						'To assemble the biryani, add the saffron to the rice and toss to distribute evenly. Add half the rice mixture to the bottom of the pot you browned the chicken in.',
						'Top the rice with the chicken in a single layer.',
						'Top the chicken with an even layer of caramelized onions.',
						'Finish putting together the Biryani by adding the rest of the rice in an even layer. Add 1 cup of reserved liquid from boiling the rice. Cover the pot with a lid and put the pot on the stove over medium heat and set the timer for 20 minutes. When you can see steam escaping from under the lid, turn down the heat to low and continue cooking until the timer goes off and then turn off the heat.',
						'Without opening the lid, set the timer for another 10 minutes to steam the biryani.',
						'Mix the Chicken Biryani together and then transfer to a serving platter. Garnish with fresh cilantro and serve.',
					],
					delete: false,
				},
			],
		};
	},
	mutations: {
		deleteRecipe(state, payload) {
			state.recipes = state.recipes.filter((recipe) => {
				return recipe.id !== payload;
			});
			setLocalStorageItem(state.recipes);
		},
		setRecipe(state, payload) {
			state.recipes = payload;
		},
		addRecipe(state, payload) {
			state.recipes.push(payload);
			setLocalStorageItem(state.recipes);
		},
	},
	getters: {
		getRecipe: (state) => (id) => {
			return state.recipes.filter((each) => each.id === id);
		},
	},
});
export default store;
