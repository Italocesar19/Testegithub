/*=============== MOSTRAR MENU ===============*/
const showMenu = (toggleId, navId) => {
    // Obtém os elementos do botão de alternância (toggle) e o menu de navegação (nav)
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId);

    // Adiciona um evento de clique ao botão de alternância
    toggle.addEventListener('click', () => {
        // Alterna a classe "show-menu" no menu de navegação (para mostrar ou ocultar)
        nav.classList.toggle('show-menu');
        // Alterna a classe "show-icon" no botão de alternância (para mudar o ícone)
        toggle.classList.toggle('show-icon');
    });
};

// Chama a função para ativar o menu com base nos IDs dos elementos
showMenu('nav-toggle', 'nav-menu');

/*=============== MOSTRAR MENU DROPDOWN ===============*/
// Seleciona todos os itens com a classe .dropdown__item
const dropdownItems = document.querySelectorAll('.dropdown__item');

// Itera sobre cada item do dropdown
dropdownItems.forEach((item) => {
    // Seleciona o botão dentro do item
    const dropdownButton = item.querySelector('.dropdown__button');

    // Adiciona um evento de clique no botão
    dropdownButton.addEventListener('click', () => {
        // Verifica se algum outro dropdown está aberto
        const showDropdown = document.querySelector('.show-dropdown');
        
        // Alterna a exibição do item atual
        toggleDropdown(item);

        // Fecha o dropdown anterior se for diferente do atual
        if (showDropdown && showDropdown !== item) {
            toggleDropdown(showDropdown);
        }
    });
});

// Função para abrir ou fechar o dropdown
const toggleDropdown = (item) => {
    // Seleciona o conteúdo do dropdown
    const dropdownContainer = item.querySelector('.dropdown__container');

    // Se o dropdown já estiver aberto, fecha
    if (item.classList.contains('show-dropdown')) {
        dropdownContainer.style.height = ''; // Remove a altura
        item.classList.remove('show-dropdown'); // Remove a classe "show-dropdown"
    } else {
        // Abre o dropdown, ajustando a altura dinamicamente
        dropdownContainer.style.height = dropdownContainer.scrollHeight + 'px';
        item.classList.add('show-dropdown'); // Adiciona a classe "show-dropdown"
    }
};

/*=============== REMOVER ESTILOS DO DROPDOWN ===============*/
const mediaQuery = matchMedia('(min-width: 1118px)'),
      dropdownContainers = document.querySelectorAll('.dropdown__container');

// Função para remover estilos do dropdown quando a tela for redimensionada para desktop
const removeDropdownStyles = () => {
    // Verifica se a largura da tela é maior ou igual a 1118px
    if (mediaQuery.matches) {
        // Remove o estilo de altura de todos os containers de dropdown
        dropdownContainers.forEach((container) => {
            container.removeAttribute('style');
        });

        // Remove a classe "show-dropdown" de todos os itens de dropdown
        dropdownItems.forEach((item) => {
            item.classList.remove('show-dropdown');
        });
    }
};

// Adiciona um evento para detectar o redimensionamento da tela e chamar a função
window.addEventListener('resize', removeDropdownStyles);
