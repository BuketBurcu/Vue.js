<template>
  <nav>
    <div>
      <p>Hi 'displayName'</p>
      <p class="email">Currently logged in as... 'email'</p>
    </div>
    <button>Logout</button>
  </nav>
</template>

<script>
export default {};
</script>

<style>
nav {
  padding: 20px;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
nav p {
  margin: 2px auto;
  font-size: 16px;
  color: #444;
  text-align: left;
}
nav p.email {
  font-size: 14px;
  color: #888;
}
</style>
