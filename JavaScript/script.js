$(function () {
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
    function creadorPirata() {
        var divPiratas = document.getElementById('piratas');
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
    creadorPirata();
});
