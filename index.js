#!/usr/bin/env node
import alfy from 'alfy';

//argはエンターキーを押した時にでるやつ


const command_=`
git version	Gitのバージョンを出力する
git clone {リポジトリのURL}	対象リポジトリのデフォルトブランチをクローンする
git clone --depth {深さ} {リポジトリのURL}	対象リポジトリのデフォルトブランチを指定したコミット数で切り詰めてクローンする
git clone -b {ブランチ名} {リポジトリのURL}	対象リポジトリの対象ブランチをクローンする
git remote	リモートリポジトリの一覧を出力する
git remote add {リモートリポジトリ名} {リポジトリのURL}	対象リポジトリをローカルのリモートリポジトリに追加する
git remote rename {旧リモートリポジトリ名} {新リモートリポジトリ名}	ローカルの対象リモートリポジトリをリネームする
git remote remove {リモートリポジトリ名}	対象リモートリポジトリをローカルから削除する
git branch	ローカルブランチの一覧を出力する（チェックアウト中のブランチに*が付く）
git branch -a	ローカルブランチとリモートブランチの一覧を出力する
git branch {ブランチ名}	対象ブランチを新規作成する（チェックアウトしない）
git branch -d {ブランチ名}	対象ブランチを削除する
git branch -d -f {ブランチ名}	対象ブランチを強制削除する
git branch -D {ブランチ名}	対象ブランチを強制削除する
git branch -m {旧ブランチ名} {新ブランチ名}	対象ブランチをリネームする
git checkout {ブランチ名}	対象ブランチに切り替える
git checkout -b {ブランチ名}	対象ブランチを新規作成し、切り替える
git checkout {ファイルパス}	ワークツリーにある対象ファイルの変更を取り消す
git checkout .	ワークツリーにある全ファイルの変更を取り消す
git switch {ブランチ名}	対象ブランチに切り替える
git switch -c {ブランチ名}	対象ブランチを新規作成し、切り替える
git switch --detach refs/tags/{タグ名}	対象タグに切り替える
git restore {ファイルパス}	ワークツリーにある対象ファイルの変更を取り消す
git restore .	ワークツリーにある全ファイルの変更を取り消す
git restore --source {コミットID} {ファイルパス}	対象ファイルの変更を対象コミットに戻す
git diff	ワークツリーにあるファイルの差分を出力する
git diff --cached	インデックスにあるファイルの差分を出力する
git status	変更したファイルの一覧を出力する
git status -s	git statusを短い形式で出力する
git status -s -b	短い形式でもブランチとトラッキングを出力する
git add {ファイルパス1} {ファイルパス2}...	対象ファイルをインデックス（コミット対象）に追加する
git add -A	変更した全ファイルをインデックスに追加する
git add -p {ファイルパス}	対象ファイルをハンク単位でインデックスに追加する
git reset HEAD {ファイルパス}	ステージングにある対象ファイルをワークツリーに戻す（git_add_{ファイルパス}を取り消す）
git reset HEAD	ステージングにある全ファイルをワークツリーに戻す（git_add_-Aを取り消す）
git commit	指定したエディタでメッセージを書き、インデックスにある全ファイルをコミットする
git commit -m "{メッセージ}"	メッセージを付け、インデックスにある全ファイルをコミットする
git revert HEAD	直前のコミットを元に戻すコミットを作成する
git revert {コミットID}	対象コミットを元に戻すコミットを作成する
git push origin {ローカルブランチ名}	対象ローカルブランチをoriginにプッシュする
git push -d origin {リモートブランチ名}	対象リモートブランチをoriginから削除する
git push origin {タグ名}	対象タグをoriginにプッシュする
git push -d origin {タグ名}	対象タグをoriginから削除する
git push -f	強制プッシュする
git push --force-with-lease	強制プッシュする（ブランチのアップストリームが変更されている場合などは拒否する）
git fetch origin	originから最新の履歴を取得する
git fetch --prune origin	リモートリポジトリ上に存在しなくなったブランチなどの参照を削除し、originから最新の履歴を取得する
git rebase origin/{ブランチ名}	originにある対象ブランチを、チェックアウト中のブランチへリベースする
git merge origin/{ブランチ名}	originにある対象ブランチを、チェックアウト中のブランチへマージする
git merge --squash origin/{ブランチ名}	originにある対象ブランチのコミットをひとつにまとめ、チェックアウト中のブランチへマージする
git cherry-pick {コミットID}	対象コミットをチェリーピックする
git cherry-pick {始点の1つ前のコミットID}..{終点のコミットID}	始点から終点までのコミットをチェリーピックする
git cherry-pick {始点のコミットID}^..{終点のコミットID}	始点から終点までのコミットをチェリーピックする
git cherry-pick --skip	現在のコミットをスキップして、残りのシーケンスを続ける
git cherry-pick --quit	失敗したチェリーピックを取り消す
git stash list	スタッシュの一覧を出力する
git stash show	スタッシュの変更を出力する
git stash push -m "{メッセージ}"	メッセージを付け、変更をスタッシュにプッシュする
git stash pop	スタッシュの変更をワークツリーに戻す（スタッシュから消える）
git stash apply	スタッシュの変更をワークツリーに戻す（スタッシュから消えない）
git stash drop	スタッシュから変更を削除する
git log	ログを出力する
git log --graph --name-status --pretty=format:"%C(red)%h %C(green)%an %C(Cyan)%ad %Creset%s %C(yellow)%d%Creset"	ぼくのかんがえたさいきょうのぎっとろぐ
git blame {ファイルパス}	対象ファイル全体の各行ごとに、最後に編集したリビジョンと作者を表示する
git blame -L {開始行} {ファイルパス}	対象ファイルの開始行から末尾までを各行ごとに、最後に編集したリビジョンと作者を表示する
git blame -L ,{終了行} {ファイルパス}	対象ファイルの先頭から終了行までを各行ごとに、最後に編集したリビジョンと作者を表示する
git blame -L {開始行},{終了行} {ファイルパス}	対象ファイルの開始行から終了行までを各行ごとに、最後に編集したリビジョンと作者を表示する
git show {コミットID}	対象コミットのメッセージとテキストの差分を表示する
git tag {タグ名}	タグを付ける
git tag -d {タグ名}	タグを削除する
git rm {ファイルパス}	対象ファイルを削除し、Gitの管理外にする
git rm --cached {ファイルパス}	対象ファイルを削除せず、Gitの管理外にする
git rm -r {フォルダパス}	対象フォルダ以下を全削除し、Gitの管理外にする

`

// 改行で配列を作る
const lines = command_.split('\n');
let words = [];
for (let i = 0; i < lines.length; i++) {
  let line = lines[i];
  let line_words = line.split(/\s+/);
  let line_words_with_space = [];
  if (line_words.length > 2) {
    let tmp = [line_words.slice(0, -1).join(" "), line_words.slice(-1)[0]];
    line_words_with_space.push(tmp);
  } else {
    line_words_with_space.push(line_words);
  }
  words.push(line_words_with_space[0]);
}

// 正規表現を使って空白で配列の要素にする
//const commands = lines.map(line => line.split(/\s+/));
//const commands = lines.map(line => line.split(/\s+/));
//const tmp = commands.slice(1, -1)
const tmp = words.slice(1, -1)
var obj=[]

for(var i=0;i<tmp.length;i++){
  obj.push({
    title: tmp[i][0],
    subtitle: tmp[i][1],
    icon: {path: './img/main01.jpg'},
    arg: tmp[i][0]});
};

const keyword = alfy.input;
if (process.argv.length==0){
  alfy.output(obj);
}else if (process.argv.length==3){
  const itemss = alfy.inputMatches(obj,'title');
  alfy.output(itemss);
}else{
  console.log("gitcom {query}")
}

export {obj as obj};
