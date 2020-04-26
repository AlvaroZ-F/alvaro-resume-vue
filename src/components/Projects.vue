<template>
	<section id="projects" class="resume.section p-3 p-lg-5 d-flex align-items-center">
		<div class="w-100">
			<h2 id="projectsTitle" v-if="language == 'en'" class="mb-5">Projects</h2>
			<h2 id="projectsTitle" v-if="language == 'es'" class="mb-5">Proyectos</h2>
			<div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5"
				 v-for="(project, index) in database.projects"
				 :key="index">

				<div class="resume-content">
					<h3 class="mb-0">{{ project.name }}</h3>
					<p class="mb-0">{{ project.description }}</p>
					<a :href="project.link" class="proy-links">
						<font-awesome-icon :icon="['fab', 'github']"></font-awesome-icon>
						<b v-if="language == 'en'">Repository</b><b v-if="language == 'es'">Repositorio</b>
					</a>
					<a :href="project.prodlink" class="proy-links">
						<font-awesome-icon :icon="['fab', 'github']"></font-awesome-icon>
						<b v-if="language == 'en'">Deployed</b><b v-if="language == 'es'">Lanzado</b>
					</a>

				</div>
				<div class="resume-modal text-md-right">
					<b-button v-b-modal="'modal-' + project.id" id="btnmodal" v-if="language == 'en'" class="btn">Show Preview</b-button>
					<b-button v-b-modal="'modal-' + project.id" id="btnmodal" v-if="language == 'es'" class="btn">Mostrar Avance</b-button>
				</div>

				<b-modal v-if="language == 'en'" :id="'modal-' + project.id" size="lg" title="preview" centered><img class="modal-img" v-bind:src="project.preview" /></b-modal>
				<b-modal v-if="language == 'es'" :id="'modal-' + project.id" size="lg" title="Avance" centered><img class="modal-img" v-bind:src="project.preview" /></b-modal>

			</div>
		</div>
	</section>
</template>

<script>
	export default {
		name: "Projects",
		props: {
			database: Object,
			language: String
		},
		data() {
			return {
			}
		}
	}

</script>

<style>
	#btnmodal {
		font-weight: bold;
		color: white;
		background-color: #b55524;
		margin-left: 2rem;
		width: 5rem;
	}

	.modal-img {
		width: 100%;
		height: 100%;
	}

	.proy-links {
		font-size: 1.3rem;
		margin-right: 3rem;
	}
</style>