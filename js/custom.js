// more text, main part in index.html
function showText(el) {
    if(el.previousElementSibling.clientHeight === 80) {
        el.previousElementSibling.style.height = "100%";
        el.innerHTML = "Pokaż mniej...";
    } else {
    	el.previousElementSibling.style.height = "80px";
        el.innerHTML = "Czytaj więcej...";
    }
} 
// ////more text, main part in index.html


// login Form
 function validate() {
        let log = new Array();
        let pas = new Array();
        let login_ok = false;
        let user_name;
        let password;

        log[0]="1sauna2020";
        log[1]="2sauna2019";
        pas[0]="1sauna2019";
        pas[1]="2sauna2020";

            user_name = prompt("Login", "") || "";
            user_name = user_name.toLowerCase();
            password = prompt("Hasło", "") || "";
            password = password.toLowerCase();

    if (user_name == log[0] && password == pas[0]) {
             login_ok = true;
             window.location="index10.html";
    };

    if (user_nam == log[1] && password == pas[1]) {
             login_ok = true;
             window.location="index10.html";
    }; 
 // не работает алерт!!!
    if (login_ok == false) {
             alert("Nieprawidłowa nazwa użytkownika lub hasło!");
    };
    }
// ////login Form





// slider in index6.html
document.body.onload = startAction;
let arr = ['Русская баня','Римская баня', 'Финская баня',  'Японская баня', 'Инфракрасная', 'Скандинавская', 'Турецкая сауна'];
    let arrTb = [
        ['images/rusSauna1.jpg','images/rusSauna2.jpg', 'images/rusSauna3.jpg'],['images/rimSauna1.jpg','images/rimSauna2.jpg', 'images/rimSauna3.jpg'], ['images/finnSauna1.jpg','images/finnSauna2.jpg', 'images/finnSauna3.jpg'], ['images/japanSauna1.jpg','images/japanSauna2.jpg', 'images/japanSauna3.jpg'],['images/infraSauna1.jpg','images/infraSauna2.jpg', 'images/infraSauna3.jpg'], ['images/scandinavianSauna1.jpg','images/scandinavianSauna2.jpg', 'images/scandinavianSauna3.jpg'],['images/turkishSauna1.jpg','images/turkishSauna2.jpg', 'images/turkishSauna3.jpg']
    ]; 


function startAction(){
    let menu = document.querySelector('.menu');
    let prev = document.getElementById('prev');
    let next = document.getElementById('next');
    let position = 0;

    menu.onclick = changingTab;
    putMeaning(arr, arrTb, position);

    prev.addEventListener('click', function(){
    position > 0 ? position-- : position = arr.length - 1;
        putMeaning(arr,arrTb, position);
    });

    next.addEventListener('click', function(){
        position >= arr.length - 1  ? position = 0 : position++;
    putMeaning(arr,arrTb, position);
    });

}


function changingTab(event){
    if(event.target.tagName != 'A') return;
    let aes = document.querySelectorAll('a');
    let pic = document.getElementById('pic');

    for(let i = 0;  i < aes.length; i++){
        if(aes[i].innerHTML == event.target.innerHTML){
            aes[i].classList.add('active');
            let pos = arr.indexOf(aes[i].innerHTML, 0);
            meaningForImg(arrTb, pos, pic);
        }else{
            aes[i].classList.remove('active');  
        }
    }
}




function putMeaning(arr, arr1, startPosition){
    let views = document.querySelectorAll('.view');
    let pic = document.getElementById('pic');
    
    for(let i = startPosition, j = 0; i < startPosition + 4; i++, j++){
        arr[i] == undefined ? i = 0 : false;

        if(j >= 4) return;
             views[j].innerHTML = arr[i];
                    if(i == startPosition){
                views[0].classList.add('active');
                meaningForImg(arr1, i, pic);
                    }else{
                views[j].classList.remove('active');
                    }
    }
}

function meaningForImg(arr, pos, elem){
    let dotes = document.querySelectorAll('.dot');
    let localPositionActive = 0;
    let prevTb = document.getElementById('prevTb');
    let nextTb = document.getElementById('nextTb');

        getResult(pos, localPositionActive, dotes, elem, arr);

    prevTb.addEventListener('click', function(){
        localPositionActive > 0 ? localPositionActive--: localPositionActive = arr[pos].length - 1;
        getResult(pos, localPositionActive, dotes, elem, arr);
    });


    nextTb.addEventListener('click', function(){
        localPositionActive >= arr[pos].length - 1  ? localPositionActive = 0 : localPositionActive++;
        getResult(pos, localPositionActive, dotes, elem, arr);
    });


    putMeaningForDotes(dotes,elem, pos, arr);
}

