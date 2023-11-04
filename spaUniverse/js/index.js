


const routes = {
    "/universe": "/pages/universe.html",
    "/exploration": "/pages/exploration.html",
    "/": "/pages/home.html",
    404: "/pages/404.html",
}

function route(event) {
    event = event || window.event
    event.preventDefault()
    
    window.history.pushState({}, "", event.target.href)
    // target pede quem disparou o event, como quem disparou o evento foi o a a gente adiciona o href para imprimir no console.log
    
    handle()
    }


    function handle() {
        const {pathname} = window.location
        // const pathname = window.location.pathname
        const route = routes[pathname] || routes[404]
        
        fetch(route)
        .then(data => data.text())
        .then(html => {document.querySelector('#app').innerHTML = html
        })

         
    }
handle()
window.onpopstate = () => handle()
window.route = () => route()