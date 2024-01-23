<template>
  <div class="container">
    <div class="login-form">
      <form action="#">
        <h1>Sign Up</h1>
        <p>If you are new <router-link to="/login">Login</router-link></p>

        <label for="email">Email</label>
        <input type="email" placeholder="Enter Email"  name="email">

        <label for="psw">Password</label>
        <input type="password" placeholder="Enter Password" name="psw">

        <label for="psw-repeat">Password</label>
        <input type="password" placeholder="Repeat Password" name="psw-repeat">

        <label>
          <input type="checkbox" checked style="margin-bottom: 15px">Remember me
        </label>
        <p>By creating an account you agree to our <a href="#">Terms & Privacy</a></p>

        <div class="buttons">
          <button class="cancelbtn">Cancel</button>
          <button class="signupbtn">Sign Up</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {

}
</script>

<style scoped>

</style>