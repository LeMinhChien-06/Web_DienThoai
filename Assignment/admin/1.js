var sidebar = document.querySelector('.sidebar');
var toggleBtn = document.querySelector('.sidebar-toggle');

toggleBtn.addEventListener('click', function() {
    sidebar.classList.toggle('sidebar-collapsed');
});