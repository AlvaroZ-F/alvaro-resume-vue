<template>
    <div id="app">
        <div class="language-sect">
            <button v-if="language == 'en'" 
                    id="buttonLang" class="btn btn-primary" 
                    v-on:click="changeLanguage">Change Language</button>

            <button v-if="language == 'es'" 
                    id="buttonLang" class="btn btn-primary" 
                    v-on:click="changeLanguage">Cambiar Idioma</button>
        </div>        
        <Navigation :name="name" :database="database" />
        <b-container class="p-0" fluid>
            <About :name="name" :database="database" :language="language"></About>
            <Border />
            <Education :database="database" :language="language" />
            <Border />
            <Experience :database="database" :language="language" />
            <Border />
            <Skills :database="database" :language="language" />
            <Border />
            <Interests :database="database" :language="language" />
            <Border />
            <Projects :database="database" :language="language" />
        </b-container>
    </div>
</template>

<script>
    import smoothScroll from 'smooth-scroll';
    import axios from 'axios';

    import About from "@/components/About";
    import Education from "@/components/Education";
    import Experience from "@/components/Experience";
    import Skills from "@/components/Skills";
    import Interests from "@/components/Interests";
    import Navigation from "@/components/Navigation";
    import Projects from "@/components/Projects";
    import Border from "@/components/Border";

    export default {
        name: "app",
        data() {
            return {
                name: {
                    first: "Alvaro",
                    last: "Zambrana Fernandez"
                },
                language: "en",
                database: {},
                fullJson: {}
            }
        },
        components: {
            About,
            Education,
            Skills,
            Experience,
            Interests,
            Navigation,
            Projects,
            Border
        },
        created: function () {
            var scroll = new smoothScroll('a[href*="#"', {
                updateURL: false
            });
        },
        methods: {
            changeLanguage() {
                if (this.language == "en") {
                    this.language = "es";
                    console.log("Se ha cambiado el idioma a espanol");
                    this.database = this.fullJson.es;
                } else if (this.language == "es") {
                    this.language = "en";
                    console.log("Language has been changed to English");
                    this.database = this.fullJson.en;
				}
			}
        },
        mounted() {
            axios.get("data.json").then(response => {
                this.fullJson = response.data;
                console.log(response.data);
                if (this.language == "en") {
                    this.database = response.data.en;
                    console.log("Applied");
                } else if (this.language == "es") {
                    this.database = response.data.es;
                    console.log("Aplicado");
				}
            });
		}
    };
</script>

<style>
    
    .language-sect {
        text-align: right;
        margin: 1rem;
    }

    #buttonLang {
        font-weight: bold;
    }

</style>