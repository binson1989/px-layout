var navItems = [{
  label: 'Dashboard',
  icon: 'polymer-font-awesome:fa-home'
}, {
  label: 'Alerts',
  icon: 'polymer-font-awesome:fa-exclamation-triangle'
}, {
  label: 'Profile',
  icon: 'polymer-font-awesome:fa-pencil'
}, {
  label: 'Cases',
  icon: 'polymer-font-awesome:fa-briefcase'
}, {
  label: 'Analysis',
  icon: 'polymer-font-awesome:fa-bar-chart'
}];

function createDemoCards(count) {
  var i = 0,
    lorem =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure d' +
    'olor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  _out = [];
  for (; i < count; i++) {
    _out.push({
      title: 'Card ' + i,
      body: lorem
    });
  }
  return _out;
}

function createDemoItems(count) {
  var i = 0,
    lorem =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure d' +
    'olor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  _out = [];
  for (; i < count; i++) {
    _out.push({
      title: 'Item ' + i,
      body: lorem
    });
  }
  return _out;
}
