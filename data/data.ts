export interface Items {
    id: number,
    nome: string,
    url: string,
    preco: number,
    descricao: string,
    tamanhos_disponiveis: string[],
    quantidade_disponivel: number,
    imagens: Array<Images>
}

export interface Images {
    url: string,
    descricao: string
}
    
export const estoque: Array<Items> =
    [{
        id: 1,
        nome: 'Cropped preto AK by Riachuelo',
        url: 'cropped-preto-ak-by-riachuelo',
        preco: 29.90,
        descricao: 'O Cropped preto AK by Riachuelo tem o charme do preto e básico. Ótimo para looks de verão!',
        tamanhos_disponiveis: ['P', 'M', 'G'],
        quantidade_disponivel: 3,
        imagens: [
            { url: '/images/cropped.png', descricao: 'crooped preto' }
        ],
    },

    {
        id: 2,
        nome: 'Regata listrada AK by Riachuelo',
        url: 'regata-listrada-ak-by-riachuelo',
        preco: 39.90,
        descricao: 'Confeccionada em mix de fibras, a Regata listrada AK by Riachuelo vai fazer você se apaixonar! Com design único, a peça apresenta caimento perfeito e tecido super confortável, perfeita para diversas ocasiões, aposte!',
        tamanhos_disponiveis: ['P', 'M', 'G'],
        quantidade_disponivel: 3,
        imagens: [
            { url: '/images/listrada.png', descricao: 'Regata listrada preta e cinza' }
        ],
    },

    {
        id: 3,
        nome: 'Calça larga preto AK by Riachuelo',
        url: 'calça-larga-preto-ak-by-riachuelo',
        preco: 99.90,
        descricao: 'A Calça larga preto AK by Riachuelo é a escolha certa para criar looks com muito estilo! Confeccionada em sarja, a calça apresenta modelagem paper bag, a queridinha do momento! Perfeita para ocasiões especiais, encontros com os amigos e com o crush, aposte!',
        tamanhos_disponiveis: ['P', 'M', 'G'],
        quantidade_disponivel: 3,
        imagens: [
            { url: '/images/calca.png', descricao: 'Calça larga preta' }
        ],
    },

    {
        id: 4,
        nome: 'Vestido amarelo AK by Riachuelo',
        url: 'calca-alfaiataria',
        preco: 179.90,
        descricao: 'Blazer Cropped Feminino Manga Longa com Ombreira Linho Bege AK by Riachuelo confeccionado em tecido com linho, a peça conta com modelagem curta e gola tailleur com fechamento por botão. Queridinho do momento, o blazer pode ser usado em várias composições, como em peças com jeans destroyed e tênis casual ou com calça de alfaiataria e salto fino, formando um look super elegante. Inspire-se!',
        tamanhos_disponiveis: ['P', 'M', 'G'],
        quantidade_disponivel: 3,
        imagens: [
            { url: '/images/vestido.png', descricao: 'Vestido amarelo' }
        ],
    }
]