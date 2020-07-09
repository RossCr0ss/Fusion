<template>
    <li class="document__item py-4">
        <img
            src="/assets/img/icons/document-grey-color.svg"
            alt="text-document"
            class="document__image"
        />
        <div class="text px-8">
            <slot></slot>
            <p class="subtitle">Файл доступен в формате pdf</p>
        </div>
        <button class="document__button btn p-3">Скачать в pdf</button>
    </li>
</template>