import { createApp } from 'vue';
import { createStore } from 'vuex';

// Create a new store instance.
const store = createStore({
	state() {
		return {
			recipes: [
				{
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
				},
			],
		};
	},
	mutations: {
		increment(state) {
			state.count++;
		},
	},
});
export default store;
