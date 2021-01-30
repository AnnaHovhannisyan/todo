let todoForm=document.querySelector('#todo');
let input=document.querySelector('#item');
let todoList=document.querySelector('#todoList');

todoForm.addEventListener('submit',(e)=>{
    e.preventDefault();

    let objItem={item:input.value};
    console.log(objItem);
    input.value="";
    fetch('/todo',{
        method:'POST',
        headers:{
            'Content-Type':'application/JSON',
            'Accept':'application/JSON'
        },
        body:JSON.stringify(objItem)
    }).then(res=>{
        return res.json()
    }).then(result=>{
        let li=document.createElement('li');
        li.id=result._id;
        li.innerHTML=result.item;
        console.log(todoList);
        todoList.append(li)
    })

});

todoList.addEventListener('click',(e)=>{
    if(e.target.tagName!=='UL'){
        let objItem={_id:e.target.id};
        fetch('/todo',{
            method:'DELETE',
            headers:{
                'Content-Type':'application/JSON',
                'Accept':'application/JSON'
            },
            body:JSON.stringify(objItem)
        }).then(res=>{
            return res.json()
        }).then(result=>{
            console.log("result.n",result.n);
            console.log("result",result);
            if(result.n===1){
               // console.log("result.n",result.n);
                e.target.remove()
            }

        })

    }
});