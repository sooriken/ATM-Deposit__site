import '../../App.css';
import './contact.css';


const Contact = () =>  {
    return(
        <div className = "contact-inner" id = "ContactBlock">
            <div className = "contact-links__inner">
                <div className = "contact-links__block contact-links__block--about">
                    <div className = "logo">ATM Deposit</div>
                    <div className = "text">Качественные комплектующие для банкоматов.</div>
                </div>
                <div className = "contact-links__block">
                    <div className = "suptitle">Business areas</div>
                    <a className = "contact-links__block-position" href = "#">Product Photography</a>
                    <a className = "contact-links__block-position" href = "#">Architecture Photography</a>
                    <a className = "contact-links__block-position" href = "#">Drone Photography</a>
                    <a className = "contact-links__block-position" href = "#">Wildlife Photography</a>
                </div>
                <div className = "contact-links__block">
                    <div className = "suptitle">Pages</div>
                    <a className = "contact-links__block-position" href = "#">Gear cage</a>
                    <a className = "contact-links__block-position" href = "#">Featured images</a>
                    <a className = "contact-links__block-position" href = "#">Contact</a>
                    <a className = "contact-links__block-position" href = "#">Style guide</a>
                    <a className = "contact-links__block-position" href = "#">Instructions</a>
                    <a className = "contact-links__block-position" href = "#">Changelog</a>
                </div>
            </div>
            <div className = "contact-tie__inner">
                <div className = "contact-tie__block">
                    <div className = "suptext">Подпишитесь на новостную рассылку.</div>
                    <div className = "text">Будьте в курсе событий, которые вас интересуют.</div>
                </div>
                <div className = "contact-tie__block">
                    <div className = "contact-tie__block-mail">
                        <div className = "contact-tie__block-bar">
                            <div className = "contact-tie__block-fill"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className = "contact-footer__inner">
                <div className = "contact-footer__block">
                    <div className = "text">© ATM Deposit, Inc. All rights reserved.</div>
                </div>
                <div className = "contact-footer__block">
                    <a className = "contact-footer__block-icon" href = "#">
                        <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 2.55654C23.1169 2.94873 22.168 3.21203 21.1724 3.3327C22.1899 2.72384 22.9688 1.75844 23.3363 0.609283C22.3846 1.17426 21.3288 1.58291 20.2098 1.80506C19.313 0.84789 18.0322 0.25 16.6171 0.25C13.8965 0.25 11.6915 2.45232 11.6915 5.173C11.6915 5.5597 11.7353 5.93544 11.8176 6.29473C7.72575 6.08903 4.09736 4.1308 1.67021 1.14958C1.24786 1.87637 1.00377 2.72384 1.00377 3.62616C1.00377 5.33481 1.87316 6.84051 3.19232 7.72363C2.38601 7.69895 1.62633 7.47679 0.962633 7.10654V7.16962C0.962633 9.5557 2.66027 11.5441 4.9119 11.9966C4.50051 12.1091 4.06445 12.1694 3.61467 12.1694C3.29654 12.1694 2.98937 12.1392 2.69044 12.0816C3.31574 14.0371 5.13404 15.4605 7.28694 15.5017C5.60302 16.8209 3.48303 17.608 1.17381 17.608C0.77614 17.608 0.386699 17.5861 0 17.5395C2.18032 18.9354 4.76654 19.75 7.54748 19.75C16.6034 19.75 21.5564 12.2489 21.5564 5.74346C21.5564 5.52954 21.5509 5.31835 21.5427 5.10717C22.5053 4.41055 23.3418 3.54388 24 2.55654Z" fill="#C0C0C0"/>
                        </svg>
                    </a>
                    <a className = "contact-footer__block-icon" href = "#">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 5.76825C8.5638 5.76825 5.76825 8.5638 5.76825 12C5.76825 15.4362 8.5638 18.2293 12 18.2293C15.4362 18.2293 18.2293 15.4338 18.2293 12C18.2317 8.5638 15.4362 5.76825 12 5.76825ZM12 15.8536C9.87422 15.8536 8.14641 14.1258 8.14641 12C8.14641 9.87422 9.87422 8.14641 12 8.14641C14.1258 8.14641 15.8536 9.87422 15.8536 12C15.8536 14.1258 14.1258 15.8536 12 15.8536ZM17.0936 0H6.90637C3.09889 0 0 3.09889 0 6.90637V17.0936C0 20.9011 3.09889 24 6.90637 24H17.0936C20.9011 24 24 20.9011 24 17.0936V6.90637C24 3.09889 20.9035 0 17.0936 0ZM21.6243 17.0936C21.6243 19.5907 19.5907 21.6218 17.0936 21.6218H6.90637C4.4093 21.6218 2.37816 19.5907 2.37816 17.0936V6.90637C2.37816 4.4093 4.4093 2.37816 6.90637 2.37816H17.0936C19.5907 2.37816 21.6218 4.4093 21.6218 6.90637V17.0936H21.6243ZM18.3167 3.96764C17.4188 3.96764 16.6859 4.69808 16.6859 5.59838C16.6859 6.49626 17.4164 7.22912 18.3167 7.22912C19.2146 7.22912 19.9474 6.49869 19.9474 5.59838C19.9474 4.69808 19.2146 3.96764 18.3167 3.96764Z" fill="#C0C0C0"/>
                        </svg>
                    </a>
                    <a className = "contact-footer__block-icon" href = "#">
                        <svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.625 7.7714H7.79015V5.2806C7.79015 4.34518 8.41822 4.12573 8.85815 4.12573H11.5586V0.0137159L7.83442 0C3.70352 0 2.76556 3.06686 2.76556 5.03098V7.7714H0.375V12.0069H2.76556V24H7.79292V12.0096H11.1851L11.625 7.7714Z" fill="#C0C0C0"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contact;