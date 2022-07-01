export interface Items {
    nome: string
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
    
export const carrinho: Array<Items> =
    [{
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
        nome: 'Regata listrada AK by Riachuelo',
        url: 'regata-listrada-ak-by-riachuelo',
        preco: 39.90,
        descricao: 'Confeccionada em mix de fibras, a Regata listrada AK by Riachuelo vai fazer você se apaixonar! Com design único, a peça apresenta caimento perfeito e tecido super confortável, perfeita para diversas ocasiões, aposte!',
        tamanhos_disponiveis: ['P', 'M', 'G'],
        quantidade_disponivel: 3,
        imagens: [
            { url: '/images/listrada.png', descricao: 'Regata listrada preta e cinza' }
        ],
    }
]