import React, {Component} from 'react';
import '../../resources/styles/faq.css'

export default class FAQ extends Component {
    render() {
        return <div className='faq-wrapper'>
            <h1 className='faq-title'>Често задавани въпроси</h1>
            <div className='information-wrapper'>
                <h2>Информация за доставка:</h2>
                <article>
                    <h3>Как изпращаме?</h3>
                    <p>Използваме "Български пощи" за доставки в страната и чужбина. Можем да договорим и различен доставчик.</p>
                </article>
                <article>
                    <h3>Колко струва доставката?</h3>
                    <p>За София използваме наш доставчик и доставка е безплатна. За останалите градове и държави, можете да пресметнете доставката <a href='http://www.bgpost.bg/bg/calculator'>тук</a>.</p>
                </article>
            </div>
            <div className='information-wrapper'>            
            <h2>Как да се грижите за Вашите нови покупки?</h2>
            <article>
                    <h3>За текстилните продукти:</h3>
                    <p>Могат да се перат в пералня на 30&deg;, като рисунката се поставя от вътрешната страна на дрехата. При гладене - не поставяйте ютията директно върху рисунката!</p>
            </article>
            <article>
                    <h3>За бижута:</h3>
                    <p>Не препоръчваме мокрене или третиране с препарати на бижутата.</p>
            </article>            
            </div>
            <article  className="sneakers">
                    <h3>За кецките:</h3>
                    <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FArt.Podaryche%2Fvideos%2F1377002902395992%2F&show_text=0&width=560" width="560" height="315" scrolling="no" frameBorder="0" allowTransparency="true" allowFullScreen="true" className='faq-video'></iframe>
            </article>
        </div>
    }
}