<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "mana.kou0504@gmail.com"; // 自分のメールアドレスを入力
    $name = $_POST["name"];
    $phone = $_POST["phone"];
    $from = $_POST["email"];
    $message = $_POST["message"];
    
    $subject = "お問い合わせがありました";
    $body = "氏名: $name\n";
    $body .= "電話番号: $phone\n";
    $body .= "メールアドレス: $from\n";
    $body .= "お問い合わせ内容:\n$message";
    
    if (mail($to, $subject, $body)) {
        echo "お問い合わせが送信されました";
    } else {
        echo "お問い合わせの送信に失敗しました";
    }
}
?>
