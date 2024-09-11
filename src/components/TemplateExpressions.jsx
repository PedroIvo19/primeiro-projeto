const TemplateExpressions = () => {
    let nome = "Meu nome"
    let aluno = {
        nome:"Pedro",
        turma:"A",
        ano:"2"
    }
    
    return(
        <div>
            <h1>Olá {nome}</h1>
            <h1>O aluno {aluno.nome} está no {aluno.ano}° ano, na turma {aluno.turma}</h1>
        </div>
    )

}

export default TemplateExpressions