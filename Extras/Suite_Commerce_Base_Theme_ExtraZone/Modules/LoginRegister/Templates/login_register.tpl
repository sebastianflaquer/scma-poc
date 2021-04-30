<!-- CMS HEADER LOGIN FULL -->
<div class="cms-area-login" data-cms-area="global_header_login_full" data-cms-area-filters="global"></div>
<!-- CMS HEADER LOGIN FULL END -->


<section class="login-register">

	<header class="login-register-header">
		{{#if showRegister}}
		<h1 class="login-register-title"> {{translate 'Log in | Register'}}</h1>
		{{else}}
		<h1 class="login-register-title"> {{translate 'Log in'}}</h1>
		{{/if}}
	</header>

	<div {{#if showRegister}} class="login-register-body" {{else}} class="login-register-body-colored" {{/if}}>

		{{#if showLogin}}
			<div class="login-register-wrapper-column-login">

				<!-- CMS -->
				<div class="cms-area-login" data-cms-area="global_register_wrapper_login_top" data-cms-area-filters="global"></div>
				<!-- CMS END -->

				<div class="login-register-wrapper-login" data-view="Login"></div>

				<!-- CMS -->
				<div class="cms-area-login" data-cms-area="global_register_wrapper_login_bottom" data-cms-area-filters="global"></div>
				<!-- CMS END -->

			</div>
		{{/if}}

		{{#if showRegisterOrGuest}}
			<div class="login-register-wrapper-column-register">

				<!-- CMS -->
				<div class="cms-area-login"  data-cms-area="global_register_register_wrapper_login_top" data-cms-area-filters="global"></div>
				<!-- CMS END -->

				<div class="login-register-wrapper-register">
					<h2 class="login-register-title-register">{{translate 'New customer'}}</h2>

					{{#if showCheckoutAsGuest}}
						<div class="login-register-wrapper-guest" data-view="CheckoutAsGuest"></div>
					{{/if}}

					{{#if showRegister}}
						<div class="{{#if showCheckoutAsGuest}}collapse{{/if}} " data-view="Register" id="register-view"></div>
					{{/if}}
				</div>

				<!-- CMS -->
				<div class="cms-area-login" data-cms-area="global_register_register_wrapper_login_bottom" data-cms-area-filters="global"></div>
				<!-- CMS END -->

			</div>
		{{/if}}

	</div>
</section>


<div class="row">
	<div class="col-md-12">
		<!-- CMS -->
		<div class="cms-area-login" data-cms-area="global_login_stm_e" data-cms-area-filters="global"></div>
		<!-- CMS END -->
	</div>


	<div class="col-md-8">
		<!-- CMS -->
		<div class="cms-area-login"  data-cms-area="global_login_stm_a" data-cms-area-filters="global"></div>
		<!-- CMS END -->
	</div>
	<div class="col-md-4">
		<!-- CMS -->
		<div class="cms-area-login" data-cms-area="global_login_stm_b" data-cms-area-filters="global"></div>
		<!-- CMS END -->
	</div>
</div>

<!-- CMS HEADER LOGIN bottom FULL -->
<div class="cms-area-login"  data-cms-area="global_header_login_full_bottom" data-cms-area-filters="global"></div>
<!-- CMS HEADER LOGIN FULL BOTTOM END -->



{{!----
Use the following context variables when customizing this template:

	showRegister (Boolean)
	showCheckoutAsGuest (Boolean)
	showLogin (Boolean)
	showRegisterOrGuest (Boolean)

----}}
