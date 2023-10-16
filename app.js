let front=1,rear=1,size;
const inputSize=()=>{
    size=parseInt(document.getElementById('input1').value);
    document.getElementById('takeInputSize').classList.add('hidden');
    document.getElementById('enq_deq').classList.remove('hidden');
    document.getElementById('title').innerText='Queue: '
    addDiv(size);
}
const addDiv=(size)=>{
    for(let i=0;i<size;i++){
        let newDiv=document.createElement('div');
        newDiv.innerText='0';
        newDiv.classList.add('px-10','py-5','border-2',"border-warning",'flex','justify-center','items-center','text-black','font-bold');
        document.getElementById('parent').appendChild(newDiv);
    }
}
const enqueue=()=>{
    document.getElementById('empty').classList.add('hidden');
    if(rear==size+1){
        document.getElementById('full').classList.remove('hidden');
        return;
    }
    const old=parseInt(document.getElementById('enq_input').value);
    const value=document.querySelector(`#parent :nth-child(${rear})`).innerText=old;
    rear++;
    // console.log(value,old,front);
    document.getElementById('enq_input').value='';
}
const dequeue=()=>{
    document.getElementById('full').classList.add('hidden');
    if(front==rear){
        document.getElementById('empty').classList.remove('hidden');
        return;
    }
    document.querySelector(`#parent :nth-child(${front})`).innerText='0';
    front++;
}