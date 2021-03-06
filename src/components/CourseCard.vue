<template>
  <div
    @click="toggleShow"
    class="course-card"
  >
    <div class="img-div">
      <img
        v-if="hasImage"
        :src="course.image || '../../public/img/vue-logo.png'"
        class="course-card__img"
        :alt="altText"
      />
      <img
        v-else
        src="../../public/img/vue-logo.png"
        class="course-card__img"
        :alt="altText"
      />
    </div>
    <div class="text-div">
      <div class="title"><h2>{{ course.title }}</h2><span class="tag">Vue2</span></div>
      <span>{{ course.resources.length }} videos</span>
      <br>
      <span>Difficulty: </span>
    </div>
  </div>
  <transition
    v-on:before-enter="beforeEnter"
    v-on:enter="enter"
    v-on:leave="leave"
    v-bind:css="false">
    <div
      v-if="isVisible"
      class="lectures"
    >
      <div
        class="lecture"
        v-for="(resource, index) in course.resources"
        :key="index"
      >
        <div class="pre-lecture">
          <a :href="resource.url" target="_blank">{{ resource.title }}</a>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Class } from '../../config/types';
/* eslint-disable */
export default defineComponent({
  name: 'CourseCard',
  props: {
    course: {
      type: Object, //eslint-disable-line
      required: true,
    },
  },
  data() {
    return {
      isVisible: false as boolean,
    };
  },
  computed: {
    hasImage(): boolean {
      return this.course.image !== undefined && this.course.image !== '';
    },
    altText(): string {
      return `${this.course.title}-course-image`;
    },
  },
  /* eslint-disable */
  methods: {
    beforeEnter (el: any) {
      el.style.opacity = 0;
      el.style.transformOrigin = 'left';
    },
    /* eslint-disable */
    enter(el: any, done: any) {
      Velocity(el, { opacity: 1, fontSize: '1.4em' }, { duration: 300 });
      Velocity(el, { fontSize: '1em' }, { complete: done });
    },
    leave(el: any, done: any) {
      Velocity(el, { opacity: 0, fontSize: '0' }, { duration: 300, complete: done });
    },
    // eslint-enable
    toggleShow(): void {
      this.isVisible = !this.isVisible;
    },
    handleShow(): void {
      this.isVisible = true;
    },
    handleHide(): void {
      this.isVisible = false;
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.course-card {
  max-width: 100%;
  border: 1px solid rgba(210, 210, 210, 0.8);
  border-radius: 4px;
  padding: 1rem 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
  margin-top: 2rem;
  cursor: pointer;
  background-color: white;
  z-index: 30;

  &:hover {
    background-color: rgba(240, 240, 240, 1 );
  }
}

.img-div {
  flex: 1 1 100%;
  text-align: center;

  .course-card__img {
    width: 200px;
    margin: 0 auto;
  }
}

.text-div {
  padding-left: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  min-width: 75%;
  min-height: 222px;
}

.title {
  display: flex;
  align-items: center;

  .tag {
    background-color: rgba(220, 220, 220, .8);
    padding: .2rem .5rem;
    border: 1px solid rgba(220, 220, 220, .8);
    border-radius: 4px;
    margin-left: 1rem;
    font-size: 14px;
    height: 15px;
    font-weight: light;
  }
}
.lectures {
  z-index: 4;
  color: black;
  text-align: left;
  margin-left: 5rem;

  .lecture {
    display: flex;
    align-items: flex-end;

    .pre-lecture {
      height: 30px;
      padding-top: .5rem;
      border-left: 1px solid rgba(220, 220, 220, .8);
      border-bottom: 1px solid rgba(220, 220, 220, .8);
      padding-left: 2rem;
      display: flex;
      align-items: flex-end;

      a {
        text-decoration: none;
        color: black;
      }
    }
  }
}

@media only screen and (max-width: 900px) {
  .course-card {
    flex-wrap: wrap;
  }

  .lectures {
    z-index: 4;
    color: black;
    text-align: left;
    margin-left: 1rem;
  }

  .title {
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    flex-direction: row-reverse;
    flex-wrap: wrap;

    .tag {
      margin-left: 0;
    }
  }

  .text-div {
    width:100%;
    padding-left: 0px;

    h2 {
      width: 100%;
      text-align: center;
    }
  }
}
</style>
