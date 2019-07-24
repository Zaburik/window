function callMeasurer() {

let btnCall = document.querySelector('.header_btn'),
    btnModal = document.querySelector('.popup_engineer'),
    mainForm = document.querySelector('.main-form'),
    input = btnModal.getElementsByTagName('input'),
    statusMessage= document.createElement('div'),
    inputWrapper,
    close = document.getElementById('btn_close');

    let message = {
        loading: "Loading",
        success: "Спасибо! Скоро мы с Вами свяжемся",
        failure: "Что-то пошло не так..."
    };
    mainForm.appendChild(statusMessage);
////////////////////////////////////////////////////////// вызов и закрытие окна
    btnCall.addEventListener('click', function(){
        btnModal.style.display="block";
        document.body.style.overflow = "hidden";
    });
    
    close.addEventListener('click', function(){
        btnModal.style.display="none";
       
        clearInput();
        if(statusMessage=== null || statusMessage=== undefined || statusMessage=== "" ){
        } else {
            statusMessage.style.display="none";
            document.body.style.overflow = "";
            
        }
    });

    btnModal.addEventListener('click',function(event){
        let target = event.target;
        if(target==btnModal) {
            btnModal.style.display="none";
            
        if(statusMessage=== null || statusMessage=== undefined || statusMessage=== "" ){
        } else {
            // statusMessage.remove();
            statusMessage.style.display="none";
            document.body.style.overflow = "";
            // console.log('lol');
           
        }
        }
    });
    function clearInput() {
        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
        }
    }
///////////////////////////////////////////////////////проверка телефона
function validatePhone (a) {
    return /^(\+|\d)\d{0,12}$/.test(a);
}

input[1].addEventListener('input', function(){
    if (!validatePhone(this.value)) {
        this.value = this.value.slice(0, -1);
    }
});
/////////////////////////////////////////////////////

mainForm.addEventListener('submit', function (event) {
    
    inputWrapper = input[1].value;
    arr = inputWrapper.split('');

    if (!isNaN(+input[1].value) || (input[1].value[0] == '+' && !(isNaN(+input[1].value.slice(1, input[1].value.length + 1))))) {

        event.preventDefault();
        
        let formData = new FormData(mainForm);

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
                // console.log(obj);
                let json = JSON.stringify(obj);

                requestSecond.send(json);
                statusMessage.innerHTML = message.loading;
            statusMessage.style.display="block";
            });
        } // end postData
      

        postData(formData)
            
            .then(() =>{statusMessage.innerHTML = message.success;
                statusMessage.style.display="block";} )
            .catch(() =>{statusMessage.innerHTML = message.failure;
                statusMessage.style.display="block";} )
            .then(clearInput);


    } else {
        event.preventDefault();
        mainForm.appendChild(statusMessage);
        statusMessage.innerHTML = "Используйте цифры и знак +";
    }
});

}
module.exports = callMeasurer;