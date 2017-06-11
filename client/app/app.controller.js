class AppController {
  /* @ngInject */
  constructor($rootScope, $state, urls, OAuth, $window, Session, OTP) {
    this.$rootScope = $rootScope;
    this.$state = $state;
    this.OAuth = OAuth;
    this.$window = $window;
    this.Session = Session;
    this.OTP = OTP;
    this.user = this.Session.read('user');

    this.app = {
      name: 'MSGQue',
      version: '1.0.0',
      settings: {
        themeID: 1,
        navbarHeaderColor: 'bg-primary',
        navbarCollapseColor: 'bg-primary lter',
        asideColor: 'bg-primary bg-gd-dk',
        headerFixed: true,
        asideFixed: true,
        asideFolded: false,
        asideDock: true,
        container: false,
        offScreen: false, // flag for show of sidebar for mobile view
        mobileHeader: false, // flag to show header Nav and Search in mobile view
      },
    };
  }

  $onInit() {
    // keeps track of state change and hides sidebar view for mobile
    /* eslint angular/on-watch: 0 */
    this.appClass = {
      'app-header-fixed': this.app.settings.headerFixed,
      'app-aside-fixed': this.app.settings.asideFixed,
      'app-aside-folded': this.app.settings.asideFolded,
      'app-aside-dock': this.app.settings.asideDock,
      container: this.app.settings.container,
    };

    this.$rootScope.$on('$stateChangeStart', () => {
      this.app.settings.offScreen = false;
      this.app.settings.mobileHeader = false;
    });

    this.$rootScope.$on('sessionUpdated', (e, d) => {
      this.user = d;
    });
  }

  logout() {
    return this.OAuth
      .revokeToken()
      .then(() => {
        this.Session.destroy();
        if (this.$state.current.auth) this.$state.go('home.list');
        return this.$window.location.reload();
      });
  }
}

export default AppController;
