<template>
    <div class="login">
        <div class="container">
            <div class="wrapper">
                <h1>Welcome</h1>
                <form class="form mb-4">
                    <p class="h4 form__text mb-4">Sign in</p>
                    <div class="form__box mb-4">
                        <label for="email" class="form__label mb-2">Your email</label>
                        <input type="email" id="email" class="form__input"/>
                        <span v-show="error" class="error"
                            >Неверный email
                        </span>
                    </div>

                    <div class="form__box mb-4">
                        <label for="password" class="form__label mb-2">Your password</label>
                        <input type="password" id="password" class="form__input"/>
                        <span v-show="error" class="error"
                            >Неверный  пароль
                        </span>
                    </div>
                    
                    <div class="form__text mt-4">
                        <router-link tag="button" to="/" class="btn py-2 px-4">Login</router-link>
                        <router-link tag="button" to="/register" class="btn py-2 px-4">Sign Up</router-link><br>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                error: false
            }
        }
    }
</script>