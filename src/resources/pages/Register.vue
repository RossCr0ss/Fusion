<template>
    <div class="register">
        <div class="container">
            <div class="wrapper">
                <h1>Welcome</h1>
                <form class="form mb-4">
                    <p class="h4 form__text mb-4">Sign up</p>

                    <div class="form__box mb-4">
                        <label for="name" class="form__label mb-2">Введите имя</label>
                        <input type="text" id="name" class="form__input"/>
                        <span v-show="error" class="error"
                            >Неправильный формат имени
                        </span>
                    </div>

                    <div class="form__box mb-4">
                        <label for="email" class="form__label mb-2">Введите адрес электронной почты</label>
                        <input type="email" id="email" class="form__input"/>
                        <span v-show="error" class="error"
                            >Неправильный формат почты
                        </span>
                    </div>
  
                    <div class="form__box mb-4">   
                        <label for="password" class="form__label mb-2">Введите пароль</label>
                        <input type="password" id="password" class="form__input"/>
                        <span v-show="error" class="error"
                            >Неправильно введен пароль
                        </span>
                    </div>

                    <div class="form__box mb-4">  
                        <label for="confirm-password" class="form__label mb-2">Подтвердите пароль</label>
                        <input type="password" id="confirm-password" class="form__input"/>
                        <span v-show="error" class="error"
                            >Неправильно введен пароль
                        </span>
                    </div>
                    
                    <div class="form__text mt-4">
                        <button type="button" class="btn py-2 px-4">Зарегистрироваться</button>
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