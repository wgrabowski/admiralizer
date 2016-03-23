import data from './data.js';
class RecipesService {

  /*@ngInject*/

  constructor($q) {

    this.name = 'Recipes';
    this._$q = $q;

  }

  getAllRecipes() {
    return $q(function (resolve, reject) {
      setTimeout(function () {
        resolve(data);

      }, 1000);
    });
  }

}

export default RecipesService;
