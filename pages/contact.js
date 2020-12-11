
import NavComp from './header'
import Head from 'next/head';


export default () =>
(
    <div id = "aboutContent">

    <Head>
	      <title>Contact</title>

	     
	    </Head>

		
		
		<style jsx> 
		{`
			p {
				
			}
			div {
				background: black;
			}
			@media (max-width: 600px)
			{
				div 
				{
					background: black;
				}
			}
		

		`} 
		</style>

		<style global jsx>
		{`
			body 
			{
				background: black;
			}
			a{
				color : white;
				text-decoration:none;
				font-size:20px;
				padding-left:10px;
				padding-right:10px;
			}
			#navbar
			{
				text-align:center;
				background-color:black;
				padding:20px;
				color:white;
				
			}
			h1
			{
				color:#00e3d8;
			}
			p{
				color:#00e3d8;
				font-size:70px;
				padding:30px;
				margin:20px 0px 0px 0px;
			}
			#intro
			{
				font-size:45px;
				margin-left: 120px;
				color:white;
			}
			#content
			{
				width:70%;
				margin-left:120px;
			}
			#contactSection
			{
				
				text-align:center;
			}
			#hrtop
			{
				width:80%;
			}
			#hrbtm
			{
				width:65%;
			}
			.conLinks
			{
				font-size:30px;
			}
			#lastPara
			{
				padding-bottom:10%;
			}
			

		`} 
		</style>
		
		 <NavComp/>

		 <div id = "contactSection">
			

		 	<p>
		 		Reach out 
		 	</p>

			<p id = "lastPara">

				<a className = "conLinks" href="mailto:furqaan.ismail10@gmail.com" target="_blank"> furqaan.ismail10@gmail.com </a>
				<br/>
				<a className = "conLinks" href="https://www.linkedin.com/in/furqaan-ismail-0836661b5/" target="_blank">linkedin/furqaan-ismail </a>				
			</p>



		</div>

		<hr id = "hrbtm"/>
			<hr id = "hrtop"/>

	</div>
)

/*<img src= "./static/madara.jpg" alt= "my image" />*/