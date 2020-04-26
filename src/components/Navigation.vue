<template>
	<b-navbar toggleable="lg" type="dark" class="bg-primary fixed-top" id="sideNav">
		<b-navbar-brand to="#app">
			<span class="d-block d-lg-none">{{ name.first }} {{ name.last }}</span>
			<span class="d-lg-none d-lg-block">
				<img class="img-fluid img-profile rounded-circle mx-auto mb-2" 
					 src="../assets/img/pfp.png" alt="name.first + ' ' + name.last" />
			</span>
		</b-navbar-brand>
		<b-navbar-toggle target="navbarSupportedContent"></b-navbar-toggle>
		<b-collapse id="navbarSupportedContent" is-nav>
			<b-navbar-nav v-b-scrollspy>
				<b-nav-item v-for="(navigation, index) in database.navigation"
							:key="index" class="js-scroll-trigger" :href="navigation.url">

					{{ navigation.title }}

				</b-nav-item>
			</b-navbar-nav>
		</b-collapse>
	</b-navbar>
</template>

<script>
	export default {
		name: "Navigation",
		props: {
			name: {
				type: Object
			},
			database: {
				type: Object
			},
			language: {
				type: String
			}
		},
		data() {
			return {
			}
		}
	}

</script>