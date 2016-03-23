let AuthFactory = function ($firebaseAuth) {
  return $firebaseAuth();
};

AuthFactory.$inject = ['$firebaseAuth'];

export default AuthFactory;
