const d = document;

function filterSearch(){
    const input = d.getElementById("#photo-filter"),
    photo = d.getElementById("#photo");

    d.addEventListener("keyup", e =>{
    if(e.target === input){

        //if(e.key === "Esc").target.value = "";

        d.querySelectorAll(photo).forEach((el) =>
            el.textContent.toLowerCase.includes(e.target.vlaue)
            ?el.classList.remove("filter")
            :el.classList.add("filter")
        )
    }
});
}

d.addEventListener("DOMContentLoaded", filterSearch());

