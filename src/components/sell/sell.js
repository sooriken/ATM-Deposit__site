import '../../App.css';
import './sell.css';
import Button from '../buttons/button';

const Sell = () =>  {
    return(
        <div className = "sell-inner" id="SellBlock">
            <div className = "title">Карта товаров</div>
            <div className = "subtitle">Комплектующие</div>
            <div className = "sell-item__inner">
                <SellItem
                    SellItemBackground='https://images.unsplash.com/photo-1605379399843-5870eea9b74e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1498&q=80'
                    SellItemName='Экран сенсорный 15.1"' 
                    SellItemDescription='Равным образом, синтетическое тестирование является качественно новой ступенью приоритизации разума над эмоциями.'
                />
                <SellItem 
                    SellItemBackground='https://images.unsplash.com/photo-1590212151175-e58edd96185b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'
                    SellItemName='Монитор LCD 15" DVI' 
                    SellItemDescription='В частности, понимание сути ресурсосберегающих технологий позволяет выполнить важные задания по разработке экспериментов.'
                />
                <SellItem 
                    SellItemBackground='https://images.unsplash.com/photo-1601597111158-2fceff292cdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
                    SellItemName='Клавиатура EPP-8000R' 
                    SellItemDescription='Cделанные на базе интернет-аналитики выводы, которые представляют собой яркий пример типа политической культуры, будут призваны к ответу.'
                />
                <SellItem 
                    SellItemBackground='https://images.unsplash.com/photo-1615309662472-4ca77a77a189?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
                    SellItemName='Кабель системного блока PIVAT' 
                    SellItemDescription='Cделанные на базе интернет-аналитики выводы, которые представляют собой яркий пример типа политической культуры, будут призваны к ответу.'
                />
                <SellItem 
                    SellItemBackground='https://images.unsplash.com/photo-1607609972246-a14762f20d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
                    SellItemName='Модуль купюроприёмника' 
                    SellItemDescription='Cделанные на базе интернет-аналитики выводы, которые представляют собой яркий пример типа политической культуры, будут призваны к ответу.'
                />
                <SellItem
                    SellItemBackground='https://images.unsplash.com/photo-1632156752206-f6dac15dd37d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80'
                    SellItemName='Блок питания 750W' 
                    SellItemDescription='Не следует, однако, забывать, что новая модель организационной деятельности позволяет оценить значение первоочередных требований.'
                />
                <SellItemEnd 
                    SellItemBackground='https://images.unsplash.com/photo-1601597111158-2fceff292cdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
                    SellItemName='Клавиатура EPP-8000R' 
                    SellItemDescription='Cделанные на базе интернет-аналитики выводы, которые представляют собой яркий пример типа политической культуры, будут призваны к ответу.'
                />
            </div>
        </div>
    );
}

const SellItem = (props) => {
    return(
          <div className = "sell-item">
                <img className = "sell-item__background" src={props.SellItemBackground} alt="" />
                <div className = "suptext">{props.SellItemName}</div>
                <div className = "text">{props.SellItemDescription}</div>
                <Button ButtonText='Подробнее'/>
            </div>
    )
}

const SellItemEnd = (props) => {
    return(
          <div className = "sell-item__end">
                <img className = "sell-item__background" src={props.SellItemBackground} alt="" />
                <div className = "suptext">{props.SellItemName}</div>
                <div className = "text">{props.SellItemDescription}</div>
                <Button ButtonText='Подробнее'/>
            </div>
    )
}

export default Sell;