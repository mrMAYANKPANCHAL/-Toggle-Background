const toggle = document.getElementById("toggle")

// Load saved theme

if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark")
    toggle.checked = true
}

// Toggle theme

toggle.addEventListener("change", function(){

    if(toggle.checked){
        document.body.classList.add("dark")
        localStorage.setItem("theme","dark")
    }
    else{
        document.body.classList.remove("dark")
        localStorage.setItem("theme","light")
    }

})