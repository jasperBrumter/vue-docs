<template>
  <div class="container">
      <div class="header fixed">
        <h1>Jasper's Vue Docs</h1>
      </div>
      <div class="content">
        <course-card
            v-for="course in courses"
            :key="course.title"
            :course="course"
        />
      </div>
  </div>
  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Class, data } from '../config/types';
import CourseCard from './components/CourseCard.vue';

export default defineComponent({
  name: 'App',
  components: {
    CourseCard,
  },
  data() {
    return {
      courses: data as Class[],
    };
  },
});
</script>

<style lang="scss">
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-family: 'Montserrat', sans-serif;
}
.container {
  width: 80rem;
  max-width: 100%;
  padding: 20px 0 20px 0;
  margin: 0 auto;
  position: relative;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  width: 76rem;
  max-width: 100%;
  padding: 0 2rem 0 2rem;
  border-bottom: 2px solid black;
  height: 100px;
  flex-wrap: wrap;
  position: fixed;
  top: 0px;

}
.content {
  padding: 20px 2rem 0 2rem;
  margin-top: 100px;
}
</style>
