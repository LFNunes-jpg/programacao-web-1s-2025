document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    const inputs = form.querySelectorAll('input, textarea');
    let valid = true;

    inputs.forEach(input => {
      if (input.name !== 'observacao' && input.value.trim() === '') {
        alert(`O campo "${input.name}" é obrigatório!`);
        valid = false;
      }
    });

    if (!valid) {
      e.preventDefault(); // Cancela o envio do formulário
    }
  });
});
