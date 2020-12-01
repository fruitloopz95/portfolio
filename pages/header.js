import Link from 'next/Link'

export default () => 
(
	<div id = "navbar">
		<Link href= "/"><a> HOME </a></Link>
		
		<Link href= "/about"><a> ABOUT </a></Link>
		
		<Link href= "/projects"><a> PROJECTS </a></Link>
		
		<Link href= "/contact"><a> CONTACT </a></Link>

		<hr id = "hrtop"/>
		<hr id = "hrbtm"/>

	</div>
)

/*<br/>*/	