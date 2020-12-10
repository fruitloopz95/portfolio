
import NavComp from './header'
import Head from 'next/head';

export default () =>
(
    <div id = "aboutContent">
		
		<Head>
	      <title>My Projects</title>
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
				width:70%;
				margin-left:120px;
			}
			#projSection
			{
				margin-top : 50px;
				text-align:center;
				padding-bottom:30px;
				color:white;
			}
			.column
			{
				float: left;
 				width: 50%;
 				height:400px;
 				
			}
			.row:after {
			  content: "";
			  display: flex;
			  clear: both;
			}
			#projectSnap
			{
				padding:10%;
				height:60%;
				width:65%;
				min-width:250px;
				min-height:200px;
				display:inline-block;
			}
			.projDesc
			{
				text-align: justify;
  				text-align-last: center;
				padding:10%;

			}
			.langImg{
			    display:inline-block;
			    margin:5px 20px;
			    padding:5px;
			    height : 55px;
			    width: 55px;
			    border:1px solid #CCC;
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

		 <div id = "projSection">
			
			<div className = "row">

				<div className="column">
					<img id = "projectSnap" src= "./static/itunes.PNG" alt= "my image" />
				</div>
  				<div className="column">
  					<div className = "projDesc">
  						<h2>iTunes App</h2>
  						<p>
	  						Making use of the iTunes API ,this app lets you search your favourite music , audiobooks , 
	  						podcasts and even movies and lets you add them to your personal favourites playlist. See the app hosted on Heroku's cloud platform.
	  						<br/><br/>
	  						<a href = "https://furqaan-itunes.herokuapp.com/" target="_blank">See Itunes App</a>
  						</p>

  						<div className = "langContainer">
							<img id = "im" src="./static/react-icon.png" alt="java" className="langImg rounded-circle" />
							<img id = "im" src="./static/express.png" alt="java" className="langImg rounded-circle" />
							<img id = "im" src="./static/css.JPG" alt="java" className="langImg rounded-circle" />
							
						</div>

  					</div>
  				</div>

			</div>

			<div className = "row">

				<div className="column">
					<div className = "projDesc">
  						<h2>Hangman game</h2>
  						<p>
	  						An oldschool favourite brought back using the power react. See the app hosted on Heroku's cloud platform.
	  						<br/><br/>
	  						<a href = "https://fast-sands-00411.herokuapp.com/" target="_blank"> Play the game!</a>
  						</p>
  						<div className = "langContainer">
							<img id = "im" src="./static/react-icon.png" alt="java" className="langImg rounded-circle" />
							<img id = "im" src="./static/express.png" alt="java" className="langImg rounded-circle" />
							<img id = "im" src="./static/css.JPG" alt="java" className="langImg rounded-circle" />
						</div>

  					</div>
				</div>
  				<div className="column">
  					<img id = "projectSnap" src= "./static/hangman.PNG" alt= "my image" />
  				</div>

			</div>

			<div className = "row">

				<div className="column">
					<img id = "projectSnap" src= "./static/onlineStore.jpg" alt= "my image" />
				</div>
  				<div className="column">
  					<div className = "projDesc">
  						<h2>Online store</h2>
  						<p>
	  						An online store that makes use of Session Storage and jquery functions.
	  						<br/><br/>
	  						<a href = "https://github.com/fruitloopz95/OnlineStore" target="_blank"> Check it out on my Github</a>
  						</p>

  						<div className = "langContainer">
							<img id = "im" src="./static/html.JPG" alt="java" className="langImg rounded-circle" />
							<img id = "im" src="./static/css.JPG" alt="java" className="langImg rounded-circle" />
							<img id = "im" src="./static/javascript.JPG" alt="java" className="langImg rounded-circle" />
							<img id = "im" src="./static/jq.PNG" alt="java" className="langImg rounded-circle" />
						</div>

  					</div>
  				</div>

			</div>
			
			<hr id = "hrbtm"/>
			<hr id = "hrtop"/>
  			
		</div>

	</div>
)

/*<img src= "./static/madara.jpg" alt= "my image" />*/