import '../../../App.css';

const SellCardMonitor = (props) => {
    return ( 
      <container className = "container">
        <div className = "sell-card__inner">
          <div className = "sell-card__image">
            <img className = "sell-card__img" src={props.SellCardImage} alt="" />
          </div>
          <div className = "sell-card__description-inner"></div>
        </div>
      </container>  
    );
  }
  
  export default SellCardMonitor;  