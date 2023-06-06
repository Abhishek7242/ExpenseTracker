
let index = localStorage.length
let add = document.getElementById('submit')
let parentDiv
let input2
let form
let total =document.getElementById('totalvalue')
const currentDate = new Date();
total=0
// Get the current date
const date = currentDate.getDate();
// const currentDate = new Date();

// Get the current day in the format of "Mon", "Tue", "Wed", etc.
const day = currentDate.toLocaleString('en-US', { weekday: 'short' });

// Output the value

// Get the current day (0 - Sunday, 1 - Monday, ..., 6 - Saturday)
// const day = currentDate.getDay();

// Get the current year
const year = currentDate.getFullYear();
console.log("Current Date:", date);
console.log("Current Day:", day);
console.log("Current Year:", year);

if (localStorage.length === 0) {



    add.innerHTML = `    <img src="add.png" alt="" width="80px" height="80px">Add Expense`

}
else {
    add.innerHTML = `    <img src="add.png" alt="" width="80px" height="80px">Add new Expense`

}


add.addEventListener("click", function () {
let task=document.getElementById('task')
task.style.opacity=1
task.style.zIndex='1000'
task.style.margin='auto'
task.style.height='80%'
task.style.left='15vw'
task.style.width='65vw'
    // localStorage.clear()
    event.preventDefault(); // Prevent form submission behavior
    let submit =document.getElementById('sbtn')
    
submit.addEventListener("click", function () {
    // let div=document.getElementById('task1')
    // parentDiv.innerHTML=`     <div class="btn" id="taskin">
                  
    // <h2 class="margin"  id="addtitle"></h2>
    // <p  class="margin" id="adddes"></p>
    
    // </div>`
    // let addtitle=document.getElementById('addtitle')
    // let adddes=document.getElementById('adddes')
    let title =document.getElementById('title')
   

    titleValue =title.value
    let desc=document.getElementById('description')
    descValue=desc.value 

    console.log('total')
      // Create the form element
    let form = document.createElement('div');
    form.id = 'list' + index;
    form.style.position='relative'
form.classList.add('ta')
form.classList.add('block')

    // form.style.display = 'flex'
    // form.style.flexDirection='column'
    // form.style.background='white'
    // // form.style.width='220px'
    // form.style.height='240px'
    
    // form.style.margin = '9px 0'
    // form.style.border='2px solid black'
    // form.style.borderRadius = '100px'
    // form.style.marginLeft = '22px'
    add.innerHTML = `    <img src="add.png" alt="" width="80px" height="80px">Add new Expense`
    // Create the input div
    let inputDiv = document.createElement('h2');
    inputDiv.id = 'input' + index;
    // inputDiv.type = 
    inputDiv.style.position='relative'

    inputDiv.style.border = 'none'
    // inputDiv.style.boxShadow = ' 0 0 1px black'
    inputDiv.style.borderRadius = '5px'
    inputDiv.style.padding = '2px 4px'
    inputDiv.style.overflow='hidden'
    inputDiv.style.width = '80%'
    inputDiv.style.fontFamily = 'Ubuntu , sans-serif';
    inputDiv.style.display = 'flex'
    inputDiv.style.wordBreak='break-word'
    inputDiv.style.fontSize='1rem'

    inputDiv.style.outline = 'none'
    inputDiv.style.background = 'white'
    inputDiv.style.height = '30px'
    let inputDiv2 = document.createElement('p');
    inputDiv2.id = 'inputname' + index;
    // inputDiv.type = 

    inputDiv2.style.border = 'none'
    inputDiv2.style.position='relative'

    // inputDiv2.style.boxShadow = ' 0 0 1px black'
    inputDiv2.style.borderRadius = '5px'
    inputDiv2.style.padding = '2px 4px'
    inputDiv2.style.margin = '2px 10px'
    inputDiv2.style.width = '100px'

    inputDiv2.style.fontFamily = 'Ubuntu , sans-serif';
    inputDiv2.style.display = 'flex'
    inputDiv2.style.outline = 'none'
    inputDiv2.style.wordBreak='break-word'
    inputDiv2.style.height = '18px'
    inputDiv2.style.background = '#32ff20'
    inputDiv2.style.fontSize='0.8rem'
    inputDiv2.innerHTML='Rs :- '

    let deleteButton = document.createElement('div');
        deleteButton.classList.add('btn');
        // deleteButton.type = 'reset';
        deleteButton.id = 'reset' + index;
        deleteButton.textContent = '';
        deleteButton.innerHTML=` <img class="img3dot" src="1dot.png" alt="" width="20px" height="20px">`
deleteButton.style.top='-20px'
deleteButton.style.borderRadius= 'none'
deleteButton.style.right= '2%'
deleteButton.style.display='flex'
deleteButton.style.justifyContent='flex-end'

        // deleteButton.style.boxShadow = '0 0 3px black';
        deleteButton.style.height= '20px';
        deleteButton.style.width= '100%';
        deleteButton.style.position='relative'

    deleteButton.addEventListener('click', () => {



    })  
    
    // total+=Math.floor( inputName)

    total.innerText=total
      input2 = titleValue
    localStorage.setItem('boxx' + index, form.outerHTML)
    localStorage.setItem('title' + index, input2)
    localStorage.setItem('date1' + index, date)
    localStorage.setItem('day1' + index, day)
    localStorage.setItem('year1' + index, year)
    localStorage.setItem('delete1' + index, deleteButton.outerHTML)
    // localStorage.setItem('total', total)
    // localStorage.setItem('edit' + index, editButton.outerHTML)
    localStorage.setItem('inputname1' + index, descValue)

    if (input2 !== null) {
        form.appendChild(inputDiv);
        form.appendChild(inputDiv2);
        form.appendChild(deleteButton);
 
        parentDiv.appendChild(form);

        // parentDiv.removeChild(form)
        console.log(inputDiv.value = input2)
        index += 1
    }
    else if (input2 == null && parentDiv.children.length === 1) {
        // parentDiv.removeChild(form)
        add.innerHTML = `    <img src="add.png" alt="" width="80px" height="80px">Add Expense`


    }
    // localStorage.setItem('task'+index,titleValue)
    // localStorage.setItem('des'+index,descValue)
    
    inputDiv.innerHTML=input2
    inputDiv2.innerHTML=descValue
    task.style.opacity=0
task.style.zIndex='-1'
task.style.margin='auto'
task.style.height='240px'
task.style.left='0'
task.style.width='220px'

setTimeout(()=>{

    location.reload();
},300)

})
    parentDiv = document.getElementById('container');
 

    // addnewfile()
});
let clear = document.getElementById('clear')
clear.addEventListener('click', () => {
    location.reload();
    if (localStorage.length > 0) {
        let storedKeys = Object.keys(localStorage).filter((key) => key.startsWith('boxx'));
    
        // Sort the stored keys based on index
        storedKeys.sort((a, b) => {
            let indexA = parseInt(a.slice(4));
            let indexB = parseInt(b.slice(4));
            return indexA - indexB;
        });
    
        storedKeys.forEach((key) => {
            let formHTML = localStorage.removeItem(key);
            let inputHTML = localStorage.removeItem('title' + key.slice(4));
            let date = localStorage.removeItem('date1' + key.slice(4));
            let day = localStorage.removeItem('day1' + key.slice(4));
            let year = localStorage.removeItem('year1' + key.slice(4));
            let deleteHTML = localStorage.removeItem('delete1' + key.slice(4));
            let inputName = localStorage.removeItem('inputname1' + key.slice(4));})}
    // localStorage.clear()
})

