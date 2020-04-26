<template>
	<section id="experience" class="resume-section p-3 p-lg-5 d-flex align-items-center">
		<div class="w-100">
			<h2 id="expTitle" v-if="language == 'en'" class="mb-5">Experience</h2>
			<h2 id="expTitle" v-if="language == 'es'" class="mb-5">Experiencia</h2>
			<div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5"
				 v-for="(experience, index) in database.experience"
				 :key="index">

				<div class="resume-content">
					<h3 class="mb-0">{{ experience.position }}</h3>
					<p class="mb-0">{{ experience.summary }}</p>
				</div>
				<div class="resume-date text-md-right">
					<span class="text-primary" v-for="(date, index) in experience.dates" :key="index">
						{{ date.start }} - {{ date.end }}
					</span>
				</div>

			</div>
		</div>
	</section>
</template>

<script>
	export default {
		name: "Experience",
		props: {
			database: Object,
			language: String
		},
		data() {
			return {
			}
		}
	};
</script>