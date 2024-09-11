function validarEmailOuCpf(valor) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const regexCpf = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

    return regexEmail.test(valor) || regexCpf.test(valor);
}

document.getElementById("formulario").addEventListener("submit", function (event) {
    const valor = document.getElementById("emailCpf").value;

    if (!validarEmailOuCpf(valor)) {
        event.preventDefault();
        alert("Por favor, insira um email ou CPF válido.");
    }
});