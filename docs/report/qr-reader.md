# QRコードリーダー

## 参考

> 参考： JavaScriptでQRコードをスキャンするライブラリまとめ
> https://qiita.com/shora_kujira16/items/a9e3aa0b06525c00a7e0

こちらに各ライブラリの説明やデモページへのリンクがまとまっているので参考にさせて頂きました。

## LazarSoft/jsqrcode
+ [GitHub](https://github.com/LazarSoft/jsqrcode)
+ [デモ](https://webqr.com/)

ZXingのC++移植をさらにJavaScriptに変換したライブラリです。
> このライブラリはテストコードが不十分ということで，edi9999/jsqrcode の作者は，後述する cozmo/jsQR の利用を推奨しています。

## cozmo/jsQR

+ [GitHub](https://github.com/cozmo/jsQR)
+ [デモ（公式）](https://cozmo.github.io/jsQR/)

現状だと、（消去法で）このライブラリが一番有力な選択肢だと思います。
他のライブラリはほぼメンテナンスされていなかったりiOS Safariに対応していなかったりです。

## schmich/instascan
+ [GitHub](https://github.com/schmich/instascan)
+ [デモ](https://schmich.github.io/instascan/)

Safariで動かないのでiOSがターゲットの場合利用できません。
