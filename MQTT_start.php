<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="shortcut icon" type="image/jpg" href="img/bender_smooke.jpg" />
    <link rel="stylesheet" href="styles/style1.css" />
    <script defer src="scripts/script2.js"></script>
	<script defer src="scripts/registration2.js"></script>
<!--     <script defer src="scripts/script.js"></script> -->
    <title>Recieve Data</title>
</head>

<body>

	<div class="msg_wrap welcome_wrap">
		<div class="welcome">
			<div class="sub_block">
    			<input class="form_button reg_button"type="submit" value="Registration"/>
    			<input class="form_button aut_button"type="submit" value="Authorisation"/>
			</div>
			
		</div>
		<form class="unvisible" action="#" method="POST">
			<p>Login</p>
    		<div class="input_wraper">
        		<input name="name"type="text"/>
        		<p class="input_name">*</p>
    		</div>
    		<p>Email</p>
    		<div>
    			<input name="email"type="email"/>
    		</div>
    		<p>Password</p>
    		<div class="input_wraper">
    			<input name="password"type="password"/>
    			<p class="input_password">*</p>
    		</div>
    		<p>Repeat Password</p>
    		<div class="input_wraper">
    			<input name="r_password"type="password"/>
    			<p class="input_r_password">*</p>
    		</div>
    		<a class="reg_back"href="#">Back</a>
    		<input class="form_button" name="button"type="submit" value="Confirm"/>
		</form>
		<form class="unvisible" action="#" method="POST">
			<p> </p><p> </p>
			<p>Login</p>
        	<input name="name"type="text"/>
			<p>Password</p>
    		<input name="password"type="password"/>
    		<p> </p><p> </p>
    		<a class="aut_back"href="#">Back</a>
    		<input class="form_button" name="button"type="submit" value="Confirm"/>
		</form>
		
		<form class="unvisible" action="#" method="POST">
			<p> </p><p> </p>
			<p>Check public or private</p>
			<div class="check_wrap">
				<label for="check_publick">public</label>
				<input id="check_publick" name="check_input" type="radio" value="public" checked="checked"/>
				<label for="check_private">private</label>
				<input id="check_private" name="check_input" type="radio" value="private"/>
			</div>
			<p>Min</p>
        	<input name="min"type="number"value="-50"/>
			<p>Max</p>
    		<input name="max"type="number"value="50"/>
    		<p>Units</p>
    		<input name="units"type="text"value="T/m"/>
    		<a class="aut_back"href="#">Back</a>
    		<input class="form_button" name="button"type="submit" value="Confirm"/>
		</form>
		
<!-- 		<script src="scripts/registration.js"></script> -->
		<div class="msg_wrap_message unvisible">
    		<p class="msg">Message</p>
    		<input class="msg_button form_button" name="button"type="submit" value="OK"/>
		</div>
		
		<div class="security_msg unvisible">
			<label for="code">This Table is Private! Enter security code</label>
			<input id="code" type="password"/>
			<input class="msg_button_code form_button" name="button"type="submit" value="OK"/>
		</div>
	</div>
	
	
	<header>
		<div class="header">
			<div class="header_top">
    			<div class="header_top_logo">SRSDS</div>
        		<div class="header_top_info">
        			<div class="header_top_info_eblock data">
        				<a href="#">Data</a>
        			</div>
        			<div class="header_top_info_eblock live">
        				<a class="live_href" href="#">Live</a>
        			</div>
        			<div class="header_top_info_eblock publish">
        				<a href="#">Publish</a>
        			</div>
        			<div class="header_top_info_nblock">
        				<p class="header_top_info_name">Name</p>
        			</div>
        			<div class="header_top_info_eblock">
        				<a href="#">Exit</a>
        			</div>
        		</div>
			</div>
			<div class="header_banner">
				<div class="header_sub_banner">
					<p>Simple Receive Send Data Site</p>
				</div>
    			
    		</div>
		</div>
	</header>
	
	<main>
		<div class="main">
		
    		<div class="main_pub">
    			<div class="main_header">
    				<p>publishers</p>
    			</div>
    			
    			<div class="main_header">
    				<p>public</p>
    			</div>
    			
    			<div class="pub_container_public"></div>
    			
    			<div class="main_header">
    				<p>private</p>
    			</div>
    			
    			<div class="pub_container_private"></div>
    		
    		</div>
    		
    		<div class="graph">
    			<canvas id="mycanvas"></canvas>
    		</div>
    		
<!--     		<div class="main_sub"> -->
<!--     			<div class="main_header"> -->
<!--     				<p>subscriptions</p> -->
<!--     			</div> -->
<!--     		</div> -->
		
		</div>
		
	</main>
	
	<footer>
		<div class="footer">
			<p>C 2024</p>
		</div>
	</footer>

</body>


</html >

    
