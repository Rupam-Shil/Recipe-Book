export const setLocalStorageItem = (data) => {
	localStorage.setItem('recipes', JSON.stringify(data));
};
export const getLocalStorageItem = () => {
	const recipes = JSON.parse(localStorage.getItem('recipes'));
	if (recipes && recipes.length > 0) {
		return recipes;
	}
};
