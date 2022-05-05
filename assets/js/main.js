
// crear variable para almacenar todos los data-targets en una lista para iterar
const tabs = document.querySelectorAll('[data-target]')
// para cada elemento de esa lista se le agrega un EventListener(no se como tradusirlo por que literal al español suena feo "escuchador de evento")
tabs.forEach(tab =>{
  //con cada click se elimina y se agrega una propiedad de una clase de css
    tab.addEventListener('click', () =>{
        tabs.forEach(t => {
            t.classList.remove('fillter-tab-active')
        })
        tab.classList.add('fillter-tab-active')
    })
})