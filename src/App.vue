<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Experience from './components/Experience.vue'
import Education from './components/Education.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="min-h-screen bg-white">
    <Navbar />
    <main>
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </main>
    <Footer />
  </div>
</template>
