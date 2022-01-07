<template>
	<div class="home">
		<div class="home-thumbnail">
			<img src="../assets/main.svg" alt="" />
		</div>
		<div class="home-card-area">
			<div class="box-area"></div>
			<div class="link-area">
				<router-link to="/all" tag="a">See All Recipes ></router-link>
			</div>
		</div>
	</div>
</template>

<script setup>
import Card from '../components/Card.vue';
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
			bottom: 0;
			left: 0;
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
}
</style>
