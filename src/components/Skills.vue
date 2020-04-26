<template>
	<section id="skills" class="resume.section p-3 p-lg-5 d-flex align-items-center">
		<div class="w-100">
			<h2 id="skillTitle" v-if="language == 'en'" class="mb-5">Skills</h2>
			<h2 id="skillTitle" v-if="language == 'es'" class="mb-5">Habilidades</h2>
			<div id="skillSubTitle" v-if="language == 'en'" class="subheading mb-3">Programming Languages &#38; Tools</div>
			<div id="skillSubTitle" v-if="language == 'es'" class="subheading mb-3">Lenguajes de Programacion &#38; Herramientas</div>
			<ul class="list-inline dev-icons">
				<li class="list-inline-item" v-for="(tool, index) in database.tools" :key="index">
					<font-awesome-icon :icon="['fab', tool.icon]"></font-awesome-icon>
				</li>
			</ul>
		</div>
	</section>
</template>

<script>
	export default {
		name: "Skills",
		props: {
			database: Object,
			language: String
		}
	}
</script>