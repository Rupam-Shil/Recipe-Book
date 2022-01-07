<template>
	<Header />
	<router-view></router-view>
</template>
<script setup>
import Header from './layout/Header.vue';
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
}
body {
	font-family: 'Poppins', sans-serif;
}
</style>
