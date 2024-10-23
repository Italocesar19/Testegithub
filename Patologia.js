function toggleSubmenu(event, submenuId) {
    event.preventDefault();
    const submenu = document.getElementById(submenuId);
    submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
}

function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const content = document.querySelector('.content');
    const isCollapsed = sidebar.style.width === '80px';
    sidebar.style.width = isCollapsed ? '250px' : '80px';
    content.style.marginLeft = isCollapsed ? '270px' : '100px';
}

document.querySelectorAll('.sidebar ul li a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelectorAll('.sidebar ul li a').forEach(item => {
            item.style.backgroundColor = '';
        });
        this.style.backgroundColor = '#474645';
    });
});