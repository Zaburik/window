function tabs(){
let tabWrapper = document.querySelector('.decoration_slider'),
    tab = document.querySelectorAll('.btn-item'),
    decorItem = document.querySelectorAll('decoration_item'),
    decorationChild = document.querySelectorAll('.decoration-child'),
    tabContent = document.querySelectorAll('.tab_content');
    

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }
    function addActiveClass(a){
        decorationChild.forEach( function(item){
            if (item== a){
                item.classList.add('after_click');
            } else {
                item.classList.remove('after_click');
            }
        });

    }

    tabWrapper.addEventListener('click', function (event) {
        let target = event.target,
            parentTab;
        if (target && target.classList.contains('btn-item') || target.classList.contains('decoration-child')) {
            for (let i = 0; i < tab.length; i++) {
                console.log(tab[i].parentNode);
                console.log(target);
                if (target == tab[i] || target == tab[i].parentNode ) {
                    hideTabContent(0);
                    showTabContent(i);
                    parentTab = tab[i].parentNode;
                    // preParent =parentTab.parentNode;
                    console.log(parentTab);
                    // console.log(preParent);
                    if(!(parentTab.classList.contains('after_click'))){
                        addActiveClass(parentTab);
                        // parentTab.classList.add('after_click');
                    } else{console.log('no');}
                    break;
                }
            }
        } 
       
    });

    
}
module.exports = tabs;