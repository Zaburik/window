function calc() {
    let glazingPriceBtn = document.querySelectorAll('.glazing_price_btn'),
        modalPopupCalc = document.querySelector('.popup_calc'),
        popupCalcContent = document.querySelector('.popup_calc_content'),
        btnCloseM1 = document.querySelector('.popup_calc_close');


        glazingPriceBtn.forEach(function(item){ // Open modal 1
            item.addEventListener('click', function(){
                popupCalcContent.style.top ="3%";
                modalPopupCalc.style.display="block";
                decorationChild[0].classList.add('active_tab');
            });
        });

        btnCloseM1.addEventListener('click', function(event){ // Close modal 1
            modalPopupCalc.style.display="none";
            clearInput();
        });

let tabWrapper = document.querySelector('.balcon_icons'),
    popupCalc = document.querySelector('.popup_calc');
    tab = document.querySelectorAll('.icon_type'),    
    decorationChild = document.querySelectorAll('.tabs_img'),
    // decorationChildAlt = document.querySelectorAll('.tabs_img').alt,
    tabContent = document.querySelectorAll('.big_img_content'),
    popupInputCalc = popupCalc.getElementsByTagName('input');
    // console.log(decorationChildAlt);
    ////////////// check input forms
    function validatePhone (a) {
        return /^(|\d)\d{0,12}$/.test(a);
    }
    
    popupInputCalc[0].addEventListener('input', function(){
        if (!validatePhone(this.value)) {
            this.value = this.value.slice(0, -1);
        }
    });
    popupInputCalc[1].addEventListener('input', function(){
        if (!validatePhone(this.value)) {
            this.value = this.value.slice(0, -1);
        }
    });
   
    

    /////////////////////////////////
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
                item.classList.add('active_tab');
            } else {
                item.classList.remove('active_tab');
            }
        });
    }
    decorationChild[0].classList.add('active_tab');


    tabWrapper.addEventListener('click', function (event) {
        event.preventDefault();
        let target = event.target;
        if (target && target.classList.contains('tabs_img')) {
            for (let i = 0; i < decorationChild.length; i++) {
                if (target == decorationChild[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    if(!(decorationChild[i].classList.contains('active_tab'))){
                        addActiveClass(decorationChild[i]);
                    } else{console.log('no');}
                    break;
                }
            }
        } 
       
    });
/// send form 1
let popupCalcButton = popupCalc.querySelector('.popup_calc_button'),
    popupCalcProfile = document. querySelector('.popup_calc_profile'),
    btnCloseM2 = document.querySelector('.popup_calc_profile_close'),
    checkboxInput1= document.querySelectorAll('.checkbox')[0],
    checkboxInput2= document.querySelectorAll('.checkbox')[1],
    popupCalcButton2= document.querySelector('.popup_calc_profile_button'),
    popupCalcEnd = document.querySelector('.popup_calc_end'),
    popupEndInput = popupCalcEnd. getElementsByTagName("input");
    fcSelect = document.querySelector('.fc-select'),
    fcOptions = fcSelect.getElementsByTagName('option');
    // console.log(fcOptions);


    btnCloseM2.addEventListener('click', function(){
        popupCalcProfile.style.display= "none";
        clearInput();
        // console.log(formData);
    });

popupCalcButton.addEventListener('click', function(){
    if(!(popupInputCalc[1].value === "" || popupInputCalc[1].value === null && popupInputCalc[0].value === "" || popupInputCalc[1].value === null)){
        modalPopupCalc.style.display="none";
        popupCalcProfile.style.display="block";

        for(let i=0; i<decorationChild; i++){
            // console.log(decorationChild[i]);
        }
          decorationChild.forEach(function(item){
            if(item.classList.contains('active_tab')){
                formData.append("typeProfil", item.alt);
            }
          });

        formData.append("width",popupInputCalc[0].value);
        formData.append("height",popupInputCalc[1].value);
        // console.log(formData.values);
        clearInput();
 
    } else {
        alert("введите параметры");
    }
});

checkboxInput1.addEventListener('click', function(){
    if(checkboxInput2.checked){
    checkboxInput2.checked = false;
    }
});
checkboxInput2.addEventListener('click', function(){
    if(checkboxInput1.checked){
    checkboxInput1.checked = false;
    }
});

popupCalcButton2.addEventListener('click', function(){
    if(checkboxInput1.checked == true || checkboxInput2.checked == true){
        popupCalcProfile.style.display="none";
        popupCalcEnd.style.display ="block";

        formData.append("type", fcSelect.options[fcSelect.selectedIndex].value);
        if(checkboxInput2.checked){
            formData.append("profileType", "hot");
        } else{
            formData.append("profileType", "cold");
        }
        clearInput();
        // console.log(formData.values);

    } else {
        alert("выберите параметры");
    }
});
// ////////////////// form 3
let closeForm3 =document.querySelector('.popup_calc_end_close'),
    btnForm3 = popupCalcEnd.getElementsByTagName('button')[1],
    inputCalcEnd1 = popupCalcEnd.getElementsByTagName('input')[0],
    inputCalcEnd2 = popupCalcEnd.getElementsByTagName('input')[1],
    statusMessage=document.createElement('div'),
    formLast = document.querySelector('.form-last'),
    formData = new FormData();

    formLast.appendChild(statusMessage);
    

    function clearInput() {
        inputCalcEnd1.value ='';
        inputCalcEnd2.value ='';
        checkboxInput1.checked = false;
        checkboxInput2.checked = false;
        popupInputCalc[0].value="";
        popupInputCalc[1].value="";
        // formData = new FormData();
        fcSelect.selectedIndex = 0;
        addActiveClass(0);
    }

    closeForm3.addEventListener('click', function(){
        popupCalcEnd.style.display ="none";
        clearInput();
        statusMessage.style.display='none';
        // console.log(formData);
    });
    inputCalcEnd2.addEventListener('input', function(){
        if (!validatePhone(this.value)) {
            this.value = this.value.slice(0, -1);
        }
    });

    let message = {
        loading: "Loading",
        success: "Спасибо! Скоро мы с Вами свяжемся",
        failure: "Что-то пошло не так..."
    };

    btnForm3.addEventListener('click', function(event){
        event.preventDefault();
        formData.append("userName", inputCalcEnd1.value );
        formData.append("userPhone", inputCalcEnd2.value );


        function postData(data) {
            return new Promise(function (resolve, reject) {
                let requestSecond = new XMLHttpRequest();
                requestSecond.open('POST', 'server.php');
                requestSecond.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

                requestSecond.addEventListener('readystatechange', function () {
                    if (requestSecond.readyState < 4) {
                        resolve();
                    } else if (requestSecond.readyState == 4 && requestSecond.status == 200) {
                        resolve();
                    } else {
                        reject();
                    }
                });
                let obj = {};
                data.forEach(function (value, key) {
                    obj[key] = value;
                });
                console.log(obj);
                let json = JSON.stringify(obj);
                console.log(json);
                requestSecond.send(json);
                statusMessage.innerHTML = message.loading
            });
        } // end postData
        
        statusMessage.style.display="block";
        postData(formData)
           
            .then(() => statusMessage.innerHTML = message.success)
            .catch(() => statusMessage.innerHTML = message.failure)
            .then(clearInput);


        // console.log(formData.values);
    });
}
module.exports= calc;