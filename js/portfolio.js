const data = [
  {
    fullname: "Крымова Алина",
    photo: "PNG/psychologists/pexel-1520760.jpg",
    text: [
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore ad fugit sequi nisi, adipisci odio voluptate accusamus delectus veniam ex sapiente repellat quaerat ullam quam necessitatibus magnam laboriosam quidem obcaecati!",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, facilis? Illo voluptatem, eaque id optio, doloremque praesentium unde quisquam accusamus in soluta, nisi ipsa sapiente tenetur a aspernatur rerum temporibus.",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore ad fugit sequi nisi, adipisci odio voluptate accusamus delectus veniam ex sapiente repellat quaerat ullam quam necessitatibus magnam laboriosam quidem obcaecati!"
    ]
  },
  {
    fullname: "Полепкин Александр",
    photo: "PNG/psychologists/pexels-alexandr-polepkin-10761393.jpg",
    text: [
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore ad fugit sequi nisi, adipisci odio voluptate accusamus delectus veniam ex sapiente repellat quaerat ullam quam necessitatibus magnam laboriosam quidem obcaecati!",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, facilis? Illo voluptatem, eaque id optio, doloremque praesentium unde quisquam accusamus in soluta, nisi ipsa sapiente tenetur a aspernatur rerum temporibus.",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore ad fugit sequi nisi, adipisci odio voluptate accusamus delectus veniam ex sapiente repellat quaerat ullam quam necessitatibus magnam laboriosam quidem obcaecati!",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, facilis? Illo voluptatem, eaque id optio, doloremque praesentium unde quisquam accusamus in soluta, nisi ipsa sapiente tenetur a aspernatur rerum temporibus.",
    ]
  },
  {
    fullname: "Маяковский Ярослав",
    photo: "PNG/psychologists/pexels-mentatdgt-1220757.jpg",
    text: [
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore ad fugit sequi nisi, adipisci odio voluptate accusamus delectus veniam ex sapiente repellat quaerat ullam quam necessitatibus magnam laboriosam quidem obcaecati!",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, facilis? Illo voluptatem, eaque id optio, doloremque praesentium unde quisquam accusamus in soluta, nisi ipsa sapiente tenetur a aspernatur rerum temporibus.",
    ]
  },
  {
    fullname: "Мукаш Аружан",
    photo: "PNG/psychologists/pexels-mentatdgt-1526814.jpg",
    text: [
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. ",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, facilis? Illo voluptatem, eaque id optio, doloremque praesentium unde quisquam accusamus in soluta, nisi ipsa sapiente tenetur a aspernatur rerum temporibus.",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore ad fugit sequi nisi, adipisci odio voluptate accusamus delectus veniam ex sapiente repellat quaerat ullam quam necessitatibus magnam laboriosam quidem obcaecati!"
    ]
  }
]

function getData(id) {
  const person = data[id-1]

  let text = ""

  for (let p = 0; p < person.text.length; p++) {
    text += "<p>" + person.text[p] + "</p>"
  }

  document.getElementById("portfolio").innerHTML = 
    `
    <span></span>
    <div class="content">
      <h3>${person.fullname}</h3>
      <div>
        ${text}
      </div>
    </div>
    <div class="photo">
      <img src="${person.photo}" alt="">
    </div>
    `

    
  for (let i = 1; i <= data.length; i++) {
    document.getElementById("psychologist_"+i).classList.remove("active")
  }

  document.getElementById("psychologist_"+id).classList.add("active")
}