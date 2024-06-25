export const HandleDark = () => {
        const nav: any = document.querySelector('#nav')
        const box: any = document.querySelector('#box-nav')
        const icon: any = document.querySelector('#icon')
        const ball2: any = document.querySelector('#pokeball')
        
        var host = window.location.protocol + "//" + window.location.host ;
        nav.classList.toggle("dark-nav");
        box.classList.toggle("bg-black");
        if (icon.src == (`${host}/images/half-moon.png`)) {
                icon.setAttribute("src",'/images/sun.png')
                ball2.setAttribute("src",'/images/pokeball.png')
        } else if (icon.src == (`${host}/images/sun.png`)) {
                icon.setAttribute("src",'/images/half-moon.png')
                ball2.setAttribute("src",'/images/ball-dark.png')
        }
}