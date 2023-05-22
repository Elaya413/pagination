
//let ul=document.getElementById('wrappper')

const ul=document.querySelector('ul');
let allpages=5;
function elem(allpages,page){

let li='';
let beforepages=(page-1);

let afterepages=(page+1);
let liActive;
if(page > 1){
    li+=`<li class="btn" onclick="elem(allpages,${page-1})"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
    <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
  </svg></li>`;
}
for(let pagelength=beforepages;pagelength<=afterepages;pagelength++){
        if(pagelength > allpages){
            continue;
        }
        if(pagelength == 0){
            pagelength=pagelength + 1;
        }
        if (page == pagelength){
            liActive='active';

        }else{
            liActive='';
        }
        li+=`<li class="numb${liActive}" onclick="elem=(allpages,${pagelength}})"><span>${pagelength}</span></li>`


    }

if(page<allpages){
    li+=`<li class='btn' onclick="elem(allpages,${page+1})"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
  </svg></li>`;

}
ul.innerHTML=li;



}
elem(allpages,2);










