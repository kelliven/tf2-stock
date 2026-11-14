window.STOCK_DATA_URL = 'https://raw.githubusercontent.com/kelliven/tf2-stock/' +
  (/[?&]src=test(&|$)/.test(location.search) ? 'data-test' : 'data') + '/';
