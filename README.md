# インストールしたライブラリ
■MATERIAL-UI
https://material-ui.com/
// material-uiそのもの
npm install @material-ui/core
// 各icon
npm install @material-ui/icons

■Sass Stylesheet
https://create-react-app.dev/docs/adding-a-sass-stylesheet/
// scssを使うために
npm install node-sass --save

■react-router
https://js.course.codevillage.jp/js-basics/lesson-11.html#react-router
https://qiita.com/k-penguin-sato/items/e46725edba00013a8300
//Reactでのルーティング
npm add react-router-dom


# 作成したディレクトリとファイル（2/10時点）
root
└ src
    └ components
        └ Header.js
        └ navigation.js        
    └ SCSS
        └ _base.scss //大枠のスタイルを記載
        └ _reset.scss //ブラウザ毎に設定されているスタイルをリセット
        └ App.scss　//各scssをインポート


#　MATERIAL-UI を利用しているコンポーネントとドキュメント
■Navigation.js
https://material-ui.com/ja/components/bottom-navigation/
https://material-ui.com/ja/components/material-icons/

■Header.js 
https://material-ui.com/components/menus/