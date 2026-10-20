const menuToggle = document.getElementById('menuToggle');
const navigation = document.getElementById('navigation');
menuToggle.addEventListener('click', () => {
  const open = navigation.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.textContent = open ? '×' : '☰';
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navigation.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.textContent = '☰';
}));
document.querySelectorAll('.filter').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    const selected = button.dataset.filter;
    document.querySelectorAll('.design-card').forEach(card => {
      card.classList.toggle('hidden', selected !== 'all' && card.dataset.category !== selected);
    });
  });
});
document.getElementById('year').textContent = new Date().getFullYear();
// Before publishing, replace the placeholder contact details and set your WhatsApp number.
const whatsappNumber = '2349156269827'; // Nigeria country code +234; omit the leading 0.
const whatsappLink = document.getElementById('whatsappLink');
if (whatsappNumber) {
  whatsappLink.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hello, I am interested in your graphic design services.')}`;
  whatsappLink.textContent = 'Chat with me on WhatsApp ↗';
  whatsappLink.target = '_blank';
  whatsappLink.rel = 'noopener';
}
