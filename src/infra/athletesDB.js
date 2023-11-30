const athletes = [
  {
    name: "Josemar",
    team: "Grube HQ",
    imageSrc: "/images/athletes/josemar.jpg",
    score: 72,
    wins: 8,
    losses: 1,
    submissions: 3,
  },
  {
    name: "Guilherme Coelho",
    team: "Grube Colombo",
    imageSrc: "/images/athletes/guilherme.jpg",
    score: 40,
    wins: 2,
    losses: 0,
    submissions: 0,
  },
  {
    name: "Ricardo Alemão",
    team: "Grube HQ",
    imageSrc: "/images/athletes/ricardo.jpg",
    score: 55,
    wins: 5,
    losses: 3,
    submissions: 1,
  },
  {
    name: "Yuri Strapasson",
    team: "Grube Tamandaré",
    imageSrc: "/images/athletes/yuri.jpg",
    score: 44,
    wins: 5,
    losses: 1,
    submissions: 4,
  },
  {
    name: "Ewander Vinícius",
    team: "Grube Colombo",
    imageSrc: "https://avatars.githubusercontent.com/u/1015235?v=4",
    score: 20,
    wins: 3,
    losses: 0,
    submissions: 3,
  },
  {
    name: "Paulo Grube",
    team: "Grube HQ",
    imageSrc: "/images/athletes/paulo_grube.jpg",
    score: 52,
    wins: 7,
    losses: 3,
    submissions: 2,
  },
  {
    name: "Kauê Sotilli",
    team: "Grube Colombo",
    imageSrc: "https://avatars.githubusercontent.com/u/1015235?v=4",
    score: 15,
    wins: 1,
    losses: 1,
    submissions: 1,
  },
  {
    name: "Erik Marçal",
    team: "Grube Colombo",
    imageSrc: "https://avatars.githubusercontent.com/u/1015235?v=4",
    score: 15,
    wins: 4,
    losses: 1,
    submissions: 3,
  },
  {
    name: "Jhonatan Vieira",
    team: "Grube Colombo",
    imageSrc: "https://avatars.githubusercontent.com/u/1015235?v=4",
    score: 10,
    wins: 0,
    losses: 0,
    submissions: 0,
  },
  {
    name: "Danillo",
    team: "Grube HQ",
    imageSrc: "/images/athletes/danillo.jpg",
    score: 10,
    wins: 1,
    losses: 1,
    submissions: 1,
  },
  {
    name: "Fernando Cândido",
    team: "Grube Colombo",
    imageSrc: "https://avatars.githubusercontent.com/u/1015235?v=4",
    score: 13,
    wins: 4,
    losses: 1,
    submissions: 1,
  },
  {
    name: "Alex Mentira",
    team: "Grube Tamandaré",
    imageSrc: "/images/athletes/alex_mentira.jpg",
    score: 20,
    wins: 1,
    losses: 0,
    submissions: 0,
  },
  {
    name: "Isa",
    team: "Grube Tamandaré",
    imageSrc: "https://avatars.githubusercontent.com/u/1015235?v=4",
    score: 23,
    wins: 0,
    losses: 0,
    submissions: 0,
  },
  {
    name: "Vitor",
    team: "Grube Tamandaré",
    imageSrc: "https://avatars.githubusercontent.com/u/1015235?v=4",
    score: 25,
    wins: 1,
    losses: 0,
    submissions: 0,
  },
  {
    name: "William",
    team: "Grube Tamandaré",
    imageSrc: "https://avatars.githubusercontent.com/u/1015235?v=4",
    score: 10,
    wins: 1,
    losses: 0,
    submissions: 0,
  },
  {
    name: "Gabriel Alves",
    team: "Grube Colombo",
    imageSrc: "https://avatars.githubusercontent.com/u/1015235?v=4",
    score: 10,
    wins: 1,
    losses: 0,
    submissions: 1,
  },
  {
    name: "Fabrício",
    team: "Grube Tamandaré",
    imageSrc: "https://avatars.githubusercontent.com/u/1015235?v=4",
    score: 23,
    wins: 2,
    losses: 0,
    submissions: 0,
  },
  {
    name: "Rafael Segalla",
    team: "Grube Tamandaré",
    imageSrc: "https://avatars.githubusercontent.com/u/1015235?v=4",
    score: 10,
    wins: 1,
    losses: 0,
    submissions: 0,
  },
  {
    name: "Filipe Maruan",
    team: "Grube HQ",
    imageSrc: "/images/athletes/maruan.jpg",
    score: 25,
    wins: 0,
    losses: 1,
    submissions: 0,
  },
  {
    name: "Thiago Satake",
    team: "Grube HQ",
    imageSrc: "https://avatars.githubusercontent.com/u/1015235?v=4",
    score: 10,
    wins: 1,
    losses: 0,
    submissions: 0,
  },
  {
    name: "Jhonatan H.",
    team: "Grube Tamandaré",
    imageSrc: "https://avatars.githubusercontent.com/u/1015235?v=4",
    score: 13,
    wins: 2,
    losses: 0,
    submissions: 0,
  },
  {
    name: "Marcelo",
    team: "Grube HQ",
    imageSrc: "https://avatars.githubusercontent.com/u/1015235?v=4",
    score: 5,
    wins: 0,
    losses: 1,
    submissions: 0,
  },
  {
    name: "Bruno Breda",
    team: "Grube HQ",
    imageSrc: "/images/athletes/bruno_breda.jpg",
    score: 25,
    wins: 0,
    losses: 0,
    submissions: 0,
  },
  {
    name: "Rhaikar",
    team: "Grube HQ",
    imageSrc: "https://avatars.githubusercontent.com/u/1015235?v=4",
    score: 5,
    wins: 0,
    losses: 1,
    submissions: 0,
  },
  {
    name: "Cris",
    team: "Grube HQ",
    imageSrc: "https://avatars.githubusercontent.com/u/1015235?v=4",
    score: 5,
    wins: 0,
    losses: 1,
    submissions: 0,
  },
  {
    name: "Luana Segalla",
    team: "Grube Tamandaré",
    imageSrc: "https://avatars.githubusercontent.com/u/1015235?v=4",
    score: 5,
    wins: 0,
    losses: 0,
    submissions: 0,
  },
  {
    name: "Kaua Eduardo",
    team: "Grube Tamandaré",
    imageSrc: "https://avatars.githubusercontent.com/u/1015235?v=4",
    score: 5,
    wins: 0,
    losses: 0,
    submissions: 0,
  },
  {
    name: "Heitor Ferri",
    team: "Grube Tamandaré",
    imageSrc: "https://avatars.githubusercontent.com/u/1015235?v=4",
    score: 5,
    wins: 0,
    losses: 0,
    submissions: 0,
  },
  {
    name: "Julia",
    team: "Grube HQ",
    imageSrc: "https://avatars.githubusercontent.com/u/1015235?v=4",
    score: 10,
    wins: 0,
    losses: 0,
    submissions: 0,
  },
  {
    name: "Thalita",
    team: "Grube HQ",
    imageSrc: "/images/athletes/thalita.jpg",
    score: 5,
    wins: 0,
    losses: 0,
    submissions: 0,
  },
  {
    name: "Luís",
    team: "Grube Tamandaré",
    imageSrc: "https://avatars.githubusercontent.com/u/1015235?v=4",
    score: 10,
    wins: 1,
    losses: 0,
    submissions: 1,
  },
  {
    name: "Isac",
    team: "Grube Tamandaré",
    imageSrc: "https://avatars.githubusercontent.com/u/1015235?v=4",
    score: 5,
    wins: 0,
    losses: 1,
    submissions: 0,
  },
];

module.exports = athletes;