add = document.getElementById('submit');
parentDiv = document.getElementById('container');

// Check if there are any stored tasks in localStorage
if (localStorage.length > 0) {
    let storedKeys = Object.keys(localStorage).filter((key) => key.startsWith('boxx'));

    // Sort the stored keys based on index
    storedKeys.sort((a, b) => {
        let indexA = parseInt(a.slice(4));
        let indexB = parseInt(b.slice(4));
        return indexA - indexB;
    });

    storedKeys.forEach((key) => {
        let formHTML = localStorage.getItem(key);
        let inputHTML = localStorage.getItem('title' + key.slice(4));
        let date = localStorage.getItem('date1' + key.slice(4));
        let day = localStorage.getItem('day1' + key.slice(4));
        let year = localStorage.getItem('year1' + key.slice(4));
        let deleteHTML = localStorage.getItem('delete1' + key.slice(4));
        let inputName = localStorage.getItem('inputname1' + key.slice(4));
    let totaltotal =total
    // localStorage.getItem('total', total)
    totaltotal=Number.parseInt(totaltotal)
  

        // Recreate form elements based on stored data
        let form = document.createElement('div');
    form.id = key;
    form.style.position='relative'
    form.classList.add('ta')
    form.classList.add('block')

    // form.style.display = 'flex'
    // form.style.flexDirection='column'
    // form.style.background='white'
    // // form.style.width='220px'
    // form.style.height='240px'
    
    // form.style.margin = '9px 4px'

    let inputDiv = document.createElement('h2');
    inputDiv.id = 'input' + key.slice(4);
    // inputDiv.type = 
    inputDiv.style.position='relative'

    inputDiv.style.border = 'none'
    // inputDiv.style.boxShadow = ' 0 0 1px black'
    inputDiv.style.borderRadius = '5px'
    inputDiv.style.padding = '2px 4px'
    inputDiv.style.margin = '2px 10px'
    inputDiv.style.overflow='hidden'
    inputDiv.style.width = '80%'
    inputDiv.style.fontFamily = 'Ubuntu , sans-serif';
    inputDiv.style.display = 'flex'
    inputDiv.style.wordBreak='break-word'
    inputDiv.style.fontSize='1rem'

    inputDiv.style.outline = 'none'
    inputDiv.style.background = 'white'
    inputDiv.style.height = '37px'
    inputDiv.innerHTML=inputHTML
    let inputDiv2 = document.createElement('p');
    inputDiv2.id = 'inputname' + key.slice(4);
    // inputDiv.type = 

    inputDiv2.style.border = 'none'
    inputDiv2.style.position='relative'

    // inputDiv2.style.boxShadow = ' 0 0 1px black'
    inputDiv2.style.borderRadius = '5px'
    inputDiv2.style.padding = '2px 4px'
    inputDiv2.style.margin = '2px 10px'
    inputDiv2.style.width = '100px'
    inputDiv2.style.fontFamily = 'Ubuntu , sans-serif';
    inputDiv2.style.display = 'flex'
    inputDiv2.style.outline = 'none'
    inputDiv2.style.wordBreak='break-word'
    inputDiv2.style.height = '18px'
    inputDiv2.style.background = '#32ff20'
    inputDiv2.style.fontSize='0.8rem'
    inputDiv2.innerHTML='Rs :- '+inputName
  
    totaltotal+=Number.parseInt(inputName)
    // console.log(total+=Math.floor( inputName)+'gfegfei')
    total=totaltotal
    total.innerHTML=total
   console.log(total,  totaltotal)

   



        let deleteButton = document.createElement('div');
        deleteButton.classList.add('btn');
        // deleteButton.type = 'reset';
        deleteButton.id = 'reset' + key.slice(4);
        deleteButton.textContent = '';
        deleteButton.innerHTML=`<span class="span2">${date}/ ${day} /${year}</span><img class="img3dot" src="1dot.png" alt="" width="20px" height="20px">`
deleteButton.style.top='-20px'
deleteButton.style.borderRadius= 'none'
deleteButton.style.right= '2%'
deleteButton.style.display='flex'
deleteButton.style.justifyContent='flex-end'
        // deleteButton.style.boxShadow = '0 0 3px black';
        deleteButton.style.height= '20px';
        deleteButton.style.width= '100%';
        deleteButton.style.position='relative'

        // let delButton =document.getElementById('editbtn')
        deleteButton.addEventListener('click', () => {
            let buttonContainer = form.querySelector('.buttonContainer');
        
            if (!buttonContainer) {
                buttonContainer = document.createElement('div');
                buttonContainer.classList.add('buttonContainer');
                buttonContainer.style.display = 'flex';
                buttonContainer.style.flexDirection = 'column';
                buttonContainer.style.borderRadius = '3px';
                buttonContainer.style.top='-28px'
                buttonContainer.style.right='17px'
        buttonContainer.style.width= '100px';

                buttonContainer.style.border = '1px solid rgb(153, 153, 153)';
                buttonContainer.style.boxShadow='  0 0 3px black'
                buttonContainer.style.position = 'absolute';
        
                let editBtn = document.createElement('button');
                editBtn.classList.add('button');
                editBtn.classList.add('editbtn');
                editBtn.textContent = 'Edit';
        editBtn.style.cursor='pointer'
                let deleteBtn = document.createElement('button');
                deleteBtn.classList.add('button');
                deleteBtn.textContent = 'Delete';
                deleteBtn.style.cursor='pointer'
        
                buttonContainer.appendChild(editBtn);
                buttonContainer.appendChild(deleteBtn);
        
                deleteButton.appendChild(buttonContainer);
            } else {
                buttonContainer.parentNode.removeChild(buttonContainer);
                // buttonContainer.classList.toggle('hidden');
            }
        
            let editBtn = buttonContainer.querySelector('.editbtn');
            let deleteBtn = buttonContainer.querySelector('.button:not(.editbtn)');
        
            editBtn.addEventListener('click', () => {
                // Handle edit button click
                let task=document.getElementById('task')
                task.style.opacity=1
task.style.zIndex='1000'
task.style.margin='auto'
task.style.height='80%'
task.style.left='15vw'
task.style.width='65vw'
                let title =document.getElementById('title')
          title.value=inputHTML
                let desc=document.getElementById('description')
    desc.value=inputName
    let submit =document.getElementById('sbtn')
        
    submit.addEventListener("click", function () {
        let title =document.getElementById('title')
        titleValue =title.value
        let desc=document.getElementById('description')
        descValue=desc.value 
     
         localStorage.setItem('title' + key.slice(4),titleValue);
         localStorage.setItem('date1' + key.slice(4),date);
         localStorage.setItem('day1' + key.slice(4),day);
         localStorage.setItem('year1' + key.slice(4),year);
        localStorage.setItem('inputname1' + key.slice(4),descValue);
         inputHTML = localStorage.getItem('title' + key.slice(4));
         inputName = localStorage.getItem('inputname1' + key.slice(4));
        inputDiv.innerHTML=inputHTML
        inputDiv2.innerHTML=inputName
        task.style.opacity=0
    task.style.zIndex='-1'
    task.style.margin='auto'
    task.style.height='240px'
    task.style.left='0'
    task.style.width='220px'
   
    })
            });
        
            deleteBtn.addEventListener('click', () => {
           
                parentDiv.removeChild(form)
                localStorage.removeItem(key);
                localStorage.removeItem('title' + key.slice(4));
                localStorage.removeItem('delete1' + key.slice(4));
                localStorage.removeItem('date1' + key.slice(4));
                localStorage.removeItem('day1' + key.slice(4));
                localStorage.removeItem('year1' + key.slice(4));
                localStorage.removeItem('inputname1' + key.slice(4));
                localStorage.removeItem('task1' + index, form.innerHTML);
           location.reload()
                if (localStorage.length === 0) {

                    add.innerHTML = `    <img src="add.png" alt="" width="80px" height="80px">Add Expense`

                }
                else {
                    add.innerHTML = `    <img src="add.png" alt="" width="80px" height="80px">Add new Expense`


                }
        

  });
            //     // User clicked Cancel or closed the dialog box
            //     // Your code here
            // }
        });

        // Append the recreated elements to the form
        parentDiv.appendChild(form);
        form.appendChild(inputDiv);
        form.appendChild(inputDiv2);
        form.appendChild(deleteButton);
        // form.appendChild(editButton);

        // Append the form to the parent div
    });
}
    localStorage.setItem('total', total)
   let gettotal= localStorage.getItem('total', total)
   document.getElementById('totalvalue').innerHTML='Rs :-'+ gettotal

// Event listener for adding a new task
add.addEventListener('click', function () {
    // Event handling code...


    // Add new task functionality...
});
