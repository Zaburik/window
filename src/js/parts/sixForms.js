function sixForms() {
let arrMainForm = document.querySelectorAll('.main_form'),
    arrInput = document.querySelectorAll('.six-inputs'),
    statusMessage = document.createElement('div'),
    parentInput,
    btnSubmit, 
    targetInput,
    targetParent;

    let message = {
        loading: "Loading",
        success: "Спасибо! Скоро мы с Вами свяжемся",
        failure: "Что-то пошло не так..."
    };

///////////////////////////////////////////////////////проверка телефона
function validatePhone (a) {
    return /^(\+|\d)\d{0,12}$/.test(a);
}


/////////////////////////////////////////////////////
arrInput.forEach(function(item){
    item.addEventListener('input', function(event){
        if (!validatePhone(this.value)) {
            this.value = this.value.slice(0, -1);
        }
    });
});

arrMainForm.forEach(function(item){
    item.addEventListener('submit', function(eve){
        event.preventDefault();
        let target = event.target;
        console.log(target);
        for (let i = 0; i < item.length; i++) {
                targetInput =target.getElementsByTagName('input');
                targetParent = target;
                targetInput[1].addEventListener('input', function(){
                   
                });
               
        }
        requestFunc();
    });
});


function requestFunc() {


        targetParent.appendChild(statusMessage);
        let formData = new FormData(targetParent);

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
                statusMessage.innerHTML = message.loading
            });
        } // end postData
        function clearInput() {
            for (let i = 0; i < targetInput.length; i++) {
                targetInput[i].value = '';
            }
        }

        postData(formData)
    
            .then(() => statusMessage.innerHTML = message.success)
            .catch(() => statusMessage.innerHTML = message.failure)
            .then(clearInput);



}

}

module.exports= sixForms;