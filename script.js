const alunosLista = document.getElementById('alunos-lista');
const alunosCheckboxes = alunosLista.querySelectorAll('input[type="checkbox"]');

for (let i = 0; i < alunosCheckboxes.length; i++) {
  alunosCheckboxes[i].addEventListener('change', function() {
    const alunoNome = alunosCheckboxes[i].getAttribute('data-aluno');
    const presente = alunosCheckboxes[i].checked;

    if (presente) {
      localStorage.setItem(alunoNome, 'Presente');
    } else {
      localStorage.removeItem(alunoNome);
    }
  });
}