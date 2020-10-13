---
description: Basics using Vue and building application
---

# Using Vue-cli

In this part we will make use of Vue-cli to build the application we did in part one. I think this will show the power when using the cli tool and single file components (SFC).

## Chapter 1 - It begins

First we need to have vue-cli installed. Following the [installation guide](https://cli.vuejs.org/guide/installation.html)

```bash
npm install -g @vue/cli
# OR
yarn global add @vue/cli
```

We can now create a new project by

```bash
vue create my-example-project
```

This will ask some questions about how your project will be created. More information about the questions is found [here](https://cli.vuejs.org/guide/creating-a-project.html#vue-create). We will create our project with a few features that is a bit of overkill. But the end goal of this project will use `unit testing`, `vuex` and `vue-router`.
Using it to give a bit of the different approaches you can go using a Vue project.

## Chapter 2 - Components

So we remember in previous [component tutorial](http://localhost:8080/tutorial/#chapter-two-components) we used `Vue.component`. Now with a project we can make use of something called [Single File Components](https://vuejs.org/v2/guide/single-file-components.html) or SFC in short. To test this out we can create a new file inside our components folder. If you remember the first component we did was the `HeroDetail` so lets create it first here also.

Wait a minute! That was a lot of information! Where is the components folder and how is it connected? Lets go back a few steps :)

## Chapter 3 - Project setup

When we created our boilerplate project using vue-cli some folders are created for us. Will not go into to detailed information.

The base of the application is the `src/main.js` folder. Here our Vue application is created by importing the `src/App.vue` and rendering in. Here we also inject the different modules we want to use. `vue-router` and `vuex`.

Then inside our App is where we import the different building blocks we want to use. Mainly imported from `components`. Default we can find a import from HelloWorld. We also have some references to vue-router that we ignore initial. We will be coming back to the shortly.

```html
<!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
</div>
<router-view /> -->
```

So lets go back.

## Chapter 4 - Components round two

If you remember we created our `HeroDetail` component. That component is created inside the `components` folder. The we can import it where we want to use it by `import HeroDetail from "@/components/HeroDetail.vue"`
The `@` is a alias for the src folder and is build into the vue webpack configuration.

If you want to know what the default configuration is you can use the `vue inspect > output.js` command to get a file with all the configuration.

After you have imported the component you will need to register the component using the `components` attribute. This is so the template will know what the custom element names is connected to.

```js
components: {
    HeroDetail
}
```

Is a shorthand for 

```
components: {
    'hero-detail': HeroDetail
}
```

So our `App.vue` will look like

```vue
<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view /> -->
    <hero-detail />
  </div>
</template>

<script>
import HeroDetail from "@/components/HeroDetail";
export default {
  components: {
    HeroDetail
  }
};
</script>
```
