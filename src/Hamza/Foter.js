import React from 'react'
import footer from 'bootstrap';
import { FaBeer } from 'react-icons/fa';
import { FaFacebook, FaInstagram,FaGoogle } from 'react-icons/fa';

import {TiSocialTwitter, TiSocialGithub} from 'react-icons/ti'

import {ImLocation2} from 'react-icons/im'

import {BsFillTelephonePlusFill} from 'react-icons/bs'

import {MdEmail} from 'react-icons/md'

import  '../Style/Foter.css';
const Foter = () => {
  return (
	
    <div>
        
        {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css" integrity="sha256-2XFplPlrFClt0bIdPgpz8H7ojnk10H69xRqd9+uTShA=" crossorigin="anonymous" />
<section  clasNameName="deneb_cta">
	<div  clasNameName="container">
		<div  clasNameName="cta_wrapper">
			<div  clasNameName="row align-items-center">
				<div  clasNameName="col-lg-7">
					<div  clasNameName="cta_content">
						<h3>Have Any Project in Mind ?</h3>
						<p>Curabitur libero eros, efficitur sit amet sodales tincidunt, aliquet et leo sed ut nibh feugiat, auctor enim quis.</p>
					</div>
				</div>
				<div  clasNameName="col-lg-5">
					<div  clasNameName="button_box">
						<a href="#"  clasNameName="btn btn-warning">Hire Us</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</section> */}
{/* <footer  clasNameName="deneb_footer">
	<div  clasNameName="widget_wrapper" >
		<div  clasNameName="container">
			<div  clasNameName="row">
				<div  clasNameName="col-lg-4 col-md-6 col-12">
					<div  clasNameName="widget widegt_about">
						<div  clasNameName="widget_title">
							<img src=""  clasNameName="img-fluid" alt=""/>
						</div>
						<p>Quisque orci nisl, viverra et sem ac, tincidunt egestas massa. Morbi est arcu, hendrerit ac vehicula condimentum, euismod nec tortor praesent consequat urna.</p>
						<ul  clasNameName="social">
							<li><a href="#"><i  clasNameName="fab fa-facebook-f"><FaFacebook/></i></a></li>
							<li><a href="#"><i  clasNameName="fab fa-twitter"></i> <FaFacebook/></a></li>
							<li><a href="#"><i  clasNameName="fab fa-instagram"></i> <FaFacebook/></a></li>
						</ul>
					</div>
				</div>
				<div  clasNameName="col-lg-4 col-md-6 col-sm-12">
					<div  clasNameName="widget widget_link">
						<div  clasNameName="widget_title">
							<h4>Follow us</h4>
						</div>
						<ul>
							<li><a href="#">About Us</a></li>
							<li><a href="#">Services</a></li>
							<li><a href="#">Portfolio</a></li>
							<li><a href="#">Blog</a></li>
						</ul>
					</div>
				</div>
				<div  clasNameName="col-lg-4 col-md-6 col-sm-12">
					<div  clasNameName="widget widget_contact">
						<div  clasNameName="widget_title">
							<h4>Contact Us</h4>
						</div>
						<div  clasNameName="contact_info">
							<div  clasNameName="single_info">
								<div  clasNameName="icon">
									<i  clasNameName="fas fa-phone-alt"><FaFacebook/></i>
								</div>
								<div  clasNameName="info">
									<p><a href="tel:+919246147999">1800-121-3637</a></p>
									<p><a href="tel:+919246147999">+91 924-614-7999</a></p>
								</div>
							</div>
							<div  clasNameName="single_info">
								<div  clasNameName="icon">
									<i  clasNameName="fas fa-envelope"><FaFacebook/></i>
								</div>
								<div  clasNameName="info">
									<p><a href="mailto:info@deneb.com">info@deneb.com</a></p>
									<p><a href="mailto:services@deneb.com">services@deneb.com</a></p>
								</div>
							</div>
							<div  clasNameName="single_info">
								<div  clasNameName="icon">
									<i  clasNameName="fas fa-map-marker-alt"><FaFacebook/></i>
								</div>
								<div  clasNameName="info">
									<p>125, Park street aven, Brocklyn,<span>Newyork.</span></p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div  clasNameName="copyright_area">
		<div  clasNameName="container">
			<div  clasNameName="row">
				<div  clasNameName="col-lg-12">
					<div  clasNameName="copyright_text">
						<p>Copyright &copy; 2020 All rights reserved.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</footer> */}


{/* <!-- Footer --> */}
{/* <section>Footer Example 4</section> */}
<footer className="footer-distributed">

			<div className="footer-left">

				<h3>Travel<span>Wave</span></h3>
				<div className='container'>
      <div className='row'>
        <div className='col-md'>
          <img src={require("../images/logo.png")} className="w-50 h-50 logo" />
          </div>
        </div>
      </div>
				<p className="footer-links">
					<a href="/" className="#">Home</a>
					
					<a href="Visa">Visa</a>
				
					<a href="Travel">Travel insurance</a>
				
					<a href="Hot">Hot deals</a>
					
					<a href="Contact">Contact</a>
					
					<a href="#"></a>
				</p>

				<p className="footer-company-name">Travel Wave © 2015</p>
			</div>

			<div className="footer-center">

				<div>
				<ImLocation2 className='icon-address'/>	<i className="fa fa-map-marker px-2"></i>
					<p><span>First Floor,</span>AB Heights, Airport Road, Lahore</p>
				</div>
				{/* Office Address: Office: 11, First Floor, AB Heights, Airport Road, Lahore */}
				<div>
				<BsFillTelephonePlusFill className='icon-address'/>	<i className="fa fa-phone px-2"></i>
					<p>+1.555.555.5555</p>
				</div>

				<div>
				<MdEmail className='icon-address'/>	<i className="fa fa-envelope px-2"></i>
					<p><a href="mailto:support@company.com">support@company.com</a></p>
				</div>

			</div>

			<div className="footer-right">

				<p className="footer-company-about">
					<span>About the company</span>
					Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
				</p>

				<div className="footer-icons">

					<a href="#"><i className="fa fa-facebook"><FaFacebook/></i></a>
					<a href="#"><i className="fa fa-twitter"><FaInstagram/></i></a>
					<a href="#"><i className="fa fa-linkedin"><TiSocialTwitter/></i></a>
					<a href="#"><i className="fa fa-github"><TiSocialGithub/></i></a>

				</div>

			</div>

		</footer>

    </div>
  )
}

export default Foter;