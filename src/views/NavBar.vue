<template>
  <nav id="nav">
    <div class="logo">W-JPK</div>
    <div>
      <ul class="nav-links">
        <li><a href="/#about">Обо мне</a></li>
        <li><a href="/#experience">Навыки</a></li>
        <li><a href="/#projects">Проекты</a></li>
        <li><a href="/#contact">Контакты</a></li>
      </ul>
    </div>
  </nav>
</template>

<script></script>

<style scoped>
nav {
  display: flex;
  font-family: Poppins, sans-serif;
  justify-content: space-around;
  align-items: center;
  height: 10vh;
}

nav,
.nav-links {
  display: flex;
}

.nav-links {
  gap: 2rem;
  list-style: none;
  font-size: 1.5rem;
}

.nav-links a {
  text-decoration: none;
  text-decoration-color: white;
  color: black;

  &:hover {
    color: gray;
    text-decoration: underline;
    text-underline-offset: 0.8rem;
    text-decoration-color: gray;
  }
}

.logo {
  font-size: 2rem;
  font-weight: bold;
  cursor: default;
}
</style>
