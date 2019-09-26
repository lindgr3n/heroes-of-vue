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
                  <div>
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

Would it not look better to show the hero name in uppercase? Could just do `hero.name.toUpperCase()` or do the same in the data object. But then we get some special logic in the template and no possibility to reuse the logic. Instead we can take use of Vues [Filter system](https://vuejs.org/v2/guide/filters.html).

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

Here we could chain if we like multiple filter together

```js
message | filterA | filterB
```

We also have the ability to register a global filter so we don't need to set it up on the component.

```js
Vue.filter('uppercase', function (value) {
  if (!value) return ''
  return value.toUpperCase()
})
```

## Edit

Just showing the data is a good start. But to show some data we also need a way to add and edit the data.
First thing that comes in mind is to place a input box and add a event listener on change and save the value for each value entered. This would work just fine. But Vue have a ace up its sleeve. [Two-way data binding!](https://vuejs.org/v2/guide/forms.html)

### Two-way data binding

What is two-way data binding? Its a way to "connect" a value with a input form. Here we use Vues v-model.
So lets introduce it in [part4](https://heroes-of-vue.netlify.com/part4.html) to give the ability to update our heroes name!

Lets add a input and hook on v-model

```html
<input v-model="hero.name" placeholder="name"/>
```

Now when we type in our textbox the `hero.name` will automatically update thanks to the v-model!

To know what the "magic" is behind `v-model` we can do the following

```html
<input
  v-bind:value="hero.name"
  v-on:input="hero.name = $event.target.value"
>
```

This is the same thing as v-model does in the background. So just for exercise lets add a second input without v-model

```html
<input v-model="hero.name" placeholder="name"/>
<input v-bind:value="hero.name" v-on:input="hero.name = $event.target.value" placeholder="name"/>
```

Now you can type in either of the input boxes and the name will update on all tree places! Amazing!

## More heroes

Vue have the super hero but Vue exist of alot of heroes! So lets add more heroes in [part5](https://heroes-of-vue.netlify.com/part5.html)!

First we add a list of heroes that we got from the [Vue team](https://vuejs.org/v2/guide/team.html).

Then we can create a new component to show our great heroes!

Lets crate a new component like before named `vue-heroes` that will use our list of heroes.

Hold your horses! Now i see that strange `v-` thing on my elements again. `v-for`, `v-model` and `v-bind` What is it? Also i found a typo in `:key="index"`. Should not be a `:` there!

Ohh, sry. Think i forgot to explain a main point in Vue language.

### Directives

The thing you seen `v-` is called [directives](https://vuejs.org/v2/guide/syntax.html#Directives). And they have special meaning in Vue. If you are coming from Angular you know it as `ng-`.

Take a quick look at the Vue directive documentation and get back here. Ill wait :)
So lets take it from the beginning. If we go back to the `Two-way data binding` we used something called `v-model` to bind our value to be reactive. In the extra exercise we used `v-bind` to reactively update the html value.

In this part we found your "typo" `:key` that is not a typo! Its a [shorthand](https://vuejs.org/v2/guide/syntax.html#Shorthands) to save some typing :)

`v-bind:key` is the same as `:key`. We also have `v-on:click` that works the same as `@click`!

So by now i think you could figure out what `v-for` does? You are correct! It makes a loop.

```html
<div v-for="(hero, index) in heroes" :key="index" >
    <li>
        <span class="badge">{{hero.id}}</span> {{hero.name}}
    </li>
</div>
```

Here we use our array of `heroes` and for each hero we will crate a div with the content. Because our array exist of objects we can access its properties on the defined variable `hero`.

## Set up style

Now that we have the ability to edit our hero and show some more heroes. Lets make some styling to it. Here i will use the same style from "Tour of heroes". They did a good job! 

In the next version using Vue-cli we will introduce [TailwindCSS](https://tailwindcss.com/) a css framework or rather a css utility library to make more of our own style.


## Some more info

## This is great

