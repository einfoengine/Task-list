// Selectors
const wrapGrps = document.querySelector('#grps');
const nptGrp = document.querySelector('#npt-grp-name');
const btnAddGrp = document.querySelector('#btn-add-grp');
const btnClrGrps = document.querySelector('#btn-clr-grps');
// Store group names
if (localStorage.getItem('grpsList')){
    let grpsName = [`${localStorage.getItem('grpsList')}`];
    btnAddGrp.addEventListener('click', function(){
        grpsName.push(nptGrp.value);
        localStorage.setItem('grpsList', grpsName);
    });
}else {
    let grpsName = [];
    btnAddGrp.addEventListener('click', function(){
        grpsName.push(nptGrp.value);
        localStorage.setItem('grpsList', grpsName);
    });
}
// Clear && Remove Groups
btnClrGrps.addEventListener('click', function () {
    localStorage.clear();
    grps.remove();
});
// Group view
let grpsList = localStorage.getItem('grpsList').split(',');
let wrapGrp;
let ttlGrp;
if(grpsList != null){
    grpsList.forEach(function(itm,ndx) {
        wrapGrp = document.createElement('div');
        ttlGrp = document.createElement('h1');
        ttlGrp.innerText = itm;
        wrapGrps.appendChild(wrapGrp);
        wrapGrp.appendChild(ttlGrp);
    });
}
btnAddGrp.addEventListener('click', function(){
    wrapGrp = document.createElement('div');
    ttlGrp = document.createElement('h1');
    ttlGrp.innerText = nptGrp.value;
    wrapGrps.appendChild(wrapGrp);
    wrapGrp.appendChild(ttlGrp);
});