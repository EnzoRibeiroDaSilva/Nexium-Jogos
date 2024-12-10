const body = document.body
const main = document.main
const header = document.header
const footer = document.footer

function Modo_escuro(){
    body.classList.toggle('dark-mode');
    main.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
}

// script.js

const monthYearElement = document.getElementById("month-year");
const daysContainer = document.getElementById("days-container");

const months = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

let currentDate = new Date();

function renderCalendar(date) {
  const year = date.getFullYear();
  const month = date.getMonth();

  // Atualiza o título do calendário
  monthYearElement.textContent = `${months[month]} ${year}`;

  // Obtém o primeiro dia e o número total de dias no mês
  const firstDay = new Date(year, month, 1).getDay();
  const lastDay = new Date(year, month + 1, 0).getDate();

  // Limpa os dias anteriores
  daysContainer.innerHTML = "";

  // Adiciona espaços vazios antes do primeiro dia
  for (let i = 0; i < firstDay; i++) {
    const emptyDiv = document.createElement("div");
    daysContainer.appendChild(emptyDiv);
  }

  // Adiciona os dias do mês
  for (let day = 1; day <= lastDay; day++) {
    const dayDiv = document.createElement("div");
    dayDiv.textContent = day;

    // Destaca o dia atual
    if (
      day === new Date().getDate() &&
      month === new Date().getMonth() &&
      year === new Date().getFullYear()
    ) {
      dayDiv.classList.add("today");
    }

    daysContainer.appendChild(dayDiv);
  }
}

function changeMonth(step) {
  currentDate.setMonth(currentDate.getMonth() + step);
  renderCalendar(currentDate);
}

// Renderiza o calendário inicialmente
renderCalendar(currentDate);

