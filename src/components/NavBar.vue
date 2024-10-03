<template>
  <nav id="nav">
    <div class="logo">W-JPK</div>
    <div>
      <ul class="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>

</script>

<style>
/* #nav {
  position: fixed;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(8px);
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 3rem;
  z-index: 1000;
} */

nav {
  display: flex;
  font-family: Poppins, sans-serif;
  justify-content: space-around;
  align-items: center;
  height: 17vh;
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

a {
  text-decoration: none;
  text-decoration-color: white;
  color: black;
}

a:hover {
  color: gray;
  text-decoration: underline;
  text-underline-offset: 0.8rem;
  text-decoration-color: gray;
}

.logo {
  font-size: 2rem;
  font-weight: bold;
}

.logo:hover {
  cursor: default;
}
</style>
