
import NavComp from './header'
import Head from 'next/head';


export default () =>
(
    <div id = "aboutContent">

    <Head>
	      <title>About</title>
	      <script async src="https://www.googletagmanager.com/gtag/js?id=G-LPML0HENW2"></script>
			<script>
			  var dataLayer = window.dataLayer = window.dataLayer || [];
			  function gtag(){dataLayer.push(arguments)}
			  gtag('js', new Date());

			  gtag('config', 'G-LPML0HENW2');
			</script>
	    </Head>
		
		<style jsx> 
		{`
			p {
				color:#00e3d8;
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
			}
			#intro
			{
				font-size:45px;
				margin-left: 120px;
				color:white;
			}
			#content
			{
				width:40%;
				margin-left:120px;
				padding-bottom:15%;
				text-align: justify;
			}
			#hrtop
			{
				width:80%;
			}
			#hrbtm
			{
				width:65%;
			}
			

		`} 
		</style>
		
		 <NavComp/>

		 <div>
			<p id = "intro"> 
				Hi I'm Furqaan <br/>
				I'm a fullstack web developer
			</p>

			<div id = "content">		
				<p>
					I started my career as a Salesforce CRM developer working on both frontend and backend projects using apex and the Aura framework.
					I later found myself being drawn toward frontend development and decided to let my passion for art and my creative side take over to persue a career as a fullstack web developer.
					<br/><br/><br/>
					In my spare time you'll find me video editing , making music , sketching and gaming. I am also an ardent Liverpool supporter !
				</p>

			</div>
		</div>
		<hr id = "hrbtm"/>
			<hr id = "hrtop"/>

	</div>
)

/*<img src= "./static/madara.jpg" alt= "my image" />*/