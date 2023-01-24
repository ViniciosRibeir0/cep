//var cep= document.getElementById ('cep').value 
validadorCEP()
async function validadorCEP(){
    var cep= document.getElementById ('cep').value
    let req= await fetch(`https://viacep.com.br/ws/${cep}/json/`)

  let json= await req.json()

  console.log(json.logradouro)
  console.log(json.localidade)
  console.log(json.bairro)

 
  document.getElementById ('logradouro').value= json.logradouro 
  document.getElementById ('localidade').value= json.localidade
 document.getElementById ('Bairro').value= json.bairro
  

} 


document.getElementById ('cep').addEventListener('focusout',validadorCEP)