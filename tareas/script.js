( () =>{
const btn = document.querySelector("[data-form-btn]");

const crearTarea = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    const list = document.querySelector("[data-list]");
    const tarea = document.createElement("li");
    tarea.classList.add("card");
    input.value = ""
    
    const tareaContent = document.createElement("div");
    tareaContent.appendChild(checkComplete());
    const tituloTarea = document.createElement('span');
    tituloTarea.classList.add('task');
    tituloTarea.innerText = value;
    tareaContent.appendChild(tituloTarea);


    
    tarea.appendChild(tareaContent);
    tarea.appendChild(deleteIcon());
    list.appendChild(tarea);

}
btn.addEventListener("click", crearTarea);

const checkComplete = () => {
    const i = document.createElement("i");
    i.classList.add('far', 'fa-check-square', 'icon');
    i.addEventListener('click', completeTarea)
    return i;
}

const completeTarea = (event) => {
    const element = event.target;
    element.classList.toggle('fas');
    element.classList.toggle('completeIcon');
    element.classList.toggle('far');

}

const deleteIcon = () =>{
    const i = document.createElement('i');
    i.classList.add('fas', 'fa-trash-alt', 'trashIcon', 'icon');
    i.addEventListener('click', deleteTarea);
    return i;
}

const deleteTarea = (event) =>{
    const parent= (event.target.parentElement);
    parent.remove();
   
};

})();