let hasTouchScreen = false
if ('maxTouchPoints' in navigator) {
	hasTouchScreen = navigator.maxTouchPoints > 0
} else if ('msMaxTouchPoints' in navigator) {
	hasTouchScreen = navigator.msMaxTouchPoints > 0
} else {
	var mQ = window.matchMedia && matchMedia('(pointer:coarse)')
	if (mQ && mQ.media === '(pointer:coarse)') {
		hasTouchScreen = !!mQ.matches
	}
}

if (!hasTouchScreen) {
	const cursor = document.createElement('div')
	cursor.classList.add('cursor')
	document.body.appendChild(cursor)

	// Position x and y of the cursor
	let mouseX
	let mouseY

	const animateCursor = () => {
		cursor.style.transform = `matrix(1,0, 0, 1, ${mouseX}, ${mouseY})`
		requestAnimationFrame(animateCursor)
	}
	document.addEventListener('mousemove', e => {
		mouseX = e.clientX
		mouseY = e.clientY
	})
	animateCursor()

	// Cursor Variations
	const reset_cursors = () => {
		cursor.classList.remove('cursor-move')
		cursor.classList.remove('cursor-pointer')
		cursor.classList.remove('cursor-input')
	}

	// Cursor - On links or buttons
	document.querySelectorAll('a, button, label, checkbox').forEach(el => {
		el.addEventListener('mouseenter', () => {
			reset_cursors()
			cursor.classList.add('cursor-pointer')
		})
		el.addEventListener('mouseleave', () => {
			reset_cursors()
		})
	})

	// Cursor - On card's title bars
	document.querySelectorAll('.card__titleBar').forEach(el => {
		el.addEventListener('mouseenter', () => {
			reset_cursors()
			cursor.classList.add('cursor-move')
		})
		el.addEventListener('mouseleave', () => {
			reset_cursors()
		})
	})

	// Cursor - On input
	document.querySelectorAll('input').forEach(el => {
		el.addEventListener('mouseenter', () => {
			reset_cursors()
			cursor.classList.add('cursor-input')
		})
		el.addEventListener('mouseleave', () => {
			reset_cursors()
		})
	})
}
