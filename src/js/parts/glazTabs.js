function glazTabs() {
    let tabWrapper = document.querySelector('.glazing_slider'),
    tab = document.querySelectorAll('.btn-glaz'),
    glazingBlock = document.querySelectorAll('.glazing_block'),
    decorationChild = document.querySelectorAll('.decoration-child'),// используй табы
    tabContent = document.querySelectorAll('.tab-glaz');

    // console.log(tabWrapper);
    // console.log(tab);
    // console.log(tabContent);

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
        tab.forEach( function(item){
            // console.log(item);
            // console.log(a);
            if (item== a){
                item.classList.add('active');
                // item.classList.add('after_click');
            } else {
                item.classList.remove('active');
                // item.classList.add('after_click');
            }
        });

    }

    tabWrapper.addEventListener('click', function (event) {
        let target = event.target,
            parentTab;
            // console.log(target && (target.parentNode.classList.contains('glazing_block') || target.classList.contains('glazing_block')));
        if (target && (target.parentNode.classList.contains('glazing_block') || target.classList.contains('glazing_block'))) {
            for (let i = 0; i < tabContent.length; i++) {
                if (target == tab[i]  || target == glazingBlock[i] || target.parentNode == glazingBlock[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    parentTab = tab[i].parentNode;
                    // console.log(parentTab);
                    if(!(parentTab.classList.contains('active'))){
                        addActiveClass(tab[i]);
                    } else{console.log('no');}
                    break;
                }
            }
        } 
       
    });

}

module.exports = glazTabs;