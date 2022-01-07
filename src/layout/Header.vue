<template>
	<div class="header">
		<header>
			<div class="logo">
				<img src="../assets/logo.svg" alt="" />
				<h2>Cookbook</h2>
			</div>
			<button class="btn">Add new recipe</button>
		</header>
	</div>
</template>

<script setup></script>

<style lang="scss">
.header {
	width: 100vw;
	height: 80px;
	position: relative;
	header {
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		height: calc(100% - 20px);
		display: flex;
		align-items: center;
		justify-content: space-between;
		.logo {
			width: 250px;
			height: 100%;
			background: var(--blue);
			color: var(--white);
			display: flex;
			text-transform: uppercase;
			align-items: center;
			justify-content: center;
			gap: 1rem;
			img {
				width: 40px;
				aspect-ratio: 1;
				transform: translateX(0);
			}
			h1 {
				font-weight: 500;
			}
		}
		.btn {
			outline: none;
			border: none;
			padding: 1rem 1.5rem;
			font-size: 1.1rem;
			background: var(--green);
			color: var(--blue-text);
			border-radius: 0.5rem;
			box-shadow: 0 8px 5px hsl(0, 0%, 63%);
			text-transform: capitalize;
			margin-right: 2rem;
			cursor: pointer;
			transition: 0.2s;
			&:active {
				box-shadow: 0 3px 5px hsl(0, 0%, 51%);
				transform: translateY(3px);
			}
		}
	}
}
</style>
