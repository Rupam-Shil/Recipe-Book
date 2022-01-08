<template>
	<Header />
	<router-view></router-view>
</template>
<script setup>
import Header from './layout/Header.vue';
import { useStore } from 'vuex';
import { getLocalStorageItem } from './composables/setLocalItem';
const store = useStore();

store.commit('setRecipe', getLocalStorageItem());
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900&display=swap');
*,
*::before,
*::after {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
:root {
	--blue: #002b5c;
	--white: #fff;
	--green: #2ae879;
	--blue-text: #3f3d56;
	--grey: rgb(136, 136, 136);
}
body {
	font-family: 'Poppins', sans-serif;
	overflow-x: hidden;
}
.btn {
	outline: none;
	border: none;
	padding: 1rem 1.5rem;
	font-size: 1.1rem;
	background: var(--green);
	color: var(--blue-text);
	border-radius: 0.5rem;
	box-shadow: 0 4px 8px #003474 !important;
	text-transform: capitalize;
	cursor: pointer;
	margin-right: 2rem;
	transition: 0.2s;
	text-decoration: none !important;
	&:active {
		box-shadow: 0 2px 5px #001b3c !important;
		transform: translateY(3px);
	}
}
</style>
