<template>
	<div class="recipe-card">
		<div class="card-header">
			{{ recipe.title }}
		</div>
		<div class="card-description">
			{{ recipe.description }}
		</div>
		<router-link :to="`/recipe/${recipe.id}`" class="btn box-shadow w-max"
			>View recipe</router-link
		>
	</div>
</template>

<script setup>
import { ref, defineProps, toRefs } from 'vue';

const props = defineProps({
	recipe: {
		type: Object,
	},
});
const { recipe } = toRefs(props);
</script>

<style lang="scss">
.recipe-card {
	background: var(--blue);
	border-radius: 1rem;
	box-shadow: 0 45px 45px -20px rgba(25, 45, 100, 0.15) !important;
	display: flex;
	flex-direction: column;
	padding: 1rem;
	color: var(--white);
	justify-content: space-between;
	.card-header {
		font-size: 1.5rem;
		font-weight: 600;
	}
	.card-description {
		font-size: 0.9rem;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 3; /* number of lines to show */
		line-clamp: 3;
		-webkit-box-orient: vertical;
	}
	.box-shadow {
		box-shadow: 0 4px 5px #001b3c !important;
	}
	.w-max {
		width: max-content;
	}
}
</style>
