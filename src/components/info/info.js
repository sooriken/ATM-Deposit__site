import '../../App.css';
import './info.css';

const Info = () =>  {
    return(
        <div className = "info-inner" id = "InfoBlock">
            <div className = "info-textblock">
                <div className = "suptitle">Комплектующие</div>
                <div className = "name">АТМ DEPOSIT</div>
                <div className = "text">Какое-то описание на несколько строк про то какие классные комплектующие.</div>
            </div>
            <div className = "info-footer">
                <div className = "info-footer__item">1/2000s</div>
                <div className = "info-footer__item">f/11</div>
                <div className = "info-footer__item">100</div>
                <div className = "info-footer__item">Россия</div>
            </div>
        </div>
    );
}

export default Info;