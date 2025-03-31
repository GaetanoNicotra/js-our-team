const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

// creo la funzione che mi permette di creare le singole card

const cardCreator = (member) => {
  const card = `<div class="col-4 mb-4">
    <div class="card-container d-flex align-items-center bg-dark">
      <div class="img-team">
        <img src="${member.img}" alt="male1" class="img-fluid">
      </div>
      <div class="text-team text-white">
        <h4>${member.name}</h4>
        <h6>${member.role}</h6>
        <h6 class="text-primary">${member.email}</h6>
      </div>
    </div>
  </div >`
  document.getElementById('team-members').innerHTML += card
}
// creo un ciclo che inserisce le informazioni di ciascun membro
// all'interno della sua crad
for (let i = 0; i < teamMembers.length; i++) {
  cardCreator(teamMembers[i])
}

