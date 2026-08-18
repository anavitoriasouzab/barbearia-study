

const whatsappNumber = '5592999999999';

const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('#menu-principal');

menuToggle?.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.querySelector('.sr-only').textContent = isOpen ? 'Fechar menu' : 'Abrir menu';
  menuToggle.querySelector('i').className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
});

menu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('is-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    if (menuToggle) {
      menuToggle.querySelector('.sr-only').textContent = 'Abrir menu';
      menuToggle.querySelector('i').className = 'fa-solid fa-bars';
    }
  });
});

const dateField = document.querySelector('#data');
if (dateField) {
  const today = new Date();
  const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000)
    .toISOString()
    .split('T')[0];
  dateField.min = localToday;
}

document.querySelector('#booking-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const feedback = document.querySelector('#form-feedback');

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const fields = new FormData(form);
  const name = fields.get('nome').trim();
  const service = fields.get('servico');
  const date = new Intl.DateTimeFormat('pt-BR', { timeZone: 'UTC' }).format(new Date(`${fields.get('data')}T00:00:00Z`));
  const time = fields.get('horario');
  const message = `Olá! Meu nome é ${name}. Gostaria de solicitar um horário na Barba Brava.%0A%0AServiço: ${service}%0AData desejada: ${date}%0AHorário preferido: ${time}`;

  feedback.textContent = 'Abrindo o WhatsApp com seus dados…';
  window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank', 'noopener');
});
