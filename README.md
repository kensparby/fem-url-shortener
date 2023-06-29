# Frontend Mentor - Shortly URL shortening API Challenge solution

This is my solution to the [Shortly URL shortening API Challenge challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- Shorten any valid URL
- See a list of their shortened links, even after refreshing the browser
- Copy the shortened link to their clipboard in a single click
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty

### Screenshot

| Mobile | Desktop |
:---------:|:---------:
|![Screenshot of solution on mobile](./screenshot-mobile.png?raw=true) | ![Screenshot of solution on desktop](./screenshot-desktop.png?raw=true) |

### Links

- Solution URL: [https://github.com/kensparby/fem-url-shortener](https://github.com/kensparby/fem-url-shortener)
- Live Site URL: [https://fem-url-shortener.vercel.app/](https://kensparby-fem-url-shortener.vercel.app/)

## My process

### Built with

- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Tailwind](https://tailwindcss.com/) - Tailwind

### What I learned

This one took a good while as I wanted to learn and use NextJS for this challenge, and so I spent a few days really testing out and learning before even getting started, and then another three days building the challenge.

I got a lot of good practice with both the `Pages` and the `App` routers in NextJS, and I also decided on trying Tailwind again; still not impressed with the spaghetti code it turns into and how cumbersome it is to change things once said spaghetti code is a fact. I don't know, I just find writing CSS/SCSS much more enjoyable and far easier to handle.

NextJS is now a permanent part of my toolbox though, and I absolutely love using it. 12/10, would recommend.

I opted for not adhering to the challenge requirement of the created links to persist past browser refresh, as that just seems like poor UX...?
They're instead stored in state and will persist *until* the browser is refreshed.

On a fun sidenote, I wasted over an hour on debugging a `setTimeout()` that just would not run. I figured this had to be some quirk of NextJS until I tried it in another browser and it immediately worked as expected. Caching issues are always fun :)

### Continued development

I wanted to add animations -- in particular to the hamburger menu -- but eh, maybe some other time. A few quick ready-made icons will do for now.

### Useful resources

- [Youtube: Next.js 13 Crash Course](https://www.youtube.com/watch?v=Y6KDk5iyrYE)

## Author

- Website - [https://sparby.dev/](https://sparby.dev/)
- Twitter - [@kensparby](https://www.twitter.com/kensparby)
- Frontend Mentor - [@ksparb](https://www.frontendmentor.io/profile/ksparb)

## Acknowledgments

- [Brad Traversy](https://www.youtube.com/@TraversyMedia), for his great video tutorials and for just being a good guy all around.