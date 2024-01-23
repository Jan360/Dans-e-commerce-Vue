<template>
  <div class="container">
    <div class="login-form">
      <form action="#">
        <h1>Login</h1>
        <p>Already have an account? Login or <router-link to="/signup">Sign Up</router-link></p>

        <label for="email">Email</label>
        <input type="email" placeholder="Enter Email" pattern="[A-Z0-9]+@[A-Z0-9]+.[A-Z]{2,4}" name="email">

        <label for="psw">Password</label>
        <input type="password" placeholder="Enter Password" name="psw">

        <label for="psw-repeat">Password</label>
        <input type="password" placeholder="Repeat Password" name="psw-repeat">

        <label>
          <input type="checkbox" checked style="margin-bottom: 15px">Remember me
        </label>
        <p>By creating an account you agree to our <router-link to="#">Terms & Privacy</router-link></p>

        <div class="buttons">
          <button class="cancelbtn">Cancel</button>
          <button class="signupbtn">Login</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {

}
</script>

<style>
.login-form {
  padding: 5rem 0;
  max-width: 50rem;
  margin: 5rem auto;
}
.login-form form {
  display: flex;
  flex-direction: column;
}
.login-form form h1 {
  margin-bottom: 1rem;
}
.login-form form p {
  margin-bottom: 2rem;
}
.login-form form label {
  margin-bottom: 1rem;
}
.login-form form input {
  border: 1px solid #ccc;
  outline: none;
  padding: 1.5rem 0;
  text-indent: 1rem;
  font-size: 1.6rem;
  margin-bottom: 2rem;
  border-radius: 0.5rem;
}
.login-form for input::placeholder {
  font-size: 1.6rem;
  color: #222;
}
.login-form form .buttons {
  margin-top: 1rem;
}
.login-form form button {
  outline: none;
  border: none;
  font-size: 1.6rem;
  padding: 1rem 3rem;
  margin-right: 1.6rem;
  background-color: var(--green);
  color: white;
  cursor: pointer; 
}
.login-form form p a {
  color: dodgerblue;
}
</style>