<template>
	<section id="education" class="resume-section p-3 p-lg-5 d-flex align-items-center">
		<div class="w-100">
			<h2 id="title-edu" v-if="language == 'en'" class="mb-5">Education</h2>
			<h2 id="title-edu" v-if="language == 'es'" class="mb-5">Educacion</h2>
			<div
				 class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5"
				 v-for="(education, index) in database.education"
				 :key="index">

				<div class="resume-content">
					<h3 class="mb-0">{{ education.school }}</h3>
					<div class="subheading mb-3">{{ education.course }}</div>
					<p v-if="language == 'en'">Average Score: {{ education.average }}</p>
					<p v-if="language == 'es'">Nota Media: {{ education.average }}</p>
				</div>
				<div class="resume-date text-md-right">
					<span class="text-primary" v-for="(date, index) in education.dates" :key="index">
						{{ date.start }} - {{ date.end }}
					</span>
				</div>

			</div>
		</div>
	</section>
</template>

<script>
	export default {

		name: "Education",
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