use('fecinavidb');
db.creteCollection("trabalhos");
    /////////01//a///////                     
db.getCollection('trabalhos').insertMany({

titulo:"Cidades inteligentes",
area:"urbano",
dataenvio:"09/10/24",
autores:[
    {nome:"miguel silva", email:"miguel.silvaestudante.ifms.edu.br"},
    {nome:"maria fernanda",email:"maria.fernandaestudante.ifms.edu.br"}
],
avaliadores:[
    {cpf:"959.565.564-54",nome:"lucas",nota:"9,5"},
    {cpf:"313.254.545-44",nome:"julia",nota:"8,5"}
],
mediaavaliacao:"9",
},
////////////////02////////////
{

    titulo:"Carbono zero",
    area:"urbano",
    dataenvio:"09/10/24",
    autores:[
        {nome:"sivia ", email:"silva.estudante.ifms.edu.br"},
        {nome:"fernanda",email:"fernanda.estudante.ifms.edu.br"}
    ],
    avaliadores:[
        {cpf:"546.854.657-45",nome:"maicon",nota:"7,5"},
        {cpf:"516.857.894-55",nome:"eduarda",nota:"8,5"}
    ],
    mediaavaliacao:"8",
    
    },
    ////////////////03/////////////
    {

        titulo:"Plantio sustentavel",
        area:"Agro",
        dataenvio:"09/10/24",
        autores:[
            {nome:"joao", email:"joao.estudante.ifms.edu.br"},
            {nome:"maiara",email:"maiara.estudante.ifms.edu.br"}
        ],
        avaliadores:[
            {cpf:"849.877.778-74",nome:"arthur",nota:"9,5"},
            {cpf:"549.898.444-48",nome:"juca",nota:"8,5"}
        ],
        mediaavaliacao:"9",
        
        },
        //////////////04//////////
       {

            titulo:"Plantio de arroz no ms",
            area:"Agro",
            dataenvio:"09/10/24",
            autores:[
                {nome:"clara", email:"clara.estudante.ifms.edu.br"},
                {nome:"guilherme",email:"guilherme.estudante.ifms.edu.br"}
            ],
            avaliadores:[
                {cpf:"854.984.987-77",nome:"lucas",nota:"9,5"},
                {cpf:"468.749.877-89",nome:"julia",nota:"8,5"}
            ],
            mediaavaliacao:"9",
            
        }),
        db.getCollection('trabalhos').insertOne({

            titulo:"Producao de fungos ",
            area:"Biologica",
            dataenvio:"09/10/24",
            autores:[
                {nome:"danilo", email:"danilo.estudante.ifms.edu.br"},
                {nome:"marcos",email:"marcos.estudante.ifms.edu.br"}
            ],
            avaliadores:[
                {cpf:"959.565.564-54",nome:"rogelio",nota:"9,5"},
                {cpf:"313.254.545-44",nome:"julia",nota:"8,5"}
            ],
            mediaavaliacao:"9",
        })
    
          

            /*



Faça um código que liste todos os 5 trabalhos cadastrados na coleção “trabalhos”;

Faça um código que liste todos os trabalho pertencentes a área de “Biológicas”*/