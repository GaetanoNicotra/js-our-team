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

// reupero gli elementi dal dom
const name = document.getElementById('name')
const role = document.getElementById('role')
const email = document.getElementById('mail')
const image = document.getElementById('image')
const teamMembersAdd = document.getElementById('team-members')
const newMember = document.getElementById('newMember')
// creo la funzione che mi permette di creare le singole card

const cardCreator = (member) => {
  const card = `<div class="col-lg-4 col-md-6 col-sm-12 mb-4">
    <div class="card-container d-flex align-items-center bg-black">
      <div class="img-team">
        <img src="${member.img}" alt="male1" class="img-fluid">
      </div>
      <div class="text-team text-white ms-4">
        <h4>${member.name}</h4>
        <h6>${member.role}</h6>
        <h6 class="text-primary">${member.email}</h6>
      </div>
    </div>
  </div >`
  document.getElementById('team-members').innerHTML += card;
  return card;
}
// creo un ciclo che inserisce le informazioni di ciascun membro
// all'interno della sua crad
for (let i = 0; i < teamMembers.length; i++) {
  cardCreator(teamMembers[i])
}

// creo un evento per far si che al click del bottone 
// venga aggiunta una nuova card nel team

newMember.addEventListener('click', (e) => {
  e.preventDefault()

  const nameValue = name.value;
  const roleValue = role.value;
  const emailValue = email.value;
  const imageValue = image.value;
  //verifico che vengano compilati tutti i campi
  if (!nameValue || !roleValue || !emailValue || !imageValue) {
    alert('Devi compilare tutti i campi')
    return;
  }
  // creo il nuovo oggetto
  const newMember = {
    name: nameValue,
    role: roleValue,
    email: emailValue,
    image: imageValue
  }
  teamMembers.push(newMember)
 
  cardCreator(newMember)
})