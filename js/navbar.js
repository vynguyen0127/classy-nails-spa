fetch('nav.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#replace_with_navbar");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem)
    // var navLinks = newelem.getElementsByTagName("li")
    // console.log(navLinks)
    // const arr = Array.from(navLinks);
    // var currentPage = window.location.pathname.split("/").pop(); // Get current page filename
    // console.log(currentPage)
    // arr.forEach(link => {
    //     var a = link.getElementsByTagName("a")
    //     var temp = Array.from(a)
        
        // if (a.getAttribute("href") === currentPage) {
        //     console.log("Adding current to link")
        //   link.classList.add("current"); // Add "current" class to parent <li>
        // }
    //   });
})


