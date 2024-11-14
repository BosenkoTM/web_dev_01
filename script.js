// Находим элементы на странице
const currencySelect = document.getElementById('currency');
const getRateButton = document.getElementById('getRateButton');
const result = document.getElementById('result');

// Добавляем обработчик на кнопку
getRateButton.addEventListener('click', () => {
    // Получаем выбранную валюту
    const currency = currencySelect.value;
    // Вызываем функцию для получения курса
    getExchangeRate(currency);
});

// Функция для получения курса валют
function getExchangeRate(currency) {
    const apiKey = 'JQssJUAqoHkaBTLdZFSHrqx53lW2PYOT';
    const url = `https://api.apilayer.com/exchangerates_data/latest?base=RUB&symbols=${currency}&apikey=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Получаем курс выбранной валюты к рублю
            const rate = data.rates[currency];
            result.textContent = `1 RUB = ${rate.toFixed(2)} ${currency}`;
        })
        .catch(error => {
            console.error('Ошибка получения курса:', error);
            result.textContent = 'Ошибка получения курса валют.';
        });
}