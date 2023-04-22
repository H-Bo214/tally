<div align="center">
  <!-- Add your project logo if you have any -->
  <img width=200px height=200px src="src/assets/tally-logo.svg" alt="Project logo">
</div> 
  <h1 align="center">Tally</h1>
  <p align="center">
    <!-- Add your tagline or very short intro of your project -->
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

<!-- You may write notes in your readme this way if you want to, it looks good and also different from other text -->
<br/>

<hr />

<h3 align="center">Tally - Inventory Tracker</h3>
<br/>

## 🧐About

Tally is an inventory tracking application with CRUD functionality. The Front-end was created with React, React Hook Form, and React Select. I used JSON server for the mock Back-end.
<br/>

## 💡Features

- Add, edit, delete and update products from a list
- Several modals to control the user flow ensuring confirmation of changes
- Form error handling with minimal re-renders provided by React-Hook-Form
- Visually pleasing select drop down form menus provided by React-Select

<br/>

## ⛏️Built with

- JavaScript
- HTML
- CSS
- React
- Git VCS
- React-Hook-Form
- React-Select
- React-Spinners
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

I began planning by reviewing the API documentation provided by Fixer Currency. The purpose of the application was fairly straight forward, provide conversion rates based on a specific amount. This project didn't present many technical challenges regarding data retrieval. However, I was faced with stylistic challenges mostly in regards to adding images within the select input in a dynamic way. After reviewing React-Select documentation as well as other online resources I was able to find a solution. Throughout the project, I reviewed and refactored several parts of my code in order to minimize the size of certain components.

<br/>

<br />

## 🔧Mock up, planning tools and scores

<br/>

<div align="center">
  <h2>Currency Converter comp</h2>
  <img src="./cc.mock.png" alt="Currency converter comp">
  <h2>Lighthouse scores</h2>
  <img src="./cc-lighthouse.png" alt="Google Lighthouse scores">
</div>

## 🎉Acknowledgement

- [Fixer API](https://rapidapi.com/fixer/api/fixer-currency/)
- [React-Select](https://react-select.com/home)
- [React Spinners](https://www.npmjs.com/package/react-spinners)
- [Emotion/React](https://emotion.sh/docs/@emotion/react)
- [Country Flag Images by Jonas Bröms - Graphical assets, files, code and documentation released under the MIT.Docs released under Creative Commons.](https://www.figma.com/@jonasbroms)

> \_**NOTE:** Please do not make excessive API calls as this is not a free API. API in use for application demonstration purposes only.
