#!/usr/bin/env node
import alfy from 'alfy';

//argはエンターキーを押した時にでるやつ
const itemss = alfy.inputMatches([{
    title: '::diff2htmlで.diffから差分HTML生成',
    subtitle: 'diff2html -i file {Diffファイル .diff} -s side -F {出力HTML名}.html',
    icon: {
      path: './img/main02.jpg'
    },
    arg: 'diff2html -i file {Diffファイル .diff} -s side -F {出力HTML名}.html',
  }, {
    title: '::Diffの出力 特定のディレクトリのみ対象',
    subtitle: 'git diff {作業前のコミットID} {最新のコミットID} {特定のフォルダ指定} > {path/to/hogehoge.diff}',
    icon: {
      path: './img/main02.jpg'
    },
    arg: 'git diff {作業前のコミットID} {最新のコミットID} {特定のフォルダ指定} > {path/to/hogehoge.diff}',
  }, {
    title: '::PUSHしたコミットを取り消す',
    subtitle: 'git push origin +{コミットID}:{ブランチ名}',
    icon: {
      path: './img/main02.jpg'
    },
    arg: 'git push origin +{コミットID}:{ブランチ名}',
  }, {
    title: '::resetする前のコミット情報もまとめて確認',
    subtitle: 'git reflog',
    icon: {
      path: './img/main02.jpg'
    },
    arg: 'git reflog',
  }, {
    title: '::stashで避ける前に戻す',
    subtitle: 'git stash apply',
    icon: {
      path: './img/main02.jpg'
    },
    arg: 'git stash apply',
  }, {
    title: '::stashのリスト確認',
    subtitle: 'git stash list',
    icon: {
      path: './img/main02.jpg'
    },
    arg: 'black',
  }, {
    title: '::コミットを打ち消す',
    subtitle: 'git revert {コミットID}',
    icon: {
      path: './img/main02.jpg'
    },
    arg: 'git revert {コミットID}',
  }, {
    title: '::コミット前の特定ファイルのみ変更なし',
    subtitle: 'git checkout -- {ファイル名}',
    icon: {
      path: './img/main02.jpg'
    },
    arg: 'git checkout -- {ファイル名}',
  }, {
    title: '::コミット前の編集ファイルの変更をなし',
    subtitle: 'git checkout .',
    icon: {
      path: './img/main02.jpg'
    },
    arg: 'black',
  }, {
    title: '::コミット前ファイルをすべて変更なし',
    subtitle: 'git checkout .',
    icon: {
      path: './img/main02.jpg'
    },
    arg: 'git checkout .',
  }, {
    title: '::コミット間のDiffを取る',
    subtitle: 'git diff {作業前のコミットID} {最新のコミットID} > {path/to/hogehoge.diff}',
    icon: {
      path: './img/main02.jpg'
    },
    arg: 'git diff {作業前のコミットID} {最新のコミットID} > {path/to/hogehoge.diff}',
  }, {
    title: '::コミット間の差分ファイル作成',
    subtitle: 'git archive {終了コミットID} `git diff --name-only {開始コミットID} {終了コミットID} --diff-filter=ACMR` -o {zipファイル名}',
    icon: {
      path: './img/main02.jpg'
    },
    arg: 'git archive {終了コミットID} `git diff --name-only {開始コミットID} {終了コミットID} --diff-filter=ACMR` -o {zipファイル名}',
  }, {
    title: '::ブランチの最新コミットから数値指定で差分ファイル作成',
    subtitle: 'git archive HEAD `git diff --name-only HEAD~{数値} HEAD --diff-filter=ACMR` -o {zipファイル名}',
    icon: {
      path: './img/main02.jpg'
    },
    arg: 'git archive HEAD `git diff --name-only HEAD~{数値} HEAD --diff-filter=ACMR` -o {zipファイル名}',
  }, {
    title: '::ブランチの確認（ローカル/リモート）',
    subtitle: 'git branch -a',
    icon: {
      path: './img/main02.jpg'
    },
    arg: 'git branch -a',
  }, {
    title: '::ブランチ間のDiffを取る',
    subtitle: 'git diff {古いほうのブランチ} {更新したほうのブランチ} > {path/to/hogehoge.diff}',
    icon: {
      path: './img/main02.jpg'
    },
    arg: 'git diff {古いほうのブランチ} {更新したほうのブランチ} > {path/to/hogehoge.diff}',
  }, {
    title: '::ブランチ間の差分ファイル作成',
    subtitle: 'git archive {現在ブランチ名} `git diff --name-only {比較先のブランチ名（リモート/ローカル）} {現在ブランチ名} --diff-filter=ACMR` -o {zipファイル名}',
    icon: {
      path: './img/main02.jpg'
    },
    arg: 'git archive {現在ブランチ名} `git diff --name-only {比較先のブランチ名（リモート/ローカル）} {現在ブランチ名} --diff-filter=ACMR` -o {zipファイル名}',
  }, {
    title: '::ファイルの中身確認(戻したいファイルを確認)',
    subtitle: 'git show HEAD^:path/to/file',
    icon: {
      path: './img/main02.jpg'
    },
    arg: 'git show HEAD^:path/to/file',
  }, {
    title: '::ファイルを特定のバージョンに戻す',
    subtitle: 'git checkout HEAD^ path/to/file',
    icon: {
      path: './img/main02.jpg'
    },
    arg: 'git checkout HEAD^ path/to/file',
  }, {
    title: '::ファイルを追加',
    subtitle: 'git add .',
    icon: {
      path: './img/main02.jpg'
    },
    arg: 'git add .',
  }, {
    title: '::メールアドレス変更',
    subtitle: 'git config user.email {メールアドレス}',
    icon: {
      path: './img/main02.jpg'
    },
    arg: 'git config user.email {メールアドレス}',
  }, {
    title: '::ユーザ名変更',
    subtitle: 'git config user.name {名前}',
    icon: {
      path: './img/main02.jpg'
    },
    arg: 'git config user.name {名前}',
  }, {
    title: '::リモートブランチをローカルにチェックアウト',
    subtitle: 'git checkout -b new-branch origin/new-branch',
    icon: {
      path: './img/main02.jpg'
    },
    arg: 'git checkout -b new-branch origin/new-branch',
  }, {
    title: '::コミットを打ち消す',
    subtitle: 'git revert {コミットID}',
    icon: {
      path: './img/main02.jpg'
    },
    arg: 'git revert {コミットID}',
  }, {
    title: '::リモートブランチ削除',
    subtitle: 'git push {接続先:origin} :{ブランチ名}',
    icon: {
      path: './img/main02.jpg'
    },
    arg: 'git push {接続先:origin} :{ブランチ名}',
  }, {
    title: '::作業ツリーの変更点をstashに保存',
    subtitle: 'git stash',
    icon: {
      path: './img/main02.jpg'
    },
    arg: 'git stash',
  }, {
    title: '::初期化',
    subtitle: 'git init',
    icon: {
      path: './img/main02.jpg'
    },
    arg: 'git init',
  }, {
    title: '::新しいブランチを作成（ローカルブランチ派生）',
    subtitle: 'git checkout -b {新しいブランチ名}',
    icon: {
      path: './img/main02.jpg'
    },
    arg: 'git checkout -b {新しいブランチ名}',
  }, {
    title: '::直前のコミットを戻す',
    subtitle: 'git reset --soft HEAD^1',
    icon: {
      path: './img/main02.jpg'
    },
    arg: 'git reset --soft HEAD^1',
  }
    ], 'title');


