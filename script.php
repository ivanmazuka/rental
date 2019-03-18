<?php
/**
 * PHP version 7.2
 *
 * @category Default
 * @package  Default
 * @author   Ivan Matcuka <matcuka@polymorphy.ru>
 * @license  http://opensource.org/licenses/gpl-license.php GNU Public License
 * @link     http://rental.polymorphy.ru/
 */

// Errors array
$errors = [];

// Email validation
if (!isset($_POST['email'])) {
    $errors[] = 'Вы не указали почту!';
}

// Name validation
if (!isset($_POST['name'])) {
    $errors = 'Вы не указали имя!';
}

// Phone validation
if (!isset($_POST['phone'])) {
    $errors = 'Вы не описали заказ!';
}

// Sending
if (empty($errors)) {
    $email = $_POST['email'];
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $message = "Имя: {$name}\nПочта: {$email}\nТелефон: {phone}";

    try {
        mail('matcuka@polymorphy.ru', 'Заказ каталога с сайта Рентал', $message);
        echo 'Ваше сообщение отправлено!';
    } catch (Exception $exception) {
        echo 'Произошла ошибка!';
    }
} else {
    echo 'Не все поля были заполнены!';
}
