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

// creo la funzione che mi permette di creare le card

const cardCreator = (member) => {
  `< div class="col-4 d-flex" >
    <div class="card-container d-flex align-items-center bg-dark">
      <div class="img-team">
        <img src="./img/male1.png" alt="male1" class="img-fluid">
      </div>
      <div class="text-team text-white">
        <h4>MARCO BIANCHI</h4>
        <h6>Designer</h6>
        <h6>marcobianchi@team.com</h6>
      </div>
    </div>
  </div >`

}