alfy.output(itemss);
//const data = await alfy.fetch('https://jsonplaceholder.typicode.com/posts');//'[{"id":tao,"taoka":kenta},{"id":tao1,"taoka":kenta1},{"id":tao2,"taoka":kenta2}]';
// const mydata = JSON.parse(JSON.stringify({"items":{"id":1,"body":"kenta","title":"1"},"items":{"id":2,"body":"kenta1","title":"2"},"items":{"id":3,"body":"kenta2","title":"3"}}))
// const mydata1 = [{id:1,body:"kenta",title:"1"},{id:2,body:"kenta1",title:"2"},{id:3,body:"kenta2",title:"3"}]
// const myitems = alfy
//     .inputMatches(mydata, 'title')
//     .map(element => ({
//         title: element.title,
//         subtitle: element.body,
//         arg: element.id,
//         icon:`./img/main01.jpg`
//         //icon:{"type":"jpg","path":"./png"}
// }));
// const myitems1 = alfy
//     .inputMatches(mydata1,title)
//     .map(element => ({
//         title: element.title,
//         subtitle: element.body,
//         arg: element.id,
//         //icon:{"type":"jpg","path":"./png"}
// }));
//console.log(itmess)
//console.log(myitmes1)
// const item = [
//     { title: 'hello, Alfred', subtitle: 'alfred subtitle', arg: 'alfred',icon:`./img/main01.jpg` },
//     { title: 'hello, Node', subtitle: 'node subtitle', arg: 'node',icon:`./img/main02.jpg` },
// ]
//alfy.output(myitems1);
//alfy.output(myitems);





// const mods = ['cmd', 'alt', 'ctrl', 'shift', 'fn'];
// const items = alfy
// 	.inputMatches(mods).map(item => ({
// 		title: item,
// 		subtitle: `Create modifier object for ` + item,
// 		arg: item + ': {\
//   subtitle: \'{cursor}\',\
//   arg: \'\'\
// },',
// 		mods: {
// 			cmd: {
// 				subtitle: 'Create full modifier object',
// 				arg: `mods: {
//     ${item}: {
//       subtitle: '{cursor}',
//       arg: '',
//     }
//   },`
// 			}
// 		}
// 	}));

// alfy.output(items);
