function adicionar(){
    let fruta = document.getElementById("input").value;  
    let resultado = document.getElementById("list");
    resultado.innerHTML += `<li>${fruta}<input type="submit" value="X" class="del" onclick="deletar(this)"> </li>`;
}
function deletar(item){
    console.log(item.parentElement)
    let resultado = document.getElementById("list");
    resultado.removeChild(item.parentElement)
}