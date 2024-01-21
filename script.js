document.getElementById('menu').addEventListener('click', function toggleside () {
    const sidebar = document.getElementById('side');
    sidebar.style.display="block";
});

document.getElementById('close').addEventListener('click', function untoggleside () {
    const sidebar = document.getElementById('side');
    sidebar.style.display="none";
});
