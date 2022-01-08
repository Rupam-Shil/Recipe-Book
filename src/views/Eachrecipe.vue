<template>
	<div class="each-route">
		<router-link to="/all" class="back-btn"> &#60; Back</router-link>
		<h1 class="recipe-header">{{ recipe[0].title }}</h1>
		<p class="recipe-description">
			{{ recipe[0].description }}
		</p>
		<div class="line"></div>
		<div class="ingredients">
			<h3 class="sub-header">Ingrediants</h3>
			<ul>
				<li v-for="(ingred, index) in recipe[0].ingredients" :key="index">
					{{ ingred }}
				</li>
			</ul>
		</div>
		<div class="methods">
			<h3 class="sub-header">Methods</h3>
			<ol>
				<li v-for="(method, index) in recipe[0].methods" :key="index">
					<p>{{ method }}</p>
					<div class="line t-line"></div>
				</li>
			</ol>
		</div>
		<button
			class="btn"
			:class="[!recipe[0].delete ? 'disable-btn' : '']"
			@click="deleteThisRecipe"
		>
			Delete this recipe
		</button>
	</div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { computed } from 'vue';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';

const route = useRoute();
const router = useRouter();

const store = useStore();
const recipe = computed(() => store.getters.getRecipe(route.params.id));

const deleteThisRecipe = () => {
	if (recipe.value[0].delete) {
		Swal.fire({
			title: 'Are you sure you want to delete this recipe?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!',
		}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
				store.commit('deleteRecipe', route.params.id);
				router.push('/all');
			}
		});
	}
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 768px) {
	.each-route {
		margin-top: 4rem !important;
	}
}
.each-route {
	width: min(900px, 90%);
	margin: 0 auto;
	height: max-content;
	min-height: 90vh;
	margin-top: 2rem;
	margin-bottom: 2rem;
	display: flex;
	flex-direction: column;
	color: var(--blue);
	padding: 1rem;
	& > * {
		margin-bottom: 1rem;
	}
	.back-btn {
		color: var(--green);
		text-decoration: none;
		font-weight: 600;
		transition: 0.2s;
		&:hover {
			letter-spacing: 1px;
		}
		margin-bottom: 1rem;
	}
	.recipe-header {
		font-size: 2rem;
	}
	.line {
		height: 2px;
		width: 100%;
		background: var(--blue);
	}
	.t-line {
		height: 1px;
	}
	.ingredients {
		background: var(--blue);
		color: var(--white);
		padding: 1rem;
		border-radius: 0.5rem;
	}
	.sub-header {
		margin-bottom: 1.5rem;
	}
	ul,
	ol {
		li {
			margin-left: 1rem;
			margin-bottom: 1rem;
		}
	}
	.disable-btn {
		cursor: not-allowed;
		background: rgb(194, 194, 194);
		pointer-events: none;
	}
}
</style>
