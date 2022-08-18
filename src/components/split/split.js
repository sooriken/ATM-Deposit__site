import '../../App.css';
import './split.css';
import Button from '../buttons/button';

const Split = () =>  {
    return(
        <div className = "split-inner" id = "SplitBlock">
            <div className = "split-textinfo__inner">
                <div className = "suptext text">The Gear cage</div>
                <div className = "splite-textinfo__title">Куда мы доставляем комплектующие</div>
                <div className = "">Какой-то текст</div>
                <Button ButtonText='Проверить'/>
            </div>
            <div className = "split-image__inner">
                <div className = ""></div>
            </div>
        </div>
    );
}

export default Split;