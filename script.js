const showMenu = document.getElementById('nav-toggle'),
    sidebar = document.getElementById('sidebar') 

    if(sidebar && showMenu){
        showMenu.addEventListener('click',()=>{
            sidebar.classList.toggle('show')
            showMenu.classList.toggle('rotate')
        })
    }