
import NavComp from './header'
import Head from 'next/head';

function App() {
  return (
    <div>

    <Head>
	      <title>Home</title>
	      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-1		-1"></script>
			<script>
			  window.dataLayer = window.dataLayer || [];
			  function gtag(){dataLayer.push(arguments);}
			  gtag('js', new Date());

			  gtag('config', 'UA-1		-1');
			</script>
	    </Head>

    	<style jsx> 
		{`
			
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
			p{
				color:#00e3d8;
				text-align:center;
				font-size:75px;
				padding-top:150px;
				background-color:black;
			}
			#hrtop
			{
				width:80%;
			}
			#hrbtm
			{
				width:65%;
			}
			div
			{
				background-color:black;
			}
			#lastPara
			{
				padding-bottom:10%;
			}
			
		`} 
		</style>

       <NavComp/>

       <div>
       	<p id = "lastPara">Welcome to my portfolio</p>
       </div>

       <hr id = "hrbtm"/>
			<hr id = "hrtop"/>

    </div>
  );
}
export default App;