function getResult(pos1, pos2,elems, elemImg, arr){
    elemImg.src = arr[pos1][pos2];
    getActive(elems, pos2);
}


function putMeaningForDotes(elems,elemShow, positionDotes, arr){
    for(let i = 0; i < elems.length; i++){
        elems[i].addEventListener('click', function(){
            getActive(elems, i);
            elemShow.src = arr[positionDotes][i];
        });
    }
} 


function getActive(elems, posD){
    let numText = document.querySelector('.num');
    for(let eachD of elems){
        posD == eachD.dataset.num - 1 ? (eachD.classList.add('active'),
           numText.innerHTML = eachD.dataset.num + ' / 3')  : eachD.classList.remove('active');
    }
}
// ////slider in index6.html



















/*COMMENT*/
// let comments = [];
// loadComments();

// document.getElementById('comment-add').onclick = function(){
//     let commentName = document.getElementById('comment-name');
//     let commentBody = document.getElementById('comment-body');

//     let comment = {
//         name : commentName.value,
//         body : commentBody.value,
//         time : Math.floor(Date.now() / 1000)
//     }

//     commentName.value = '';
//     commentBody.value = '';

//     comments.push(comment);
//     saveComments();
//     showComments();
// }

// function saveComments(){
//     localStorage.setItem('comments', JSON.stringify(comments));
// }

// function loadComments(){
//     if (localStorage.getItem('comments')) comments = JSON.parse(localStorage.getItem('comments'));
//     showComments();
// function showComments (){
//     let commentField = document.getElementById('comment-field');
//     let out = '';
//     comments.forEach(function(item){
//         out += `<p class="text-right small"><em>${timeConverter(item.time)}</em></p>`;
//         out += `<p class="alert alert-primary" role="alert">${item.name}</p>`;
//         out += `<p class="alert alert-success" role="alert">${item.body}</p>`;
//     });
//     commentField.innerHTML = out;
// }

// function timeConverter(UNIX_timestamp){
//     let a = new Date(UNIX_timestamp * 1000);
//     let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
//     let year = a.getFullYear();
//     let month = months[a.getMonth()];
//     let date = a.getDate();
//     let hour = a.getHours();
//     let min = a.getMinutes();
//     let sec = a.getSeconds();
//     let time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
//     return time;
//   }
  /*MENU_BTN*/
// $('.menu_btn').on('click', function(e){
// 	e.preventDefault;
// 	$(this).toggleClass('menu_btn_active')
// });

                              // Team slider
// let texts = ['Хотя метод setTimeout и не предназначен для создания таймеров, однако их все равно можно делать с ее помощью, если воспользоваться рекурсией (это когда функция вызывает сама себя).', 'В данном примере значение атрибута value каждую секунду увеличивается на единицу. Сделано это хитрым образом: нажатие на кнопку start запускает функцию timer, которая увеличивает значение инпута на 1 ', 'после этого вызывает саму себя с задержкой в 1 секунду. Получится, что через 1 секунду функция timer опять начнет работать, опять увеличит значение инпута и опять вызовет саму себя с задержкой. И так до бесконечности:'];
// let elem = document.querySelector('#elem');
// let prev = document.querySelector('#prev');
// let next = document.querySelector('#next');

// elem.style.width = '200px';
// elem.style.textAlign = 'center';
// elem.style.margin = '0 auto';
// let i = 0;
// elem.innerHTML = texts[i];



// next.addEventListener('click', function(){
//     i++;
//     if(i == texts.length) {
//         i = 0;
//     }

//     elem.innerHTML = texts[i];
// });
   
// prev.addEventListener('click', function() {
//     i--;
//     if (i == -1) {
//         i = texts.length - 1;
//     }
//     elem.innerHTML = texts[i];
// });

                         // /////Team slider




// class App extends React.Component {
// 	constructor(){
// 		super();
// 		this.state = {items: [1,2,3,4,5,6], text ''};
// 	}
// 	showList() {
// 		const list = this.state.items.map((item, index)=>{
// 			return <li key={index}>{item}</li>;
// 		});
// 		this.setState({text: <ul>{list});
// 	}
// 	render() {
// 		return <div>
// 		{this.state.text}
// 		<button onClick={this.showList.bind(this)}>pokazat spisok</button>
// 		</div>
// 	}
// }

