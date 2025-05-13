$(document).ready(function() {
    $('#ArtistasAbrir').click(function() {
        $('#Artistas').slideToggle(300); // 300ms de animação
    });

    $('.toggle-btn').click(function() {
        var targetId = $(this).attr('id').replace('Abrir', '');
        $('#' + targetId).slideToggle(300); // mesma animação suave
    });
});

function validarFormulario() {
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let mensagem = document.getElementById('mensagem').value;

    if (!nome || !email || !mensagem) {
        alert('Todos os campos são obrigatórios.');
        return false;
    }

    alert('Mensagem enviada com sucesso!');
    return true;
}
