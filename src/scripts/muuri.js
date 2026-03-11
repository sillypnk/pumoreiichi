import Muuri from 'muuri'

document.addEventListener('DOMContentLoaded', () => {
	const cardsContainer = document.querySelector('.desktop__cards')
	// TODO: Get the current position of each cards that were moved
	// And save it to localStorage.
	// We then retrieve it and assign that saved position to the cards
	new Muuri(cardsContainer, {
		items: cardsContainer.querySelectorAll('.card--draggable'),
		layoutEasing: 'cubic-bezier(0.61, 0.01, 0.06, 1)',
		layoutDuration: 620,

		dragEnabled: true,
		dragHandle: '.card__titleBar',
	})
})
