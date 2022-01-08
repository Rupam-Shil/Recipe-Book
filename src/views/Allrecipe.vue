<template>
	<div class="all-recipe">
		<Card v-for="recipe in recipes" :key="recipe.id" :recipe="recipe" />
	</div>
</template>

<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';
import Card from '../components/Card.vue';
const store = useStore();

const recipes = computed(() => store.state.recipes);
</script>

<style lang="scss">
.all-recipe {
	height: max-content;
	padding: 2rem;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
	grid-auto-rows: 300px;
	gap: 2rem;
	// & > * {
	// 	height: 300px;
	// }
}
</style>
