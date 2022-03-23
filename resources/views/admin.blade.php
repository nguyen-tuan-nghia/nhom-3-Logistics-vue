<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <script >window.laravel={csrfToken:'{{ csrf_token() }}'}</script>
    <title>Logistics</title>
    <!-- user.css-->
    <!-- Custom fonts for this template-->
    <link href="{{asset('admin/vendor/fontawesome-free/css/all.min.css')}}" rel="stylesheet" type="text/css">
    <link href="{{ asset('admin/css/sb-admin-2.min.css')}}" rel="stylesheet">

    <!-- admin css-->
    	<!-- css files -->
    <link href="{{ asset('public/css/bootstrap.css')}}" rel='stylesheet' type='text/css' /><!-- bootstrap css -->
    <link href="{{ asset('public/css/style.css')}}" rel='stylesheet' type='text/css' /><!-- custom css -->
    <link href="{{ asset('public/css/font-awesome.min.css')}}" rel="stylesheet"><!-- fontawesome css -->
	<!-- //css files -->

	<!-- google fonts -->
	{{-- <link href="//fonts.googleapis.com/css?family=Catamaran:100,200,300,400,500,600,700,800,900" rel="stylesheet">
	<link href="//fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800" rel="stylesheet"> --}}
	<!-- //google fonts -->

</head>

<body id="page-top">
    <div id="app">
        <main-main></main-main>
    </div>
    <script src="{{asset('js/app.js')}}"></script>
    <!-- Page Wrapper -->
    <!-- Bootstrap core JavaScript-->
    <script src="{{asset('admin/vendor/jquery/jquery.min.js')}}"></script>
    <script src="{{asset('admin/vendor/bootstrap/js/bootstrap.bundle.min.js')}}"></script>

    <!-- Core plugin JavaScript-->
    <script src="{{asset('admin/vendor/jquery-easing/jquery.easing.min.js')}}"></script>

    <!-- Custom scripts for all pages-->
    <script src="{{ asset('admin/js/sb-admin-2.min.js')}}"></script>
</body>

</html>
