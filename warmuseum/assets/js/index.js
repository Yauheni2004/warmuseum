/*========= burger menu ==========*/
const burgerMenu = function () {
	const iconMenu = document.querySelector('.menu__icon');
	const menu = document.querySelector('.menu');
	const menuLinks = document.querySelectorAll('.menu__link');

	iconMenu.addEventListener('click', () => {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menu.classList.toggle('_active');
		menu.classList.toggle('menu-open');
	});

	for (let i = 0; i < menuLinks.length; i++) {
		menuLinks[i].addEventListener('click', () => {
			iconMenu.classList.remove('_active');
			document.body.classList.remove('_lock');
			menu.classList.remove('_active');
			menu.classList.remove('menu-open');
		});
	}
};

burgerMenu();

/*========= tickets ==========*/
const counter = function () {
	const buttons = document.querySelectorAll('.price__counter_btn');
	const maxVisitors = 10;
	let visitors = 0;

	buttons.forEach((button) => {
		button.addEventListener('click', function () {
			const direction = this.dataset.direction;

			const totalCount = document.querySelector('.price__total-count');
			const currentTotalCount = +totalCount.innerHTML;
			let newCount;

			const input = this.parentElement.querySelector('.price__counter');
			const priceOne = +input.dataset.price;
			const currentValue = +input.innerHTML;
			let newValue;

			if (direction === 'plus' && visitors < maxVisitors) {
				newValue = currentValue + 1;
				newCount = currentTotalCount + priceOne;
				visitors++;
			} else if (direction === 'minus') {
				newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
				newCount =
					currentValue === 0 ? currentTotalCount : currentTotalCount - priceOne;
				visitors = currentValue === 0 ? visitors : visitors - 1;
			} else {
				alert(`Превышен лимит ${maxVisitors}`);
				return;
			}

			input.innerHTML = newValue;
			totalCount.innerHTML = newCount;
		});
	});
};

counter();
