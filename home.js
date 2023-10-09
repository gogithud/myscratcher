function gauge(gnumber, topPercentage, leftPercentage) {
    // 変数の値
    const variableValue = gnumber;

    // ゲージの表示幅
    const gaugeWidth = 200;

    // ゲージの色
    let gaugeColor = '#00FFFF'; // 水色

    // ゲージ要素の作成
    let gaugeElement = document.createElement('div');
    gaugeElement.style.width = `${gaugeWidth}px`;
    gaugeElement.style.height = '20px';
    gaugeElement.style.backgroundColor = '#CCCCCC'; // ゲージの背景色
    gaugeElement.style.borderRadius = '10px';
    gaugeElement.style.overflow = 'hidden';
    gaugeElement.style.position = 'absolute';
    gaugeElement.style.top = topPercentage + '%';  // 位置を指定
    gaugeElement.style.left = leftPercentage + '%';  // 位置を指定

    // ゲージの中身（変数の値に応じて幅を変える）
    let gaugeValue = document.createElement('div');
    gaugeValue.style.width = `${variableValue}%`;
    gaugeValue.style.height = '100%';
    gaugeValue.style.backgroundColor = gaugeColor;

    // ゲージ要素に中身を追加
    gaugeElement.appendChild(gaugeValue);

    // ドキュメントにゲージを追加
    document.body.appendChild(gaugeElement);

};

// 例として、50%上に、50%左にゲージを表示する場合
gauge(20, 210, 5);
gauge(80, 210, 24);
gauge(40, 210, 45);
gauge(15, 210, 66);
gauge(25, 210, 85);