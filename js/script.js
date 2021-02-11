$('#openMenu').click(function(){
    $('#mobileMenu').toggleClass('active');
});


let openModal = document.getElementById('openModal');
let closeModal = document.getElementById('closeModal');
let modalPage = document.getElementById('modalPage');

openModal.onclick = function(){
    modalPage.style.display = "block";
}
closeModal.onclick = function(){
    modalPage.style.display = "none";
}
window.onclick = function(e){
    if(e.target == modalPage){
        modalPage.style.display = "none";
    }
};