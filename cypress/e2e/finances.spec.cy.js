import {format} from '../support/utils.js'

context('Dev Finances Agilizei' , () => {

    beforeEach(() => {
        cy.visit('https://matheusidkk.github.io/Todo-React/')
        cy.get('.tarefas').children().should('have.length', 0)
    })

    it('Fechando e abrindo o criador de tarefas', () => {
        cy.get('.criarTodo').click()
        cy.get('.criadorNome').type('Texto teste')
        cy.get('.criadorVezes').type(32)
        cy.get('.criadorFechar').click()

        cy.get('.criarTodo').click()
        cy.get('.criadorNome').type('Texto escrito depois')
        cy.get('.criadorVezes').type(5)
        cy.get('.criadorCriar').click()

        cy.get('.tarefas').children().should('have.length', 1)
        cy.get('.Todo').eq(0).then((todo) => {
            cy.wrap(todo.find(':nth-child(2)')).should('have.text', 'Texto escrito depois');
            cy.wrap(todo.find(':nth-child(3)')).should('have.text', '05');
        });      
    })

    it('Criar tarefas', () => {

        cy.get('.criarTodo').click()
        cy.get('.criadorNome').type('Fazer exercicios')
        cy.get('.criadorVezes').type(5)
        cy.get('.criadorCriar').click()

        cy.get('.tarefas').children().should('have.length', 1)

        cy.get('.Todo').eq(0).then((todo) => {
            cy.wrap(todo.find(':first-child')).should('have.text', '0');
            cy.wrap(todo.find(':nth-child(3)')).should('have.text', '05');
        });      


        cy.get('.criarTodo').click()
        cy.get('.criadorNome').type('Estudar')
        cy.get('.criadorCriar').click()

        cy.get('.tarefas').children().should('have.length', 2)

        cy.get('.Todo').eq(1).then((todo) => {
            cy.wrap(todo.find(':first-child')).should('have.text', '1');
            cy.wrap(todo.find(':nth-child(3)')).should('have.text', '0');
        });      


        cy.get('.criarTodo').click()
        cy.get('.criadorNome').type('Desenhar')
        cy.get('.criadorVezes').type(7)
        cy.get('.criadorCriar').click()

        cy.get('.tarefas').children().should('have.length', 3)

        cy.get('.Todo').eq(2).then((todo) => {
            cy.wrap(todo.find(':first-child')).should('have.text', '2');
            cy.wrap(todo.find(':nth-child(3)')).should('have.text', '07');
        });      


        cy.get('.criarTodo').click()
        cy.get('.criadorNome').type('Assistir filme')
        cy.get('.criadorVezes').type(3052)
        cy.get('.criadorCriar').click()
        
        cy.get('.tarefas').children().should('have.length', 4)

        cy.get('.Todo').eq(3).then((todo) => {
            cy.wrap(todo.find(':first-child')).should('have.text', '3');
            cy.wrap(todo.find(':nth-child(3)')).should('have.text', '03052');
        });          
    });

    it('Concluindo tarefas', () => {
        cy.get('.criarTodo').click()
        cy.get('.criadorNome').type('Cozinhando')
        cy.get('.criadorVezes').type(3)
        cy.get('.criadorCriar').click()

        cy.get('.criarTodo').click()
        cy.get('.criadorNome').type('Jogando')
        cy.get('.criadorVezes').type(21)
        cy.get('.criadorCriar').click()

        cy.get('.criarTodo').click()
        cy.get('.criadorNome').type('Passeando')
        cy.get('.criadorVezes').type(0)
        cy.get('.criadorCriar').click()
        
        cy.get('.Todo').eq(1).then((todo) => {
            cy.wrap(todo.find(':nth-child(4)')).should('have.text', 'Concluir tarefa');
            cy.wrap(todo.find(':nth-child(3)')).should('have.text', '021');
            cy.wrap(todo.find(':nth-child(4)')).click()
            cy.wrap(todo.find(':nth-child(4)')).should('have.text', 'Tarefa Feita');
            cy.wrap(todo.find(':nth-child(3)')).should('have.text', '22');
            cy.wrap(todo.find(':nth-child(4)')).click()
            cy.wrap(todo.find(':nth-child(4)')).should('have.text', 'Tarefa Feita');
            cy.wrap(todo.find(':nth-child(3)')).should('have.text', '22');
        });

        cy.get('.Todo').eq(0).then((todo) => {
            cy.wrap(todo.find(':nth-child(4)')).should('have.text', 'Concluir tarefa');
            cy.wrap(todo.find(':nth-child(3)')).should('have.text', '03');
            cy.wrap(todo.find(':nth-child(4)')).click()
            cy.wrap(todo.find(':nth-child(4)')).should('have.text', 'Tarefa Feita');
            cy.wrap(todo.find(':nth-child(3)')).should('have.text', '4');
            cy.wrap(todo.find(':nth-child(4)')).click()
            cy.wrap(todo.find(':nth-child(4)')).should('have.text', 'Tarefa Feita');
            cy.wrap(todo.find(':nth-child(3)')).should('have.text', '4');
        });

        cy.get('.Todo').eq(2).then((todo) => {
            cy.wrap(todo.find(':nth-child(4)')).should('have.text', 'Concluir tarefa');
            cy.wrap(todo.find(':nth-child(3)')).should('have.text', '00');
            cy.wrap(todo.find(':nth-child(4)')).click()
            cy.wrap(todo.find(':nth-child(4)')).should('have.text', 'Tarefa Feita');
            cy.wrap(todo.find(':nth-child(3)')).should('have.text', '1');
            cy.wrap(todo.find(':nth-child(4)')).click()
            cy.wrap(todo.find(':nth-child(4)')).should('have.text', 'Tarefa Feita');
            cy.wrap(todo.find(':nth-child(3)')).should('have.text', '1');
        }); 

    })

    it('Excluindo tarefas', () => {
        cy.get('.criarTodo').click()
        cy.get('.criadorNome').type('Arrumar o quarto')
        cy.get('.criadorVezes').type(2)
        cy.get('.criadorCriar').click()

        cy.get('.criarTodo').click()
        cy.get('.criadorNome').type('Mexer no celular')
        cy.get('.criadorVezes').type(78)
        cy.get('.criadorCriar').click()

        cy.get('.criarTodo').click()
        cy.get('.criadorNome').type('Ir ao shopping')
        cy.get('.criadorCriar').click()
        
        
        cy.get('.tarefas').children().should('have.length', 3)

        cy.get('.Todo').eq(0).then((todo) => {
            cy.wrap(todo.find(':nth-child(1)')).should('have.text', '0');
            cy.wrap(todo.find(':nth-child(2)')).should('have.text', 'Arrumar o quarto');
            cy.wrap(todo.find(':nth-child(3)')).should('have.text', '02');
            cy.wrap(todo.find(':nth-child(5)')).click()
        });

        cy.get('.Todo').eq(0).then((todo) => {
            cy.wrap(todo.find(':nth-child(1)')).should('have.text', '0');
            cy.wrap(todo.find(':nth-child(2)')).should('have.text', 'Mexer no celular');
            cy.wrap(todo.find(':nth-child(3)')).should('have.text', '078');
            cy.wrap(todo.find(':nth-child(5)')).click()
        });
    })

    it('Teste geral', () => {
        cy.get('.criarTodo').click()
        cy.get('.criadorNome').type('Pintar')
        cy.get('.criadorVezes').type(4)
        cy.get('.criadorCriar').click()

        cy.get('.tarefas').children().should('have.length', 1)

        cy.get('.criarTodo').click()
        cy.get('.criadorNome').type('Jogar futebol')
        cy.get('.criadorVezes').type(53)
        cy.get('.criadorCriar').click()

        cy.get('.tarefas').children().should('have.length', 2)

        cy.get('.criarTodo').click()
        cy.get('.criadorNome').type('Escrever')
        cy.get('.criadorCriar').click()

        cy.get('.tarefas').children().should('have.length', 3)

        cy.get('.criarTodo').click()
        cy.get('.criadorNome').type('Ler um livro')
        cy.get('.criadorVezes').type(8)
        cy.get('.criadorCriar').click()

        cy.get('.tarefas').children().should('have.length', 4)

        cy.get('.criarTodo').click()
        cy.get('.criadorNome').type('Conversar')
        cy.get('.criadorVezes').type(708)
        cy.get('.criadorCriar').click()

        cy.get('.tarefas').children().should('have.length', 5)


        cy.get('.Todo').eq(0).then((todo) => {
            cy.wrap(todo.find(':first-child')).should('have.text', '0');
            cy.wrap(todo.find(':nth-child(2)')).should('have.text', 'Pintar');
            cy.wrap(todo.find(':nth-child(3)')).should('have.text', '04');
            cy.wrap(todo.find(':nth-child(4)')).should('have.text', 'Concluir tarefa');
        });
        cy.get('.Todo').eq(1).then((todo) => {
            cy.wrap(todo.find(':first-child')).should('have.text', '1');
            cy.wrap(todo.find(':nth-child(2)')).should('have.text', 'Jogar futebol');
            cy.wrap(todo.find(':nth-child(3)')).should('have.text', '053');
            cy.wrap(todo.find(':nth-child(4)')).should('have.text', 'Concluir tarefa');
        });
        cy.get('.Todo').eq(2).then((todo) => {
            cy.wrap(todo.find(':first-child')).should('have.text', '2');
            cy.wrap(todo.find(':nth-child(2)')).should('have.text', 'Escrever');
            cy.wrap(todo.find(':nth-child(3)')).should('have.text', '0');
            cy.wrap(todo.find(':nth-child(4)')).should('have.text', 'Concluir tarefa');
        });
        cy.get('.Todo').eq(3).then((todo) => {
            cy.wrap(todo.find(':first-child')).should('have.text', '3');
            cy.wrap(todo.find(':nth-child(2)')).should('have.text', 'Ler um livro');
            cy.wrap(todo.find(':nth-child(3)')).should('have.text', '08');
            cy.wrap(todo.find(':nth-child(4)')).should('have.text', 'Concluir tarefa');
        });
        cy.get('.Todo').eq(4).then((todo) => {
            cy.wrap(todo.find(':first-child')).should('have.text', '4');
            cy.wrap(todo.find(':nth-child(2)')).should('have.text', 'Conversar');
            cy.wrap(todo.find(':nth-child(3)')).should('have.text', '0708');
            cy.wrap(todo.find(':nth-child(4)')).should('have.text', 'Concluir tarefa');
        });
        

        cy.get('.Todo').eq(0).then((todo) => {
            cy.wrap(todo.find(':nth-child(4)')).click();
            cy.wrap(todo.find(':nth-child(4)')).should('have.text', 'Tarefa Feita');
            cy.wrap(todo.find(':nth-child(3)')).should('have.text', '5');
            cy.wrap(todo.find(':nth-child(4)')).click();
            cy.wrap(todo.find(':nth-child(3)')).should('have.text', '5');
        });

        cy.get('.Todo').eq(3).then((todo) => {
            cy.wrap(todo.find(':nth-child(4)')).click();
            cy.wrap(todo.find(':nth-child(4)')).should('have.text', 'Tarefa Feita');
            cy.wrap(todo.find(':nth-child(3)')).should('have.text', '9');
            cy.wrap(todo.find(':nth-child(4)')).click();
            cy.wrap(todo.find(':nth-child(3)')).should('have.text', '9');
        });

        cy.get('.Todo').eq(2).then((todo) => {
            cy.wrap(todo.find(':nth-child(5)')).click();
        });

        cy.get('.Todo').eq(0).then((todo) => {
            cy.wrap(todo.find(':nth-child(5)')).click();
        });


        cy.get('.criarTodo').click()
        cy.get('.criadorNome').type('Tarefa nova')
        cy.get('.criadorVezes').type(80)
        cy.get('.criadorCriar').click()

        cy.get('.tarefas').children().should('have.length', 4)

        cy.get('.Todo').eq(3).then((todo) => {
            cy.wrap(todo.find(':nth-child(4)')).click();
            cy.wrap(todo.find(':nth-child(4)')).should('have.text', 'Tarefa Feita');
            cy.wrap(todo.find(':nth-child(3)')).should('have.text', '81');
            cy.wrap(todo.find(':nth-child(4)')).click();
            cy.wrap(todo.find(':nth-child(3)')).should('have.text', '81');
        });

        
        cy.get('.Todo').eq(0).then((todo) => {
            cy.wrap(todo.find(':first-child')).should('have.text', '0');
            cy.wrap(todo.find(':nth-child(2)')).should('have.text', 'Jogar futebol');
            cy.wrap(todo.find(':nth-child(3)')).should('have.text', '053');
            cy.wrap(todo.find(':nth-child(4)')).should('have.text', 'Concluir tarefa');
        });
        cy.get('.Todo').eq(1).then((todo) => {
            cy.wrap(todo.find(':first-child')).should('have.text', '1');
            cy.wrap(todo.find(':nth-child(2)')).should('have.text', 'Ler um livro');
            cy.wrap(todo.find(':nth-child(3)')).should('have.text', '9');
            cy.wrap(todo.find(':nth-child(4)')).should('have.text', 'Tarefa Feita');
        });
        cy.get('.Todo').eq(2).then((todo) => {
            cy.wrap(todo.find(':first-child')).should('have.text', '2');
            cy.wrap(todo.find(':nth-child(2)')).should('have.text', 'Conversar');
            cy.wrap(todo.find(':nth-child(3)')).should('have.text', '0708');
            cy.wrap(todo.find(':nth-child(4)')).should('have.text', 'Concluir tarefa');
        });
        cy.get('.Todo').eq(3).then((todo) => {
            cy.wrap(todo.find(':first-child')).should('have.text', '3');
            cy.wrap(todo.find(':nth-child(2)')).should('have.text', 'Tarefa nova');
            cy.wrap(todo.find(':nth-child(3)')).should('have.text', '81');
            cy.wrap(todo.find(':nth-child(4)')).should('have.text', 'Tarefa Feita');
        });
        
    })

    /*it('Cadastrar entradas', () => {

        cy.get('#transaction .button').click()
        cy.get('#description').type('Doces')
        cy.get('[name=amount]').type(302)
        cy.get('[type=date]').type('2024-02-19')
        cy.get('button').contains('Salvar').click()
        cy.get('#data-table tbody tr').should('have.length', 1)

        cy.get('#transaction .button').click()
        cy.get('#description').type('Quadro')
        cy.get('[name=amount]').type(50)
        cy.get('[type=date]').type('2024-02-18')
        cy.get('button').contains('Salvar').click()
        cy.get('#data-table tbody tr').should('have.length', 2)

        cy.get('#transaction .button').click()
        cy.get('#description').type('Televisão')
        cy.get('[name=amount]').type(230)
        cy.get('[type=date]').type('2023-03-17')
        cy.get('button').contains('Salvar').click()
        cy.get('#data-table tbody tr').should('have.length', 3)

        cy.get('#transaction .button').click()
        cy.get('#description').type('Jogos')
        cy.get('[name=amount]').type(2)
        cy.get('[type=date]').type('1998-09-12')
        cy.get('button').contains('Salvar').click()
        cy.get('#data-table tbody tr').should('have.length', 4)
    })

    it('Cadastrar saidas', () => {

        cy.get('#transaction .button').click()
        cy.get('#description').type('Chinelo')
        cy.get('[name=amount]').type(-102)
        cy.get('[type=date]').type('2024-02-19')
        cy.get('button').contains('Salvar').click()

        cy.get('#data-table tbody tr').should('have.length', 1)

        cy.get('#transaction .button').click()
        cy.get('#description').type('Roupas')
        cy.get('[name=amount]').type(-1050)
        cy.get('[type=date]').type('2024-02-18')
        cy.get('button').contains('Salvar').click()

        cy.get('#data-table tbody tr').should('have.length', 2)
    })

    it('Remover entradas e saidas', () => {
        const entrada = 'Casa'
        const saida = 'Mercado'

        cy.get('#transaction .button').click()
        cy.get('#description').type(entrada)
        cy.get('[name=amount]').type(102)
        cy.get('[type=date]').type('2024-02-19')
        cy.get('button').contains('Salvar').click()

        cy.get('#data-table tbody tr').should('have.length', 1)

        cy.get('#transaction .button').click()
        cy.get('#description').type(saida)
        cy.get('[name=amount]').type(-1050)
        cy.get('[type=date]').type('2024-02-18')
        cy.get('button').contains('Salvar').click()

        cy.get('#data-table tbody tr').should('have.length', 2)

        cy.get('td.description').contains(entrada).parent().find('img[onClick*=remove]').click()

        cy.get('td.description').contains(saida).parent().find('img[onClick*=remove]').click()
    })

    it('Validar saldo com diversas transações', () => {
        cy.get('#transaction .button').click()
        cy.get('#description').type('Celular')
        cy.get('[name=amount]').type(302)
        cy.get('[type=date]').type('2024-02-19')
        cy.get('button').contains('Salvar').click()
        cy.get('#data-table tbody tr').should('have.length', 1)

        cy.get('#transaction .button').click()
        cy.get('#description').type('Fone de ouvido')
        cy.get('[name=amount]').type(50)
        cy.get('[type=date]').type('2024-02-18')
        cy.get('button').contains('Salvar').click()
        cy.get('#data-table tbody tr').should('have.length', 2)

        cy.get('#transaction .button').click()
        cy.get('#description').type('Carro')
        cy.get('[name=amount]').type(-2070)
        cy.get('[type=date]').type('2021-01-11')
        cy.get('button').contains('Salvar').click()
        cy.get('#data-table tbody tr').should('have.length', 3)
        
        cy.get('#transaction .button').click()
        cy.get('#description').type('Xbox')
        cy.get('[name=amount]').type(-1360)
        cy.get('[type=date]').type('1989-05-12')
        cy.get('button').contains('Salvar').click()
        cy.get('#data-table tbody tr').should('have.length', 4)

        let incomes = 0
        let expenses = 0

        cy.get('#data-table tbody tr').each(($el, index, $list) => {
            cy.get($el).find('td.income, td.expense').invoke('text').then(text => {
                if(text.includes('-')) {
                    expenses = expenses + format(text)
                } else {
                    incomes = incomes + format(text)
                }
                cy.log('Entradas: ', incomes)
                cy.log('Saidas: ', expenses)
            })
        })
    })
    */
})