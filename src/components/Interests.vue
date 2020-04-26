<template>
	<section id="interests" class="resume-section p-3 p-lg-5 d-flex align-items-center">
		<div class="w-100">
			<h2 v-if="language == 'en'" class="mb-5">Interests</h2>
			<h2 v-if="language == 'es'" class="mb-5">Intereses</h2>
			<p v-if="language == 'en'">Apart from being a web developer, I enjoy most of my time drawing digitally or on paper. I also enjoy practicing different sports such as biking, soccer or taking long walks outdoors.</p>
			<p v-if="language == 'es'">Ademas de ser un desarrollador web, disfruto la mayor parte de mi tiempo dibujando de forma digital o a papel. Tambien practico distintos deportes como el ciclismo, futbol, o caminando largos paseos en los alrededores.</p>
			<p class="mb-0" v-if="language == 'en'">
				Indoors I enjoy playing videogames, or watching sci-fi or fantasy genre movies.
			</p>
			<p class="mb-0" v-if="language == 'es'">
				En casa paso el tiempo jugando videojuegos, o viendo peliculas del genero sci-fi o fantasia.
			</p>
		</div>
	</section>
</template>

<script>
	export default {
		name: "Interests",
		props: {
			language: String,
		}
	};
</script>