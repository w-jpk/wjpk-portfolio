<template>
  <section id="footer">
    <nav>
      <div class="nav-links-container">
        <ul class="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
    <p class="footer-text">
      Copyright &#169; 2024
      <a href="https://github.com/w-jpk" class="footer-link">W-JPK</a>. All
      Rights Reserved.
    </p>
  </section>
</template>

<script></script>

<style scoped>
#footer {
  height: 26vh;
  margin: 0 1rem;
}

#footer p {
  font-family: Poppins, sans-serif;
  text-align: center;
}

.nav-links {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
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

.footer-text {
  font-size: 0.9rem;
  color: #6c757d;
  text-align: center;
}

.footer-text .footer-link {
  color: #5a5a5a;
  text-decoration: none;
  font-weight: bold;
}

.footer-text .footer-link:hover {
  color: #007bff;
}
</style>
