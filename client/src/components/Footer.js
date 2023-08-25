import React from 'react'

const Footer = () => {
    return (
    
    <div className="footer-dark">
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-3 item">
                        <h3>Legal</h3>
                        <ul>
                            <li><a href="#">Privacy</a></li>
                            <li><a href="#">Terms</a></li>
                            <li><a href="#">Coocking Policy</a></li>
                            <li><a href="#">Intellectual Property</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-3 item">
                        <h3>Career</h3>
                        <ul>
                            <li><a href="#">Career Portal</a></li>
                            <li><a href="#">Tech Blog</a></li>
                           
                        </ul>
                    </div>
                    <div className="col-md-6 item text">
                        <h3>Subscribe to our Newsletter</h3>
                        <form action="" method="post">
                            <div className="row">
                                <div className="col-md-4 mb-4">
                                    <input type="text" className="form-control" placeholder="Your Name Here" />
                                </div>
                                <div className="col-md-4 mb-4">
                                    <input type="email" className="form-control" placeholder="Your e-mail Here" />
                                </div>
                                <div className="col-md-4 mb-4">
                                    <input type="submit" className="btn btn-secondary" value="Get Subscription" />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col item social"><a href="#"><i className="icon ion-social-facebook"></i></a><a href="#"><i className="icon ion-social-twitter"></i></a><a href="#"><i className="icon ion-social-snapchat"></i></a><a href="#"><i className="icon ion-social-instagram"></i></a></div>
                </div>
                <p className="copyright"><b>FLING © 2021</b></p>
            </div>
        </footer>
    </div>
    )
}

export default Footer
