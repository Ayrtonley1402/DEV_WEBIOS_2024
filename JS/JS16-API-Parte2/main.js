let cep = document.querySelector('#cep')  // focusout -- identifica quando o usuario clicar fora do campo input
let message = document.querySelector('#erroMessage');
let rua = document.querySelector('#rua')
let complemento = document.querySelector('#complemento')
let bairro = document.querySelector('#bairro')
let cidade = document.querySelector('#cidade')
let estado = document.querySelector('#uf')

cep, addEventListener('focusout', async() => {  //async -- aguarda que a API execute sua função para executar funções multiplas (Executar varias funções ao mesmo tempo)
    //sabemos que a api pode retornar sucesso e erro
    try{
        const onlyNumbers = /^[0-9]+$/; // isso é um rejects
        const cepValid = /^[0-9]{8}$/; 

        if(!onlyNumbers.test(cep.value) || !cepValid.test(cep.value)){  // test -- faz a validação de um valor de um campo com o rejects, valida se só tem números e a quantidade de numeros
           console.log("CEP inválido")
           throw {cep_error: 'CEP inválido'} // throw -- para lançar um erro se necessário
        }

        let retornoAPI = await fetch (`https://viacep.com.br/ws/${cep.value}/json/`) // await -- aguarda a consulta ser feita na API para continuar com o fluxo de código
        console.log(retornoAPI)

        if(!retornoAPI.ok){
            throw await retornoAPI.json(); // jogue e espere ao mesmo tempo
        }

        let response = await retornoAPI.json();
        console.log(response);
        cep.value = response.cep;
        rua.value = response.logradouro;
        complemento.value = response.complemento;
        bairro.value = response.bairro;
        cidade.value = response.localidade;
        estado.value = response.uf;
     }
    catch (error){
        if (error?.cep_error) {
            message.textContent = error.cep_error;
            setTimeout(() => {
                message.texContent = '';
            }, 5000);
        }
        console.log(error)
    }
})