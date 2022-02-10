<template>
    <!-- header -->
<header>
	<div class="container">
		<!-- nav -->
		<nav class="py-md-4 py-3 d-lg-flex">
			<div id="logo">
				<h1> <a href="index.html">Carting</a></h1>
			</div>
			<label for="drop" class="toggle"><span class="fa fa-bars"></span></label>
			<input type="checkbox" id="drop" />
			<ul class="menu mt-3 ml-auto">
				<li class="active"><router-link to="/">Home</router-link></li>
				<li class=""><router-link :to="{name:'aboutUs'}">About Us</router-link></li>
				<li class=""><router-link :to="{name:'services'}">Services</router-link></li>
				<li class="mr-2"><router-link :to="{name:'login'}">Login</router-link></li>
				<li class=""><span><span class="fa fa-phone"></span> +12 34 3456 7890</span></li>
			</ul>
		</nav>
		<!-- //nav -->
	</div>
</header>
<!-- //header -->
</template>
