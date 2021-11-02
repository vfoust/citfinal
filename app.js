var pages=["view grade", "add grade"];
var list=[];
function createNav() {
    document.body.innerHTML=""
    var nav = document.createElement("nav");
    createButton(pages[0]);
    createButton(pages[1]);
    nav.style.backgroundColor = 'green';
    nav.style.lineHeight="70px";
    nav.style.height="60px";
    nav.style.display="flex";
    nav.style.justifyContent="center";
    nav.style.alignItems="center";

    document.body.appendChild(nav);

    function createButton(pg){
        var button=document.createElement("button")
        button.innerHTML=pg;
        button.addEventListener("click", function (){
            navigate(pg);
        })
        nav.appendChild(button);
    }

}

function createWrapper(){
    var wrapper=document.createElement("wrapper");
    wrapper.classList.add("wrapper");
    document.body.appendChild(wrapper);
}
function navigate(pg) {
    if(pg==="view grade"){

        gradeView();
    }else if(pg==="add grade"){

        addGrade();
    }else if(pg==="login"){
        login()
    }
}
function login(){
    var user=document.createElement("input");
    user.classList.add("user");
    user.placeholder="username";
    var pass=document.createElement("input");
    pass.classList.add("pass");
    pass.placeholder=("password");
    pass.type="password"
    var submit =document.createElement("button")
    submit.classList.add("submit");
    submit.innerHTML="Submit"
    var answer=document.createElement("div")
    submit.addEventListener("click", function (){
        var user_name = document.body.querySelector(".user").value;
        var pass_word = document.body.querySelector(".pass").value;
        if(user_name!=="cool"&&pass_word!=="password"){
            answer.innerHTML="The username and password are incorrect, please try again"
        }else if (user_name!=="cool"){
            answer.innerHTML="The username is incorrect, please try again"
        }else if (pass_word!=="password"){
            answer.innerHTML="The password is incorrect, please try again"
        }else{
            createNav()
            createWrapper()
            navigate("view grade");

        }
    })

    document.body.appendChild(user);
    document.body.appendChild(pass);
    document.body.appendChild(submit);
    document.body.appendChild(answer);
}
function gradeView() {
    var wrapper = document.body.querySelector(".wrapper")
    wrapper.innerHTML = "";
    var header = document.createElement("h1");
    header.innerHTML = "View Grade";
    var noteList=document.createElement("div")
    noteList.classList.add ("noteList");
    render_list()
    function render_list(){
        noteList.innerHTML=""
        for (var i=0; i<list.length;i++){
            var note=document.createElement("div")
            note.innerHTML=list[i];
            noteList.appendChild(note)

        }
    }

    wrapper.appendChild(header);
    wrapper.appendChild(noteList);


}
function addGrade() {
    var wrapper = document.body.querySelector(".wrapper")
    wrapper.innerHTML = "";
    var header=document.createElement("h1");
    header.innerHTML="Add Grade";
    var singleNote = document.createElement("input")
    singleNote.classList.add("one_note")
    singleNote.placeholder = "Student Name";
    var importance = document.createElement("input")
    importance.classList.add("importance");
    importance.placeholder = "Grade (0-100)";
    var note=document.createElement("button")
    note.classList.add ("note");
    note.innerHTML="Submit Grade"
    var response= document.createElement("div")
    response.classList.add("response")
    note.addEventListener("click", function () {
        var note = document.body.querySelector(".one_note").value;
        var importance = document.body.querySelector(".importance").value;
        if(isNaN(parseInt(importance))) {
            response.innerHTML="grades must be listed as a numerical value"
        }else {
            parseInt(importance)
            if (importance <= 100 && importance >= 0) {
                list.push(`Student Name: ${note} Grade: ${importance}%`);
                navigate("view grade");
            }else{
                response.innerHTML="Grades must be between 0% and 100%, please re-enter your grade"
            }

        }

    })
    wrapper.appendChild(header);
    wrapper.appendChild(singleNote);
    wrapper.appendChild(importance);
    wrapper.appendChild(note);
    wrapper.appendChild(response);
}

navigate("login");