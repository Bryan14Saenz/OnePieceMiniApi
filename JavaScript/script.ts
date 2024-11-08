$(function () {
  const divMarines = document.getElementById('marines');
  const divPiratas = document.getElementById('piratas');
  interface Personajes {
    id: string;
    nombre: string;
    description: string;
    imagen: string;
  }

  const piratas: Personajes[] = [
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

  const marines: Personajes[] = [
    {
      id: '#001',
      nombre: 'Garp',
      description: 'Vice-Almirante',
      imagen: '../Img/Garp.png',
    },
  ];

  function creadorMarine() {
    if (divMarines) {
      marines.forEach((marine) => {
        const card = document.createElement('div');
        card.className = 'card';

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const marineName = document.createElement('h5');
        marineName.textContent = marine.nombre;

        const marineDescription = document.createElement('p');
        marineDescription.textContent = marine.description;

        const idMarine = document.createElement('p');
        idMarine.className = 'idMarine';
        idMarine.textContent = marine.id;

        const marinesImg = document.createElement('img');
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

  $('#btnPiratas').on('click', () => {
    if (divPiratas) {
      divPiratas.innerHTML = '';
      creadorPirata();
    }

    if (divMarines) {
      divMarines.innerHTML = '';
    }
  });

  $('#btnMarines').on('click', () => {
    if (divMarines) {
      divMarines.innerHTML = '';
      creadorMarine();
    }

    if (divPiratas) {
      divPiratas.innerHTML = '';
    }
  });

  $('#btnSearch').on('click', () => {
    const resultado = $('#input-buscar').val();

    if (divPiratas) {
      divPiratas.innerHTML = '';
    }
    if (divMarines) {
      divMarines.innerHTML = '';
    }
    if (resultado) {
      const encontrado = piratas.find((pirata) => pirata.nombre === resultado);

      if (encontrado && divPiratas) {
        const card = document.createElement('div');
        card.className = 'card';

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const pirateName = document.createElement('h5');
        pirateName.textContent = encontrado.nombre;

        const pirateDescription = document.createElement('p');
        pirateDescription.textContent = encontrado.description;

        const idPirata = document.createElement('p');
        idPirata.className = 'idPirata';
        idPirata.textContent = encontrado.id;

        const piratasImg = document.createElement('img');
        piratasImg.src = encontrado.imagen;

        cardBody.appendChild(piratasImg);
        cardBody.appendChild(pirateDescription);
        cardBody.appendChild(idPirata);
        card.appendChild(cardBody);
        divPiratas.appendChild(card);
      }
    }

    if (resultado) {
      const encontrado = marines.find((marine) => marine.nombre === resultado);

      if (encontrado && divMarines) {
        const card = document.createElement('div');
        card.className = 'card';

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const marineName = document.createElement('h5');
        marineName.textContent = encontrado.nombre;

        const marineDescription = document.createElement('p');
        marineDescription.textContent = encontrado.description;

        const idMarine = document.createElement('p');
        idMarine.className = 'idMarine';

        const marinesImg = document.createElement('img');
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
