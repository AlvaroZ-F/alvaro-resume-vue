<template>
	<section id="about" class="resume-section p-3 p-lg-5 d-flex align-items-center">
		<div class="w-100">
			<h1 class="mb-0">
				{{ name.first }}
				<span class="text-primary">{{ name.last }}</span>
			</h1>
			<div class="subheading mb-5">
				{{ address.street }} &middot; {{ address.town }}, {{ address.state }} {{ address.zip }} &middot; {{ telephone }} &middot;
				<a :href="'mailto:' + email">{{ email }}</a>
 			</div>
			<p class="lead mb-5">
				{{ database.about }}
			</p>
			<div class="social-icons">
				<a :href="social.url" v-for="(social, index) in database.social" :key="index">
					<font-awesome-icon :icon="['fab', social.icon]"></font-awesome-icon>
				</a>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		name: "About",
		props: {
			name: Object,
			database: Object
		},
		data() {
			return {
				address: {
					street: "Sofocles, n1, esc 5, 4B",
					town: "Granada",
					city: "Granada",
					cod: "18014",
				},
				telephone: "(34) 635 96 81 54",
				email: "azambranafdz.daw@gmail.com"
			}
		}
	};

</script>