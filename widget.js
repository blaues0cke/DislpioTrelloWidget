console.log('conf', JSON.stringify(conf));

_c = function (key)
{
    return conf[key] || conf[key.toLowerCase()];
};

var headline = _c('trelloTitleText');

if (_c('trelloShowBattery'))
{
    headline = headline + ' (' + displio.batteryPercentage + '%)';
}

renderData = {
    headline: headline,
    todo1:    '',
    todo2:    '',
    todo3:    '',
    todo4:    ''
};

var url   = 'https://api.trello.com/1/lists/' + _c('trelloListId') + '/cards?key=' + _c('trelloAppId') + '&token=' + _c('trelloToken');
var cards = getJSON(url);

for (var key in cards) {
    var currentCard      = cards[key];
    var cardRenderTarget = 'todo' + (parseInt(key, 10) + 1);

    console.log('Generating card', currentCard, cardRenderTarget)

    renderData[cardRenderTarget] = currentCard.name;

    if (key == 4) {
        break;
    }
}