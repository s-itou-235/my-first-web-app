// ここからコードを書いてください
const setupConverter = () => {
  // 
  const converter_form_div = document.querySelector("div.converter-form");
  // 変換元数値
  const converter_input = document.querySelector(".converter-input");
  // 変換元
  const converter_from_select = document.querySelector("select.converter-from");
  // 変換先単位
  const converter_to = document.querySelector(".converter-to");
  // 表示部分
  const converter_result = document.querySelector(".converter-result");

  // 単位
  const lengthUnit = [
    { name: "meter", base: 1 },
    { name: "kilometer", base: 1000 },
    { name: "centimeter", base: 0.01 },
    { name: "millimeter", base: 0.001 },
    { name: "inch", base: 0.0254 },
    { name: "foot", base: 0.3048 },
    { name: "yard", base: 0.9144 },
    { name: "mile", base: 1609.344 },
  ];

  lengthUnit.forEach((unit) => {
    // 項目や入れる枠を新しく作るイメージ
    const option = document.createElement("option");

    // 1回目のループでイメージするなら
    // 前述して追加された枠のvalue に base（1など）
    option.value = unit.base;
    // 前述して追加された枠のtext に name（meterなど）
    option.textContent = unit.name;

    // 枠 value text のセットを
    // 変数化したHTML要素に optionタグの内容として追加
    converter_from_select.appendChild(option);

    // // 枠 value text のセットを
    // 変数化したHTML要素その２に optionタグの内容として追加
    // ただし一回追加すると消えるイメージ（厳密には移動） なので
    // 同じ処理を複数のHTML要素などにやりたい場合は
    // 「.cloneNode(true)」を使うこと
    converter_to.appendChild(option.cloneNode(true));
  });

  // 初期値設定
  // 数値は0番目と1番目の意味
  // 配列の番号とイメージしてOK
  converter_from_select.selectedIndex = 0;
  converter_to.selectedIndex = 1;


  // 単位変換処理
  const convert = () => {

    // 数値変換チェック
    const convertnum = parseFloat(converter_input.value);
    
    // isNaN()は数値をチェックして
    // 数値じゃないときはNaN → true扱い
    // 「この値は数値以外？」→はい（NaN） で true のイメージ
    // 無事に数値だった場合は
    // 数値じゃないときは→ false扱い
    // 「この値は数値以外？」→いいえ（数値） で false のイメージ
    if(isNaN(convertnum)){
      // 数値以外が入っている場合はこのifでひっかかる
      // ひっかかった場合はreturnでエラーメッセージ表示で関数終了
      return converter_result.textContent = "Please enter a valid number"
    };

    
    // ifを通って単位処理へ進む

    // 単位処理
    // lengthUnit.forEach((unit) => { でいれた
    // optionの部分で入れたもの
    // value の中身は { name: "meter", base: 1 }のbaseの方
    const fromBase = parseFloat(converter_from_select.value);
    const toBase = parseFloat(converter_to.value);

    // lengthUnit.forEach((unit) => { でいれた
    // optionの部分で入れたもの
    // ただしユーザーが今選んだ単位を取得するため別な指定方法

    // converter_from_select.options
    // 単位が入っているオプション → { name: "meter", base: 1 }たちのこと
    
    // [converter_from_select.selectedIndex]
    // selectの部分でユーザーが何番目を選択しているか
    // 配列の考え方で何番目かを取得

    // .text
    // そのテキスト内容を取得

    const fromName = converter_from_select.options[converter_from_select.selectedIndex].text;
    const toName = converter_to.options[converter_to.selectedIndex].text;

    console.log(`変換元数値${convertnum}`);
    console.log(`変換元単位${fromBase}`);
    console.log(`変換先単位${toBase}`);
    console.log(`変換元単位${fromName}`);
    console.log(`変換先単位${toName}`);
    
    const convert_result = (convertnum * fromBase) / toBase;

    converter_result.textContent = `${convertnum} ${fromName} = ${convert_result.toFixed(3)} ${toName}`;


  };

  // リアルタイム更新用
  // 数値を変動させたら 更新
  converter_input.addEventListener("input", convert);
  // 変換元単位を変えたら 更新
  converter_from_select.addEventListener("change", convert);
  // 変換先単位を変えたら 更新
  converter_to.addEventListener("change", convert);
  
  // 単純に初期値用
  convert()

};
export default setupConverter;
