class CadastroService {

    
    async getItens (){
        
        fetch("http://localhost:8081/")
        .then((response) => {
            if (!response.ok) throw new Error ('Erro ao executar')
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
          });

    }
}

export default CadastroService;