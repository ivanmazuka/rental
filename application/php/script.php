<?php

// МАССИВ ОШИБОК
$errors = Array();

// ПРОВЕРКА ПОЧТЫ
if (!isset($_POST['email'])) {
    array_push($errors, 'Вы не указали почту!');
}

// ПРОВЕРКА ИМЕНИ
if (!isset($_POST['name'])) {
    array_push($errors, 'Вы не указали имя!');
}

// ПРОВЕРКА ТЕЛЕФОНА
if (!isset($_POST['phone'])) {
    array_push($errors, 'Вы не описали заказ!');
}

// ОТПРАВКА
if (empty($errors)) {
    $email = $_POST['email'];
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $message = "Имя: {$name}\nПочта: {$email}\nТелефон: {phone}";
    mail('ivan.mazuka@yandex.ru', 'Заказ каталога с сайта РЕНТАЛ', $message);
    print 'Ваш заказ отправлен!';
} // ВЫВОД ОШИБОК
else {
    print 'Не все поля были заполнены!';
}
