const DATA = [
	{
		title: 'FREE',
		price: 0
	},
	{
		title: 'STANDARD',
		price: 9.99
	},
	{
		title: 'PREMIUM',
		price: 19.99
	}
]

const pricingItemTitle = document.querySelectorAll('.pricing__item-title');
const pricingItemPrice = document.querySelectorAll('.pricing__item-price');

for (let i = 0; i < DATA.length; i++) {
	pricingItemTitle[i].textContent = DATA[i].title;
	pricingItemPrice[i].innerHTML = DATA[i].price;
}