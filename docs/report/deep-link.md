# ディープリンク

webブラウザからネイティブアプリにパラメタを渡して起動する方法についてまとめます。

## カスタムURLスキーム

アプリにあらかじめ設定をしておくことで、  
`https://` の部分を独自の文字列に変換したリンクをブラウザで開こうとした際に  
アプリが呼び出されるようにできる仕組みです。

例： [deep-link-test://example?viewName=a&message=hello](deep-link-test://example?viewName=a&message=hello)

パラメータを渡すことで指定の画面を開いたり、データを渡すこともできます。

[デモ用ページ](https://huruikagi.github.io/pwa-test/deep-link.html)

### Android

### iOS

> 参考： Custom URL Schemeでアプリ内の任意のページを表示する
> https://qiita.com/yamataku29/items/67f12142522306c3f86a

## Universal Links

> 参考： URLスキーム・独自ディープリンク実装に代わる、Universal Links(iOS 9で導入)でより良いUXを実現
> https://qiita.com/mono0926/items/2bf651246714f20df626

ただしこちらはiOS限定の機能であるため、Androidでは別途カスタムURLスキームを利用するなどの対応が必要になります。

※ [Firebase App Indexing](https://firebase.google.com/docs/app-indexing/android/app?hl=ja) で同じことができるかもしれないので、後で追加で調査します。
