<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Coming Soon</title>
	<style>
		@import url(//fonts.googleapis.com/css?family=Ubuntu:300,400,700);

		h1 {
			font-weight: 300;
		}

		body {
			margin:0;
			font-family:'Ubuntu', sans-serif;
			text-align:center;
			color: #666;
		}

		.welcome {
			width: 320px;
			height: 200px;
			position: absolute;
			left: 50%;
			top: 50%;
			margin-left: -150px;
			margin-top: -100px;
		}

		a, a:visited {
			color: #07c;
			text-decoration:none;
		}

		a:hover {
			color: #666;
			text-decoration: underline;
		}

		h1 {
			font-size: 32px;
			margin: 16px 0 0 0;
		}
	</style>
    <link rel="stylesheet" href="{{ customElixir('css/all.css') }}">
</head>
<body>
	<div class="welcome">
		<h1>What is this?</h1>
		<p>
			<a href="https://playgamestory.com">PlayGameStory.com</a> is a web project that is designed to allow users
			to create, organize, manage, and play
			<a href="http://en.wikipedia.org/wiki/Storytelling_game" target="_blank">storytelling games</a>.
		</p>
		<p>
			You can follow development
			<a href="https://github.com/lytedev/gamestory">on github</a>.
		</p>
	</div>
</body>
</html>
