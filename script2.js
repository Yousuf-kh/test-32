const input = document.querySelector('input')
const list = document.querySelector('.list')

const btn = document.querySelector('button')





btn.addEventListener('click',()=>{

  if (input.value == '') {
    alert('if you do not want to write you can go back!!!')
  } else {
    const task = document.createElement('div')
    task.innerHTML = input.value
    list.appendChild(task)
    task.style.fontSize = '30px'
  }
  
})



input.addEventListener('click',()=>{

})