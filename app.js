let tbody = document.getElementById('tbody');
function showUsers(){
    tbody.innerHTML = ''  
    for(let i = users.length-1; i >= 0; i--){
        tbody.innerHTML += `
            <tr class="live" id="live${i}">
                <td>
                    <span id="name${i}">${users[i].name}</span>
                </td>
                <td>
                    <span id="surname${i}">${users[i].surname}</span>
                </td>
                <td>
                    <span id="age${i}">${users[i].age}</span>
                </td>
                <td>
                    <span id="region${i}">${users[i].region}</span>
                </td>
                <td>
                    <span id="birthday${i}">${users[i].birthday}</span>
                </td>
                <td>
                    <span id="phone${i}">${users[i].phone}</span>
                </td>
                <td>
                    <button class="btn btn-outline-primary no-border" onclick="edit(${i})"><i class="material-icons">mode_edit</i></button>
                    <button class="btn btn-outline-danger no-border" onclick="deleteUser(${i})"><i class="material-icons">delete</i></button>
                </td>
            </tr>
            <tr class="edit" id="edit${i}">
                <td>
                    <input type="text" required id="inputName${i}" value="${users[i].name}" class="form-control"/>
                </td>
                <td>
                    <input type="text" required id="inputSurname${i}" value="${users[i].surname}" class="form-control"/>
                </td>
                <td>
                    <input type="text" required id="inputAge${i}" value="${users[i].age}" class="form-control"/>
                </td>
                <td>
                    <input type="text" required id="inputRegion${i}" value="${users[i].region}" class="form-control"/>
                </td>
                <td>
                    <input type="text" required id="inputBirthday${i}" value="${users[i].birthday}" class="form-control"/>
                </td>
                <td>
                    <input type="text" required id="inputPhone${i}" value="${users[i].phone}" class="form-control"/>
                </td>
                <td>
                    <button class="btn btn-success no-border" onclick="update(${i})"><i class="material-icons">check</i></button>
                    
                </td>
            </tr>
        `
    }
}
showUsers();
function edit(index){
    let live = document.getElementById('live'+index);
    let edit = document.getElementById('edit'+index);
    live.style.display = 'none';
    edit.style.display = 'table-row'
}
function update(index){
    let input = {}
    input.name = document.getElementById('inputName'+index);
    input.surname = document.getElementById('inputSurname'+index);
    input.age = document.getElementById('inputAge'+index);
    input.region = document.getElementById('inputRegion'+index);
    input.birthday = document.getElementById('inputBirthday'+index);
    input.phone = document.getElementById('inputPhone'+index);
    
    let spans = {}
    spans.name = document.getElementById('name'+index);
    spans.surname = document.getElementById('surname'+index);
    spans.age = document.getElementById('age'+index);
    spans.region = document.getElementById('region'+index);
    spans.birthday = document.getElementById('birthday'+index);
    spans.phone = document.getElementById('phone'+index);
    
    if(input.name.value !== users[index].name || input.age.value !== users[index].age || input.birthday.value !== users[index].birthday || input.phone.value !== users[index].phone || input.region.value !== users[index].region || input.surname.value !== users[index].surname){

       for(item in input){
           console.log(input[item].value)
           if(!input[item].value){
               alert('please fill all the fields');
            return;
           }
       }
        users[index].update(input.name.value, input.surname.value, input.age.value, input.birthday.value,input.region.value, input.phone.value)
        
        for(item in spans){
            spans[item].innerHTML = input[item].value;
        }
        localStorage.setItem('users', JSON.stringify(users));
        
    }
    let live = document.getElementById('live'+index);
    let edit = document.getElementById('edit'+index);
    edit.style.display = 'none';
    live.style.display = 'table-row'

}
function deleteUser(index){
    users.splice(index, 1);
    let live = document.getElementById('live'+index);
    let edit = document.getElementById('edit'+index);
    live.outerHTML = null;
    edit.outerHTML = null;
    localStorage.setItem('users',JSON.stringify(users));
    console.log(users.length);

}
function enableAddMode (){
    let addMode = document.getElementById('new');
    let addBtn = document.getElementById('addBtn');
    let addCancelBtn = document.getElementById('addCancelBtn');
    addMode.style.display = 'table-row';
    addBtn.style.display = 'none';
    addCancelBtn.style.display = 'inline-block';


}
function disableAddMode(){
    let addMode = document.getElementById('new');
    let addBtn = document.getElementById('addBtn');
    let addCancelBtn = document.getElementById('addCancelBtn');
    let input = {}
    input.name = document.getElementById('nameField');
    input.surname = document.getElementById('surnameField');
    input.age = document.getElementById('ageField');
    input.region = document.getElementById('regionField');
    input.birthday = document.getElementById('birthdayField');
    input.phone = document.getElementById('phoneField');
    addMode.style.display = 'none';
    addBtn.style.display = 'inline-block';
    addCancelBtn.style.display = 'none';
    for(name in input){
        input[name].value = '';

    }
    
}
function addUser(){
    let input = {}
    input.name = document.getElementById('nameField');
    input.surname = document.getElementById('surnameField');
    input.age = document.getElementById('ageField');
    input.region = document.getElementById('regionField');
    input.birthday = document.getElementById('birthdayField');
    input.phone = document.getElementById('phoneField');
    for(name in input){
        if(!input[name].value){
            alert('please fill all fields');
            return;
        }

    }
    users.push(new User({
    "name": input.name.value,
    "surname": input.surname.value,
    "region": input.region.value,
    "age": input.age.value,
    "phone": input.phone.value,
    "birthday": input.birthday.value
}));
let i = users.length-1;
tbody.innerHTML = `
            <tr class="live" id="live${i}">
                <td>
                    <span id="name${i}">${users[i].name}</span>
                </td>
                <td>
                    <span id="surname${i}">${users[i].surname}</span>
                </td>
                <td>
                    <span id="age${i}">${users[i].age}</span>
                </td>
                <td>
                    <span id="region${i}">${users[i].region}</span>
                </td>
                <td>
                    <span id="birthday${i}">${users[i].birthday}</span>
                </td>
                <td>
                    <span id="phone${i}">${users[i].phone}</span>
                </td>
                <td>
                    <button class="btn btn-outline-primary no-border" onclick="edit(${i})"><i class="material-icons">mode_edit</i></button>
                    <button class="btn btn-outline-danger no-border" onclick="deleteUser(${i})"><i class="material-icons">delete</i></button>
                </td>
            </tr>
            <tr class="edit" id="edit${i}">
                <td>
                    <input type="text" required id="inputName${i}" value="${users[i].name}" class="form-control"/>
                </td>
                <td>
                    <input type="text" required id="inputSurname${i}" value="${users[i].surname}" class="form-control"/>
                </td>
                <td>
                    <input type="text" required id="inputAge${i}" value="${users[i].age}" class="form-control"/>
                </td>
                <td>
                    <input type="text" required id="inputRegion${i}" value="${users[i].region}" class="form-control"/>
                </td>
                <td>
                    <input type="text" required id="inputBirthday${i}" value="${users[i].birthday}" class="form-control"/>
                </td>
                <td>
                    <input type="text" required id="inputPhone${i}" value="${users[i].phone}" class="form-control"/>
                </td>
                <td>
                    <button class="btn btn-success no-border" onclick="update(${i})"><i class="material-icons">check</i></button>
                    
                </td>
            </tr>
        ` + tbody.innerHTML;
        localStorage.setItem('users', JSON.stringify(users));
        disableAddMode();
}