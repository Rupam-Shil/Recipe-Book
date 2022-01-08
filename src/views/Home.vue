<template>
	<div class="home">
		<div class="home-thumbnail">
			<img src="../assets/main.svg" alt="" />
		</div>
		<div class="home-card-area">
			<div class="box-area">
				<Card
					v-for="recipe in recipes.splice(0, 2)"
					:key="recipe.id"
					:recipe="recipe"
				></Card>
			</div>
			<div class="link-area">
				<router-link to="/all" tag="a">See All Recipes ></router-link>
			</div>
		</div>
	</div>
</template>

<script setup>
import Card from '../components/Card.vue';
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();
const recipes = computed(() => store.state.recipes);
</script>

<style lang="scss">
.home {
	height: calc(100vh - 80px);
	width: 100vw;
	padding: 0 2rem;
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 1rem;
	justify-items: center;
	align-content: center;
	&-thumbnail {
		display: flex;
		justify-content: center;
		align-self: center;

		img {
			width: max(80%, 400px);
			height: auto;
		}
	}
	&-card-area {
		width: 100%;
		height: 500px;
		display: flex;
		flex-direction: column;
		position: relative;
		.link-area {
			position: absolute;
			bottom: -1rem;
			left: 0;
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 2rem;
			a {
				text-decoration: none;
				color: var(--blue-text);
			}
		}
		.box-area {
			display: grid;
			justify-content: end;
			grid-template-columns: 100%;
			grid-template-rows: 1fr 1fr;
			gap: 1.5rem;
			height: calc(100% - 2rem);
		}
	}
}
</style>
