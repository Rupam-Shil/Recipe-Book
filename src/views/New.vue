<template>
	<div class="form">
		<form>
			<h2 class="form-header">Add new recipe</h2>
			<label>Title</label>
			<input type="text" placeholder="Your recipe name" v-model="title" />
			<label>Description</label>
			<textarea
				placeholder="What's special about your recipe?"
				v-model="description"
			/>
			<label>Ingrediants</label>
			<input
				type="text"
				v-for="count in noOfIngredient"
				:key="count"
				v-model="ingredient[count - 1]"
				placeholder="Ingredient no and name"
			/>
			<button type="button" class="btn" @click="addIngredient">
				Add Ingredient
			</button>
			<label>Methods</label>
			<textarea
				v-for="count in noOfMethods"
				:key="count"
				v-model="methods[count - 1]"
				placeholder="Lets discuss about the method"
			/>
			<button type="button" class="btn" @click="addMethods">Add Methods</button>
			<div class="line"></div>
			<div class="form-btn">
				<button class="btn" type="button" @click="submitForm">
					Add Recipe
				</button>
				<button class="btn" type="button" @click="clearForm">Clear form</button>
			</div>
		</form>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { nanoid } from 'nanoid';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
//inputs
const title = ref('');
const description = ref('');
const ingredient = ref([]);
const methods = ref([]);

const noOfIngredient = ref(1);
const noOfMethods = ref(1);

const addIngredient = () => {
	noOfIngredient.value++;
};
const addMethods = () => {
	noOfMethods.value++;
};

const clearForm = () => {
	title.value = '';
	description.value = '';
	ingredient.value = [];
	methods.value = [];

	noOfIngredient.value = 1;
	noOfMethods.value = 1;
};

//store
const store = useStore();
const router = useRouter();

const submitForm = () => {
	if (
		title.value != '' &&
		description.value !== '' &&
		ingredient.value !== null &&
		methods.value !== null
	) {
		let payload = {
			id: nanoid(),
			title: title.value,
			description: description.value,
			ingredients: ingredient.value,
			methods: methods.value,
			delete: true,
		};
		store.commit('addRecipe', payload);
		router.push(`/recipe/${payload.id}`);
	}
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 768px) {
	.form {
		margin-top: 4rem !important;
	}
}
.form {
	width: min(800px, 90%);
	margin: 3rem auto;
	height: max-content;
	color: var(--blue);
	form {
		display: flex;
		flex-direction: column;
		h2 {
			margin-bottom: 2rem;
		}
		label {
			margin-bottom: 0.5rem;
			font-weight: 500;
		}
		input,
		textarea {
			outline: none;
			border: none;
			border: 1px solid var(--blue);
			border-radius: 0.2rem;
			color: var(--blue);
			font-size: 1.1rem;
			margin-bottom: 2rem;
			&::placeholder {
				color: rgb(175, 175, 175);
			}
		}
		input {
			height: 2rem;
			padding: 0.3rem;
		}
		textarea {
			resize: none;
			height: 5rem;
			padding: 0.3rem;
		}
		.btn {
			margin-bottom: 1rem;
			width: max-content;
		}
	}
}
</style>
