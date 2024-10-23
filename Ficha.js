function salvarFicha() {
    const nomeProprietario = document.getElementById('nome_proprietario').value;
    const enderecoProprietario = document.getElementById('endereco_proprietario').value;
    const telefoneProprietario = document.getElementById('telefone_proprietario').value;
    const nomeAnimal = document.getElementById('nome_animal').value;
    const especieAnimal = document.getElementById('especie_animal').value;
    const racaAnimal = document.getElementById('raca_animal').value;
    const idadeAnimal = document.getElementById('idade_animal').value;
    const sexoAnimal = document.getElementById('sexo_animal').value;
    const historicoMedicoAnimal = document.getElementById('historico_medico_animal').value;
    const vacinacoes = document.getElementById('vacinacoes').value;
    const ultimaVacinacao = document.getElementById('ultima_vacinacao').value;
    const observacoes = document.getElementById('observacoes').value;

    const ficha = `Informações do Proprietário:\nNome: ${nomeProprietario}\nEndereço: ${enderecoProprietario}\nTelefone: ${telefoneProprietario}\n\n` +
                  `Informações do Animal:\nNome: ${nomeAnimal}\nEspécie: ${especieAnimal}\nRaça: ${racaAnimal}\nIdade: ${idadeAnimal}\nSexo: ${sexoAnimal}\n\n` +
                  `Histórico Médico:\n${historicoMedicoAnimal}\n\nVacinações:\n${vacinacoes}\nÚltima Vacinação: ${ultimaVacinacao}\n\n` +
                  `Observações Adicionais:\n${observacoes}`;

    const blob = new Blob([ficha], { type: 'text/plain;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `ficha_veterinaria_${nomeAnimal}.txt`;
    link.click();

    alert("Ficha veterinária salva com sucesso!");
}

function previewImage(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
        const preview = document.getElementById('image-preview');
        preview.innerHTML = `<img src="${e.target.result}" alt="Foto do Animal">`;
    }
    reader.readAsDataURL(file);
}