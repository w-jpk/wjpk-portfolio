<template>
  <div class="table-widget">
    <table>
      <caption>
        Feedback Table
        <span class="table-row-count">({{ totalMembers }}) requests</span>
      </caption>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email address</th>
          <th>Web-site</th>
          <th>Message</th>
        </tr>
      </thead>
      <tbody id="team-member-rows">
        <tr v-for="member in paginatedMembers" :key="member.id">
          <td>
            {{ member.name }}
          </td>
          <td>{{ member.email }}</td>
          <td>{{ member.website }}</td>
          <td>{{ member.message }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="4">
            <ul class="pagination">
              <li v-for="page in totalPages" :key="page">
                <a
                  :href="'?page=' + page"
                  :class="{ active: page === currentPage }"
                  title="page {{ page }}">
                  {{ page }}
                </a>
              </li>
            </ul>
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      itemsOnPage: 5,
      currentPage: 1,
    };
  },
  computed: {
    ...mapGetters(["feedback"]),
    totalMembers() {
      return this.feedback.length;
    },
    totalPages() {
      return Math.ceil(this.totalMembers / this.itemsOnPage);
    },
    paginatedMembers() {
      // Сначала сортируем записи по убыванию ID
      const sortedFeedback = [...this.feedback].sort((a, b) => b.id - a.id);

      // Определяем начальный индекс и получаем нужные элементы
      const start = (this.currentPage - 1) * this.itemsOnPage;
      return sortedFeedback.slice(start, start + this.itemsOnPage);
    },
  },
  mounted() {
    const params = new URLSearchParams(window.location.search);
    const page = parseInt(params.get("page"), 10);
    if (page) {
      this.currentPage = Math.min(page, this.totalPages);
    }

    this.loadFeedback();
  },
  methods: {
    loadFeedback() {
      this.$store.dispatch("fetchFeedback");
    },
  },
};
</script>

<style scoped>
:root {
  --background: #ebecf0;
  --table-background: #ffffff;
  --primary: #101824;
  --gray: #a0a7b1;
  --odd-row: #f6f9ff;
  --gray-background: #edeef1;
  --gray-mid: #f1f2f6;
}

body {
  font-family: sans-serif;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 1rem;
  background: var(--background);
}

.table-widget {
  border-radius: 1rem;
  background: var(--table-background);
  padding: 1.5rem;
  border: 2px solid var(--gray-background);
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  text-align: left;
  overflow-x: auto;
}

.table-widget table {
  max-width: fit-content;
  border-collapse: collapse;
}

.table-widget caption {
  font-size: 1.12rem;
  font-weight: 700;
  text-align: left;
  margin: 0.5rem 0px;
}

.table-widget th {
  padding: 1.25rem 1rem;
  font-size: 0.875rem;
  color: var(--gray);
}

.table-widget thead {
  border-top: 2px solid var(--gray-background);
}

.table-widget tfoot {
  margin-top: 1rem;
  border-top: 2px solid var(--gray-background);
}

.table-widget td {
  padding: 0.5rem 1rem;
  vertical-align: middle;
}

.table-widget tbody tr {
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.table-widget tbody tr:nth-child(odd) {
  background: var(--odd-row);
}

.table-widget tbody tr:hover {
  background: #e2ecff;
}

.table-row-count {
  font-size: 0.8rem;
  font-weight: 700;
  background: var(--gray-mid);
  padding: 0.5rem;
  display: inline-flex;
  align-items: center;
  margin-left: 1rem;
  border-radius: 0.5rem;
}

.team-member-profile {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.profile-info {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.profile-info__name {
  display: flex;
  align-items: center;
  font-weight: 700;
  white-space: nowrap;
}

.team-member-profile img {
  width: 3.125rem;
  height: 3.125rem;
  border-radius: 50%;
  object-fit: cover;
}

.status {
  border-radius: 0.5rem;
  padding: 0.5rem;
  font-weight: 700;
}

.status--active {
  background: #eafef3;
  color: #2ecc71;
}

.status--inactive {
  background: #fff6e5;
  color: #f4bd50;
}

.status--offline {
  background: var(--gray-mid);
  color: var(--gray);
}

.tags {
  display: flex;
  gap: 0.5rem;
}

.tag {
  padding: 0.5rem;
  background: var(--gray-mid);
  border-radius: 0.5rem;
  font-weight: 700;
}

.tag::first-letter {
  text-transform: uppercase;
}

.tag--design {
  background: #f4efff;
  color: #9a84da;
}

.tag--QA {
  color: #df8fa8;
  background: #fbdde7;
}

.tag--dev {
  background: #eaf2ff;
  color: #739fdc;
}

.tag--marketing {
  background: #fff6e5;
  color: #f4bd50;
}

.table-widget {
  min-height: 5rem;
}

.pagination {
  list-style-type: none;
  display: flex;
  gap: 1rem;
  padding: 0;
}

.pagination a {
  display: block;
  color: var(--primary);
  font-size: 1.3rem;
  text-decoration: none;
  font-weight: 700;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
}

.pagination a:hover,
.pagination a.active {
  background: var(--odd-row);
  text-decoration: underline;
}
</style>
