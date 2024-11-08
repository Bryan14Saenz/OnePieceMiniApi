$(function () {
    var divMarines = document.getElementById('marines');
    var divPiratas = document.getElementById('piratas');
    var piratas = [
        {
            id: '#001',
            nombre: 'Luffy',
            description: 'Capitán',
            imagen: '../Img/Luffy.png',
        },
        {
            id: '#002',
            nombre: 'Zoro',
            description: 'Vice-capitán',
            imagen: '../Img/Zoro.png',
        },
        {
            id: '#003',
            nombre: 'Jimbe',
            description: 'Timonel',
            imagen: '../Img/Jimbe.png',
        },
        {
            id: '#004',
            nombre: 'Sanji',
            description: 'Cocinero',
            imagen: '../Img/Sanji.png',
        },
        {
            id: '#005',
            nombre: 'Robin',
            description: 'Arqueóloga',
            imagen: '../Img/Robin.png',
        },
        {
            id: '#006',
            nombre: 'Usopp',
            description: 'Tirador',
            imagen: '../Img/Usopp.png',
        },
        {
            id: '#007',
            nombre: 'Brock',
            description: 'Músico',
            imagen: '../Img/Brock.png',
        },
        {
            id: '#008',
            nombre: 'Franky',
            description: 'Carpintero',
            imagen: '../Img/Franky.png',
        },
        {
            id: '#009',
            nombre: 'Nami',
            description: 'Navegante',
            imagen: '../Img/Nami.png',
        },
        {
            id: '#010',
            nombre: 'Chopper',
            description: 'Medico',
            imagen: '../Img/Chopper.png',
        },
    ];
    var marines = [
        {
            id: '#001',
            nombre: 'Garp',
            description: 'Vice-Almirante',
            imagen: '../Img/Garp.png',
        },
    ];
    function creadorMarine() {
        if (divMarines) {
            marines.forEach(function (marine) {
                var card = document.createElement('div');
                card.className = 'card';
                var cardBody = document.createElement('div');
                cardBody.className = 'card-body';
                var marineName = document.createElement('h5');
                marineName.textContent = marine.nombre;
                var marineDescription = document.createElement('p');
                marineDescription.textContent = marine.description;
                var idMarine = document.createElement('p');
                idMarine.className = 'idMarine';
                idMarine.textContent = marine.id;
                var marinesImg = document.createElement('img');
                marinesImg.src = marine.imagen;
                cardBody.appendChild(marinesImg);
                cardBody.appendChild(marineDescription);
                cardBody.appendChild(idMarine);
                card.appendChild(cardBody);
                divMarines.appendChild(card);
            });
        }
    }
    function creadorPirata() {
        if (divPiratas) {
            piratas.forEach(function (pirata) {
                var card = document.createElement('div');
                card.className = 'card';
                var cardBody = document.createElement('div');
                cardBody.className = 'card-body';
                var pirateName = document.createElement('h5');
                pirateName.textContent = pirata.nombre;
                var pirateDescription = document.createElement('p');
                pirateDescription.textContent = pirata.description;
                var idPirata = document.createElement('p');
                idPirata.className = 'idPirata';
                idPirata.textContent = pirata.id;
                var piratasImg = document.createElement('img');
                piratasImg.src = pirata.imagen;
                cardBody.appendChild(piratasImg);
                cardBody.appendChild(pirateDescription);
                cardBody.appendChild(idPirata);
                card.appendChild(cardBody);
                divPiratas.appendChild(card);
            });
        }
    }
    $('#btnPiratas').on('click', function () {
        if (divPiratas) {
            divPiratas.innerHTML = '';
            creadorPirata();
        }
        if (divMarines) {
            divMarines.innerHTML = '';
        }
    });
    $('#btnMarines').on('click', function () {
        if (divMarines) {
            divMarines.innerHTML = '';
            creadorMarine();
        }
        if (divPiratas) {
            divPiratas.innerHTML = '';
        }
    });
    $('#btnSearch').on('click', function () {
        var resultado = $('#input-buscar').val();
        if (divPiratas) {
            divPiratas.innerHTML = '';
        }
        if (divMarines) {
            divMarines.innerHTML = '';
        }
        if (resultado) {
            var encontrado = piratas.find(function (pirata) { return pirata.nombre === resultado; });
            if (encontrado && divPiratas) {
                var card = document.createElement('div');
                card.className = 'card';
                var cardBody = document.createElement('div');
                cardBody.className = 'card-body';
                var pirateName = document.createElement('h5');
                pirateName.textContent = encontrado.nombre;
                var pirateDescription = document.createElement('p');
                pirateDescription.textContent = encontrado.description;
                var idPirata = document.createElement('p');
                idPirata.className = 'idPirata';
                idPirata.textContent = encontrado.id;
                var piratasImg = document.createElement('img');
                piratasImg.src = encontrado.imagen;
                cardBody.appendChild(piratasImg);
                cardBody.appendChild(pirateDescription);
                cardBody.appendChild(idPirata);
                card.appendChild(cardBody);
                divPiratas.appendChild(card);
            }
        }
        if (resultado) {
            var encontrado = marines.find(function (marine) { return marine.nombre === resultado; });
            if (encontrado && divMarines) {
                var card = document.createElement('div');
                card.className = 'card';
                var cardBody = document.createElement('div');
                cardBody.className = 'card-body';
                var marineName = document.createElement('h5');
                marineName.textContent = encontrado.nombre;
                var marineDescription = document.createElement('p');
                marineDescription.textContent = encontrado.description;
                var idMarine = document.createElement('p');
                idMarine.className = 'idMarine';
                var marinesImg = document.createElement('img');
                marinesImg.src = encontrado.imagen;
                cardBody.appendChild(marinesImg);
                cardBody.appendChild(marineDescription);
                cardBody.appendChild(idMarine);
                card.appendChild(cardBody);
                divMarines.appendChild(card);
            }
        }
    });
});
