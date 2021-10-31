function dataProvider(selectorFunction){
  const newData = { name: 'person' }

  setTimeout(() => {
    selectorFunction(newData);
  }, 3000);
}


var fetchData = () => new Promise((resolve, reject) => {
  console.log('fetchingData from imaginary database')
  setTimeout(() => {
       try {
         // fetchingData from imaginary database
         resolve({name: 'john', age:42})
        } catch(error) {
          reject(error);
        }
  }, 5000);
});


module.exports =  { dataProvider, fetchData };
