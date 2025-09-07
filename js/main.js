window.addEventListener('load',()=>{
    const cover = document.getElementById('cover');
    if(cover.classList.contains('active')){
        window.scrollTo({
            top : document.body.scrollHeight,
            behavior : 'smooth'
        })
    }
})

document.getElementById('startBtn').addEventListener('click', ()=>{
    showPage('lesson1');
})
document.getElementById('nextBtn1').addEventListener('click', ()=>{
    showPage('lesson');
})
document.getElementById('nextBtn').addEventListener('click', ()=>{
    showPage('quiz');
})
document.getElementById('backBtn').addEventListener('click', ()=>{
    showPage('lesson1');
})
document.getElementById('backBtn1').addEventListener('click', ()=>{
    showPage('cover');
})
document.getElementById('backBtn2').addEventListener('click', ()=>{
    showPage('lesson');
})



function showPage(pageId){
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');

    window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}