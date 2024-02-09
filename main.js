const dataContainer = document.getElementById('data-container');

// Lee el contenido del archivo data.json usando Fetch API
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // Recorre los datos y crea elementos HTML
        data.forEach(item => {
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
                timeframeItem.innerHTML = `<p class="current ${timeframe}">${item.timeframes[timeframe].current}hs</p><p class="last-week">Last week - ${item.timeframes[timeframe].previous}hs</p>`;
                timeframes.appendChild(timeframeItem);
            }
            card.appendChild(timeframes);

            // Agrega la tarjeta al contenedor
            dataContainer.appendChild(card);
        });
    })
    .catch(error => console.error('Error fetching data:', error));