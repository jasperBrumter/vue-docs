<template>
  <div
    @click="toggleShow"
    class="course-card"
  >
    <span
      v-if="courseIsFavorited"
      class="material-icons course-favorite"
    >
      favorite
    </span>
    <div class="img-div">
      <img
        v-if="hasImage"
        :src="`/img/courses/${course.image}`"
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
      <div class="title">
        <h2>{{ course.title }}</h2>
        <span v-if="course.vue2 === true" class="tag">Vue2</span>
        <span v-if="course.vue3 === true" class="tag">Vue3</span>
      </div>
      <span>{{ course.resources.length }} videos</span>
      <br>
      <span>Difficulty: {{ course.difficulty }}</span>
      <ul>
        <li
          v-for="(link, index) in course.externalLinks"
          :key="index"
        >
          <a
            :href="link"
            target="_blank"
            style="text-decoration: none; color: black;"
          >
            {{ link }}
          </a>
        </li>
      </ul>
    </div>
  </div>
  <transition
    v-on:before-enter="beforeEnter"
    v-on:enter="enter"
    v-on:leave="leave"
    :css="false"
  >
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
          <span
            @click="toggleFavoriteResource(resource)"
            class="material-icons"
            :class="{
              'favorited': favorites.includes(resource.id) === true,
              'inactive': favorites.includes(resource.id) === false
            }"
          >
            {{ favorites.includes(resource.id) ? 'favorite' : 'favorite_border' }}
          </span>
          &nbsp;{{ index + 1 }}.&nbsp;
          <a :href="resource.url" target="_blank">{{ resource.title }}</a>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Velocity from 'velocity-animate';
import { Class, Resource } from '../../config/types';
/* eslint-disable */
export default defineComponent({
  name: 'CourseCard',
  props: {
    course: {
      type: Object as PropType<Class>,
      required: true,
    },
  },
  data() {
    return {
      isVisible: false as boolean,
      favorites: JSON.parse(''+localStorage.getItem('vue-docs-favs')) || [],
    };
  },
  computed: {
    hasImage(): boolean {
      return this.course.image !== undefined && this.course.image !== '';
    },
    altText(): string {
      return `${this.course.title}-course-image`;
    },
    courseIsFavorited(): boolean {
      return this.course.resources.some((resource: Resource) => {
        return this.favorites.includes(resource.id);
      })
    },
  },
  methods: {
    beforeEnter (el: any) {
      el.style.opacity = 0;
      el.style.transformOrigin = 'left';
      el.style.fontSize = '0';
    },
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
    isFavoriteResource(resource: Resource): boolean {
      const favorites: string[] = JSON.parse(''+localStorage.getItem('vue-docs-favs')) || [];
      return favorites.includes(resource.id);
    },
    toggleFavoriteResource(resource: Resource): void {
      const favorites: string[] = JSON.parse(''+localStorage.getItem('vue-docs-favs'))  || [];
      const indexOf = favorites.indexOf(resource.id);
      if (indexOf === -1) {
        favorites.push(resource.id)
        this.favorites.push(resource.id)
      } else {
        favorites.splice(indexOf, 1)
        this.favorites.splice(indexOf, 1)
      }
      localStorage.setItem('vue-docs-favs', JSON.stringify(favorites));
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
  z-index: 8;
  position: relative;

  &:hover {
    background-color: rgba(240, 240, 240, 1 );
  }
}

.course-favorite {
  position: absolute;
  top: 10px;
  right: 10px;
  color: red;
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
  z-index: 4 !important;
  color: black;
  text-align: left;
  margin-left: 5rem;
  column-count: 3;
  column-fill: auto;

  .lecture {
    display: flex;
    align-items: flex-end;
    break-inside: avoid;
    font-size: 18px;

    .pre-lecture {
      height: 50px;
      padding-top: 0.5rem;
      border-left: 1px solid rgba(220, 220, 220, .8);
      border-bottom: 1px solid rgba(220, 220, 220, .8);
      padding-left: 1rem;
      padding-bottom: 0.4rem;
      display: flex;
      align-items: flex-end;

      a {
        text-decoration: none;
        color: black;
      }

      .inactive {
        cursor: pointer;
        opacity: 0.3;
      }
      .favorited {
        cursor: pointer;
        color: red;
      }
    }
  }
}

@media only screen and (max-width: 1080px) {
  .lectures {
    column-count: 2;
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
    column-count: 1;
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
