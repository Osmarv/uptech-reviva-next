import {
    FashionTipsWrapper,
    FashionTipsBigPost,
    FashionTipsBigPostText,
    FashionTipsBlogPost,
    FashionTipsSmallPost,
    FashionTipsSmallPostText
} from './fashionTipsStyle'

function FashionTips() {
    return (
        <section>
                <div>
                    <h2 className="h2">Na dúvida sobre combinar suas roupas e ficar incrível?</h2>
                    <h2 className="h2">Confira nossas dicas em nosso blog.</h2>
                </div>

                <FashionTipsWrapper>
                    <FashionTipsBigPost>
                        <img src={'/images/big_post.jpg'} alt="Blog post preview"/>
                        <FashionTipsBigPostText>O que fazer com o look que usou no carnaval? Confira já como fazer uso dessas mesmas peças no inverno e continuar na moda.</FashionTipsBigPostText>
                    </FashionTipsBigPost>
                    <FashionTipsBlogPost>
                        <FashionTipsSmallPost>
                            <img src={'/images/small_post1.jpg'} alt="Blog post preview"/>
                            <FashionTipsSmallPostText>O que fazer com o look que usou no carnaval? Confira já como fazer uso dessas mesmas peças no inverno e continuar na moda.</FashionTipsSmallPostText>
                        </FashionTipsSmallPost>
                        <FashionTipsSmallPost>
                            <img src={'/images/small_post2.jpg'} alt="Blog post preview"/>
                            <FashionTipsSmallPostText>O que fazer com o look que usou no carnaval? Confira já como fazer uso dessas mesmas peças no inverno e continuar na moda.</FashionTipsSmallPostText>
                        </FashionTipsSmallPost>
                    </FashionTipsBlogPost>
                </FashionTipsWrapper>
        </section>
    )
}

export default FashionTips;