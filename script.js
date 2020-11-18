cookies.set('Mine', 'true',7);
var myCookie=cookies.get('Mine');
var title=document.querySelector('h1')
if(myCookie){
    title.classList.add("cookie");


}
if(myCookie==="false"){
    title.classList.remove("cookie");
}