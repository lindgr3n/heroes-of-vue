---
description: wohoo
---

# Tutorial

Inspired by Angular [Tour of Heroes](https://angular.io/tutorial#tutorial-tour-of-heroes) i thought i would make my own twist on it and in the same time honor some of the people behind Vue! So here is the story of the heroes of Vue!

In this first part we will build the application using just one file! Crazy you would say. No node_modules black hole :O Just bare with me :)

Full application exist here [demo](https://heroes-of-vue.netlify.com). Checkout the repo [here](https://github.com/lindgr3n)

What we will be learning

* Using Vue using just one html file
* Creating components
* Computed properties
* Set up routing using Vue-router
* Directives
* Filters to transform data
* Basic api to fetch data
* Two-way data binding
* Formdata

Final application
TODO: add screenshoot

We will have a dashboard
TODO: Add screenshot

Detail view
TODO: Add screenshot

List view of heroes
TODO: Add screenshot

## Setup

Lets start with creating a single html file. Then we go npm you say? Nope, no need! as i said lets just use one file :)

```bash
mkdir heroes-of-vue
touch heroes-of-vue/index.html
```

Next we create a standard html template and we include Vue using a CDN link. [getting started](https://vuejs.org/v2/guide/#Getting-Started)

The Vue guide is excellent to explain how things work. Looking at [part1](https://heroes-of-vue.netlify.com/part1.html) and launch it in a browser we will see "Hello heroes!"

## First component

When talking about frontend today you will have a hard time not read about components. Components is the frontends lego bricks to build applications. So how do we create a component in Vue?

Take a quick look at [Component basics](https://vuejs.org/v2/guide/components.html) to get a basic understanding about it. Then follow along here!

Lets make a hero editor component to display information about our heroes!

```js
const HeroDetail = Vue.component('vue-hero-detail', {
        data() {
          return {
            hero: {
                id: 1,
                name: 'Evan You'
            }
          }
        },
        template: `
                  <div v-if="hero.id">
                    <h2>{{hero.name}} Details</h2>
                    <div><span>id: </span>{{hero.id}}</div>
                  </div>`
      });
```

Here we register our component using `Vue.component` with the tag name `vue-hero-detail` so we later can use it in our application. Then we have
[`Data`](https://vuejs.org/v2/guide/instance.html#Data-and-Methods) is where we declare properties used in the component. This properties become reactive. So if a properties changes it will trigger a re-render.
[template](https://vuejs.org/v2/guide/syntax.html) is where we declare how the component should look.

Important to remember that global registration of components need to be done before the Vue instance is made.

Look at [part2](https://heroes-of-vue.netlify.com/part2.html) to see it in action.

### Filters

Would it not look better to show the hero name in uppercase? Could just do `{{hero.name.toUpperCase()}} or do the same in the data object. But then we get some logic in the template. Instead we can take use of Vues   [Filter system](https://vuejs.org/v2/guide/filters.html). 

Here we can define a filter on our component.

```js
filters: {
    uppercase: function(value) {
        return value.toUpperCase()
    }
},
```

Then we can update our template to use

```html
<h2>{{hero.name | uppercase}} Details</h2>
```

Look at [part3](https://heroes-of-vue.netlify.com/part3.html) to see it in action.

Here we can chain multiple filter together `{{ message | filterA | filterB }}` if we like.

We also have the ability to register a global filter so we don't need to set it up on the component.
```
Vue.filter('uppercase', function (value) {
  if (!value) return ''
  return value.toUpperCase()
})
```

## Set up style

## Some more info

## This is great

