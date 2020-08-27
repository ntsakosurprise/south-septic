
import React from 'react';
import {BrowserRouter,Link} from 'react-router-dom';


const Brand = ()=>{


	

		return(

            <div className="footer__brand">

                <section className="footer__brand-request">
                    <button className="footer__brand-btn">Request Service</button>
                </section>

                <section className="grid-row footer__brand--sok">

                    <div className="grid-col-5">
                        <p className="footer__brand--squares footer__brand--squares-1"></p>
                        <p className="footer__brand--squares footer__brand--squares-2"></p>
                        <p className="footer__brand--squares footer__brand--squares-3"></p>
                    </div>
                    <div className="grid-col-7">

                    <h3 className="footer__brand--social-mhead">Stay South Septic updated on Social</h3>
                            <h4 className="footer__brand--social-shead">Media</h4>

                        <section className="footer__brand--social">

                            

                            <nav className="footer__brand--social-nav">
                                <Link to='/about' className="link footer__brand-imgs-links">
                                    <img src="/img/social/facebook.png" className="footer__brand-imgs" />
                                </Link> 
                                <Link to='/services' className="link footer__brand-imgs-links">
                                     <img src="/img/social/twitter.png" className="footer__brand-imgs" />
                                </Link>
                                <Link to='/contact' className="link footer__brand-imgs-links">
                                    <img src="/img/social/instagram.png" className="footer__brand-imgs" />
                                </Link>
                            </nav>

                        </section>
                    

                    </div>

                

                 </section>
           

                <section className="grid-row footer__brand--brand">

               

                <div className="grid-col-5 footer__brand-offsets">
                    <span className="mg-left-fl-bt font-fd-xx-tn fg-light">South Septic Tanks 2020</span>
                </div>
                <div className="grid-col-4 footer__brand-offsets">
                    <nav>
                        <Link to='/about' className="link footer__brand-links">
                            About
                        </Link> 
                        <Link to='/services' className="link footer__brand-links">
                            Services
                        </Link>
                        <Link to='/contact' className="link footer__brand-links">
                            Contact
                        </Link>
                    </nav>
                </div> 
            
                <div className="grid-col-3 ">
                    <nav>
                        <Link to='/faqs' className="link footer__brand-links footer__brand-hanging">
                            Faqs
                        </Link> 
                        <Link to='/privacy' className="link footer__brand-links footer__brand-hanging">
                            Privacy
                        </Link>
                       
                    </nav>
                </div>



            </section>
           

            </div>

			
		)


	
	

}




export default Brand;





