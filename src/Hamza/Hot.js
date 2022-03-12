import React from 'react'
import hot from '../Style/hot.css'



// import First from '../images/First.jpg';

import { AiFillCaretRight } from "react-icons/ai";

import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

const Hot = () => {
  return (
    

   <>
   
   


<div className='container  hot-page '>


<div className='row '>

  {/* =============================================this is for img and data and para =======================================*/}
  <div className='col-sm first'>
  <h2 className='hotpara'>HOT DEALS</h2>

<br/>
{/* ========================this is turkry data 1========================== */}

<img src={require("../images/Turk.jpg")} className="w-25"/>

<a href="" className='heading-pix'>turkey</a>
<p className='w-50 font my-2'>

Tourism in Turkey is focused largely on a variety of historical sites, and on seaside resorts along its Aegean and Mediterranean Sea coasts. Turkey has also become a popular destination for culture, spa, and health care.
<br/><br/>
Climate :- Hot, dry summers and mild to cool, wet winters.

</p>

<br/>
<button className='btn1'>learn more</button>




{/* ========================this is thai data 2========================== */}

<div className='py-5'>
<img src={require("../images/Thai.jpg")} className="w-25"/>
<a href="" className='heading-pix'>turkey</a>

<p className='w-50 font my-2'>

Tourism in Turkey is focused largely on a variety of historical sites, and on seaside resorts along its Aegean and Mediterranean Sea coasts. Turkey has also become a popular destination for culture, spa, and health care.

<br/><br/>
Climate :- Hot, dry summers and mild to cool, wet winters.

</p>

  
  
  
<br/>
<button className='btn2'>learn more</button>

</div>
  
  
  
  {/* ========================this is south data 3========================== */}
  


<img src={require("../images/South.jpg")} className="w-25"/>
<a href="" className='heading-pix'>turkey</a>

<p className='w-50 font my-2'>

Tourism in Turkey is focused largely on a variety of historical sites, and on seaside resorts along its Aegean and Mediterranean Sea coasts. Turkey has also become a popular destination for culture, spa, and health care.

<br/><br/>
Climate :- Hot, dry summers and mild to cool, wet winters.

</p>


<br/>
<button className='btn3 '>learn more</button>




















  
  </div>










  {/* =============================================this is for link =======================================*/}
  <div className='col-sm my-5'>

  <h5 className='linkhdng'>CHOOse the country</h5>
					<ul className='ul'>
						<div className="">
						<li >	<a href="#">Azerbaijan</a></li>
						<li><a href="#">Afganistan</a></li>
						<li><a href="#">Austria</a></li>
						<li><a href="#">Belgium</a></li>
						<li><a href="#">Belarus</a></li>
						<li><a href="#">Canada</a></li>
						<li><a href="#">Denmark</a></li>
		                <li><a href="#">Dubai</a></li>
						<li><a href="#">Egypt</a></li>
						<li><a href="#">Finland</a></li>
						<li><a href="#">France</a></li>
						<li><a href="#">Germany</a></li>
						<li><a href="#">Hungary</a></li>
						<li><a href="#">Hong Kong</a></li>
						<li><a href="#">Iceland</a></li>
						<li><a href="#">Italy</a></li>
						<li><a href="#">Netherland</a></li>
						<li><a href="#">Spain</a></li>
						<li><a href="#">Sweden</a></li>
						<li><a href="#">Switzerland</a></li>
						<li><a href="#">South Africa </a></li>
						</div>
					</ul>











        
  </div>
</div>

</div>







   
   
   </>



  )
}

export default Hot;