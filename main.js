const dataContainer = document.getElementById('data-container');
const dailyButton = document.getElementById('daily');
const weeklyButton = document.getElementById('weekly');
const monthlyButton = document.getElementById('monthly');


// Lee el contenido del archivo data.json usando Fetch API
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // Recorre los datos y crea elementos HTML
        data.forEach(item => {
            const imageCard = document.createElement('div');
            imageCard.classList.add(`image-card`);
            imageCard.classList.add(item.title.replace(/\s+/g, '-').toLowerCase());
            const card = document.createElement('div');
            card.classList.add('data-card');

            // Agrega el título
            const title = document.createElement('h2');
            title.textContent = item.title;
            card.appendChild(title);

            // Agrega los datos de los marcos de tiempo
            const timeframes = document.createElement('ul');
            for (const timeframe in item.timeframes) {
                const timeframeItem = document.createElement('li');
                timeframeItem.classList.add(`list`);
                timeframeItem.classList.add(`${timeframe}`);
                timeframeItem.innerHTML = `<p class="current ">${item.timeframes[timeframe].current}hs</p><p class="last-week">Last week - ${item.timeframes[timeframe].previous}hs</p>`;
                timeframes.appendChild(timeframeItem);
            }
            card.appendChild(timeframes);

            // Agrega la tarjeta al contenedor
            imageCard.appendChild(card);
            dataContainer.appendChild(imageCard);
        });
        dailyActive();
    })
    .catch(error => console.error('Error fetching data:', error));

function dailyActive () {
    const liDaily = document.querySelectorAll('.daily');
    liDaily.forEach(li => {
        li.classList.add('active');
    });
}



dailyButton.addEventListener('click', ()=>{
    const liDaily = document.querySelectorAll('.daily');
    const liWeekly = document.querySelectorAll('.weekly');
    const liMonthly = document.querySelectorAll('.monthly');
    liWeekly.forEach(li => {
        li.classList.remove('active');
    });
    liMonthly.forEach(li => {
        li.classList.remove('active');
    })
    console.log(liDaily);
    liDaily.forEach(li => {
        li.classList.add('active');
    });
})
weeklyButton.addEventListener('click', ()=>{
    console.log('weekly');
    const liDaily = document.querySelectorAll('.daily');
    const liWeekly = document.querySelectorAll('.weekly');
    const liMonthly = document.querySelectorAll('.monthly');
    liDaily.forEach(li => {
        li.classList.remove('active');
    });
    liMonthly.forEach(li => {
        li.classList.remove('active');
    })
    console.log(liWeekly);
    liWeekly.forEach(li => {
        li.classList.add('active');
    });
})
monthlyButton.addEventListener('click', ()=>{
    console.log('monthly');
    const liDaily = document.querySelectorAll('.daily');
    const liWeekly = document.querySelectorAll('.weekly');
    const liMonthly = document.querySelectorAll('.monthly');
    liDaily.forEach(li => {
        li.classList.remove('active');
    });
    liWeekly.forEach(li => {
        li.classList.remove('active');
    })
    console.log(liMonthly);
    liMonthly.forEach(li => {
        li.classList.add('active');
    });
})