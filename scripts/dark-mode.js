$(document).ready(function() {
    let darkmode = localStorage.getItem('darkmode')
    const themeSwitch = document.getElementById("mode-button")

    const enableDarkmode = () => {
        document.body.classList.add('darkmode')
        localStorage.setItem('darkmode', 'active')
        themeSwitch.innerHTML = 'Light Mode'
    }

    const disableDarkmode = () => {
        document.body.classList.remove('darkmode')
        localStorage.setItem('darkmode', null)
        themeSwitch.innerHTML = 'Dark Mode'
    }

    if(darkmode === "active") enableDarkmode()
    else disableDarkmode()

    themeSwitch.addEventListener("click", () => {
        darkmode = localStorage.getItem('darkmode')
        darkmode !== "active" ? enableDarkmode() : disableDarkmode()
    })
})

//Most of this code was taken from this video: https://www.youtube.com/watch?v=_gKEUYarehE and implemented into the portfolio
//Coding2Go. (2024, July 28). YouTube. https://www.youtube.com/watch?v=_gKEUYarehE


function toggleRadiantYou() {
    // Get the iframe element 
    const frame = document.getElementById('radiantYouFrame');
    const button = event.target; 
    
    let isHidden = frame.style.display === 'none';
    
    if (isHidden) {
        frame.style.display = 'block';
        button.textContent = 'Hide Project';
    } else {//hide 
        frame.style.display = 'none';
        button.textContent = 'View Project';
    }
}
//Used this to put my idea together on how to hiee/show the element in this case radiantyouframe
//https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp