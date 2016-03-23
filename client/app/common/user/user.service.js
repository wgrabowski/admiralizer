class UserFactory {

  constructor(Auth) {
    this.auth = Auth;
    this.user = null;

    console.log('Auth', Auth);
    this.auth.$onAuthStateChanged((authData) => {
      this.user = authData;
    });

  }

  requireAuth() {
    return this.auth.$requireSignIn();
  }

  signIn() {
    if (!this.user) {
      return this.auth.$signInWithEmailAndPassword('pgs.praktiker@gmail.com', 'surfix').then((user) => {

        console.log('user', user);
        this.user = user;
      });
    }
  }

}

UserFactory.$inject = ['Auth'];

export default UserFactory;
