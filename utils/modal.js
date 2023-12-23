const modal = document.getElementById("modal");
const modalText = modal.querySelector("p");

const showModal = (Text) =>{
    modalText.innerText = Text;
    modal.style.display = "flex";
};

const removeModal = ()=>{
    modal.style.display="none";
};

export {showModal,removeModal};