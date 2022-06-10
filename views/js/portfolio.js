const data = [
  {
    fullname: "Крымова Алина",
    photo: "PNG/psychologists/pexel-1520760.jpg",
    text: [
      'В своей работе я использую в основном методы аналитической школы, юнгианского анализа, когнитивно-поведенческой терапии, процессуально-ориентированной психологии. Я работаю для цели "роста" клиента, вижу своей задачей не столько простое консультирование или поддержку, хотя иногда это является основным запросом, сколько укрепление психики клиента, я помогаю стать "сильнее", "гибче", "свободней". ',
      'Как мы ходим в спортивный зал для укрепления мышц, так я вижу работу с психотерапевтом как наращивание психической силы, которая сможет "поднимать" самые большие процессы и дела. "Комплексы", "травмы", проблемы психики - связаны не столько с тем, что с человеком случилось что-то плохое, а с тем, что он не смог это пережить, по различным причинам (малый возраст, отсутствие поддержки, нехватка опыта и.т.д....), не смог "поднять" свалившийся груз и теперь вынужден избегать чувств, защищаться от этого опыта. Задача психотерапии - накопить силы, увеличить "мощность" психики, связей в головном мозге, чтобы суметь переживать то, что происходит, не прятаться, не убегать, не отрицать, не заливать и не заедать, а жить полной жизнью. Для достижение этих задач я преимущественно опираюсь на теории структуры психики и защит, которые она использует. В свой работе я стараюсь увидеть потребности и нехватку в душе клиента, нехватку поддержки, принятия, понимания, чтобы восполнив их, дать возможность расти и развиваться. Знаю, что у всех есть ресурс "выйти" из любого комплекса и травмы, порой, просто нужно терпение и время.',
    ]
  },
  {
    fullname: "Полепкин Александр",
    photo: "PNG/psychologists/pexels-alexandr-polepkin-10761393.jpg",
    text: [
      "Основным своим инструментом я считаю гештальт-терапию, которую изучаю с 2008 года. Гештальт подход опирается на научно обоснованные феномены восприятия окружающего мира, что делает его эффективным при решении проблем в отношениях, самооценки и прочее. Однако, есть клиенты, которым нелегко работать с эмоциями, чувствами и ощущениями, им ближе мыслительная и логическая формы общения. Таким людям больше подходит когнитивно-поведенческая терапия (КПТ) и ее поиск адаптивных способов справляться с теми же фобиями и паническими атаками. Мои сессии состоят из диалога, при необходимости - эксперимента, бывают домашние задания.",
    ]
  },
  {
    fullname: "Маяковский Ярослав",
    photo: "PNG/psychologists/pexels-mentatdgt-1220757.jpg",
    text: [
      'Я работаю в технике Понимающей психотерапии, ценность и цель этого метода в том, чтобы услышать и понять клиента, вместе с ним разобраться и найти выход из критической жизненной ситуации. Во время сессии я слушаю клиента и задаю вопросы, чтобы лучше понять собеседника. При необходимости и в зависимости от запроса клиента применяю ту или иную методику, которых множество. Плюс понимающей психотерапии в том, что в неё хорошо встраиваются методики из других подходов: гештальт-терапии, психоанализа, когнитивной, позитивной и других. Кроме того, я применяю авторский метод российского психотерапевта А.М. Бурно "Пустое усилие". Этот метод позволяет быстро и эффективно "убирать" слишком сильные эмоции, мучающие клиента.',
    ]
  },
  {
    fullname: "Мукаш Аружан",
    photo: "PNG/psychologists/pexels-mentatdgt-1526814.jpg",
    text: [
      'Основной формат сессии - это беседа. Оптимальное количество встреч 1-2 в неделю. На терапии я предпочитаю идти "за клиентом": Вы сможете спокойно задавать своё направление. Главное, чтоб Вы внесли в процесс личный материал: чувства, переживания, воспоминания, фантазии, сновидения. Обязательных домашних заданий нет. Но, возможно, Вы сами захотите попробовать что-то из того, что мы обсудим. ',
      'Терапия в юнгианском анализе достаточно долгосрочна: от нескольких месяцев, до нескольких лет. Однако главная её ценность в том, что она направлена НЕ на быстрые "симптоматические" решения одной-двух точечных проблем, а на устойчивые изменения на глубинном уровне, которые имеют значимый масштаб и никуда не исчезнут после прекращения терапии.',    
    ]
  }
]

function getData(id) {
  const person = data[id-1]

  let text = ""

  for (let p = 0; p < person.text.length; p++) {
    text += "<p>" + person.text[p] + "</p>"
  }

  if (document.getElementById("option"))
    document.getElementById("option").value = getDataPost(id)

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

function getDataPost(id) {
  return data[id-1].fullname
}