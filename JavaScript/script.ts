$(function () {
  interface Pirata {
    id: string;
    nombre: string;
    description: string;
    imagen: string;
  }

  const piratas: Pirata[] = [
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
    const divPiratas = document.getElementById('piratas');

    if (divPiratas) {
      piratas.forEach((pirata) => {
        const card = document.createElement('div');
        card.className = 'card';

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const pirateName = document.createElement('h5');
        pirateName.textContent = pirata.nombre;

        const pirateDescription = document.createElement('p');
        pirateDescription.textContent = pirata.description;

        const idPirata = document.createElement('p');
        idPirata.className = 'idPirata';
        idPirata.textContent = pirata.id;


        const piratasImg = document.createElement('img');
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
