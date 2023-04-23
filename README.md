<div align="center">
  <img width=200px height=200px src="src/assets/tally-logo.svg" alt="Project logo">
</div> 
  <h1 align="center">Tally</h1>
  <p align="center">
   A desktop CRUD inventory tracking application
  <br />
  </p>

<br/>

<div align="center">

[![Status](https://img.shields.io/badge/JavaScript%20-grey?style=flat-square&logo=javascript)]() [![Status](https://img.shields.io/badge/HTML%20-grey?style=flat-square&logo=html5)]() [![Status](https://img.shields.io/badge/CSS%20-grey?style=flat-square&logo=css3&logoColor=1572B6)]() [![Status](https://img.shields.io/badge/React%20-grey?style=flat-square&logo=react)](https://reactjs.org/)
[![Status](https://img.shields.io/badge/Figma%20-grey?style=flat-square&logo=figma)](https://www.figma.com/) [![Status](https://img.shields.io/badge/Emotion%20-grey?style=flat-square)](https://emotion.sh/docs/introduction) [![Status](https://img.shields.io/badge/React%20Select-grey?style=flat-square)](https://react-select.com/home) [![Status](https://img.shields.io/badge/React%20Spinners-grey?style=flat-square)](https://www.npmjs.com/package/react-spinners)

[![Netlify Status](https://api.netlify.com/api/v1/badges/b5683752-bdc7-46f4-8525-68528da3245a/deploy-status)](https://app.netlify.com/sites/a-money-co-currency-converter/deploys?branch=main)

</div>

<hr />
<br />

<div>

<!-- Add your project demo gif here -->
  <h4 align="center">Demo</h4>
  <br/>
  <div align="center">
    <img width=640px src="./tally-add-product.gif" alt="tally application gif"/>
  </div>
  <br/>
  <div align="center">
    <img width=640px src="./tally-delete-product.gif" alt="tally application gif 2"/>
  </div>
  <br/>
  <div align="center">
    <img width=640px src="./tally-edit-product.gif" alt="tally application gif 2"/>
  </div>
  <br/>
  <div align="center">
    <img width=640px src="./tally-form-error-handling.gif" alt="tally application gif 2"/>
  </div>
  <br/>
  <div align="center">
    <img width=640px src="./tally-user-flow-control.gif" alt="tally application gif 2"/>
  </div>
  <br/>

  <hr />

</div>

<br/>

<hr />

<h3 align="center">Tally - Inventory Tracker</h3>
<br/>

## 🧐About

Tally is an app that helps you keep track of your inventory! With its CRUD (create, read, update, delete) functionality, you can easily manage your inventory. The front-end of Tally is built with React, React Hook Form, and React Select. To simulate the back-end, I used JSON server. This app is currently only designed for desktop. I think a mobile redesign would be best for presenting the inventory information in a more user-friendly way.

<br/>

## 💡Features

- Easily manage your products with the ability to view, add, update and delete
- View and add specific product details
- Several modals guide users and provide clear confirmation making changes
- Minimal re-renders and better performance brought to you by React Hook Form
- Visually pleasing a accessible select dropdown menus using React Select

<br/>

## ⛏️Built with

- JavaScript
- HTML
- CSS
- React
- Git VCS
- Github
- React-Hook-Form
- React-Select
- React-Spinners
- React Testing Library
- Jest
- Figma

## 🏁Getting Started

1. Clone this repository
2. Open two terminal windows
3. `cd` into the project directory in one window
4. run `npm install` - in the project directory
5. run `npm start` - to start up the Front-end
6. `cd` into the project directory in the second terminal window
7. run `npm run server`- to start the development server
8. The app should be running on `http://localhost:3000/`in your browser
   <br/>

## 🗓Planning and challenges

I opted for an inventory tracking application since this is the would be a perfect fit for a CRUD application. My first step was to hunt online for a bit of inspiration and research features for inventory tracking applications. The Figma designed application was my guide for feature and design implementation. Although I made a few tweaks along the way, I stuck to the design layout as much as possible.

This was my first experience using React Hook Form. React Hook Form is an amazing form library that reduces form component re-renders allowing components to mount faster than traditional controlled components. It's also highly customizable and integrates well with other libraries. After reading through the documentation, watching videos and other online sources I was able to implement this form library along with React Select.

Throughout my project, I encountered several obstacles. From control flow issues to accessibility problems and code readability. As the code base grew, it became harder to understand. I consolidated separate modal components into one streamlined component. To improve the project, I had to solve specific problems in different ways. I didn't want to rely entirely on application state to solve all of my issues. I also broke down larger components into smaller reusable pieces. My inexperience posed visual design challenges, but every new project is a learning opportunity. With the valuable experience gained from this project, I'll take these lessons with me to the next one.

<br/>

### Continued development

<br/>

I'm not currently planning on adding anything new to this project. However, I am looking to make some improvements to the existing functionality. Specifically, how manage the application state. Right now, the MainSectionContent.js component has quite a few state setters. I think I could streamline things and make it more efficient with useReducer instead of useState.

<br />

## 🔧Mock up, planning tools and scores

<br/>

<div align="center">
  <h2>Tally comp</h2>
<img src='./tally-figma-mock.png' alt='tally mock up screenshot'/>
  <h2>Lighthouse scores</h2>
<img src='./tally-lighthouse.png' alt='google lighthouse accessibility scores'/>
</div>

## 🎉Acknowledgement

- [React](https://react.dev/)
- [React Hook Form](https://react-hook-form.com/)
- [React-Select](https://react-select.com/home)
- [React Spinners](https://www.npmjs.com/package/react-spinners)

> \_**NOTE:** All product images were sourced via random image search. I claim no ownership and use these images only for development practice.
