
const Towise = require('../index');


const towise = new Towise({ appID: 1, appKey: 'argedor123' });
// towise.bodyDetect("https://zdnet2.cbsistatic.com/hub/i/r/2017/06/23/9d1f9937-49c1-49fd-9a76-f550441a4e6c/resize/570x428/fcd7e8d8a6542c146955fdf9885a60ac/a9e06206a58832fa03eae3459204a593ffc74444962fc7da20206e17d1bbe5dc-3.jpg")
// .then(res => console.log(res.data['person'][0]))
// .catch(err => console.log(err))
towise.faceDetect("https://zdnet2.cbsistatic.com/hub/i/r/2017/06/23/9d1f9937-49c1-49fd-9a76-f550441a4e6c/resize/570x428/fcd7e8d8a6542c146955fdf9885a60ac/a9e06206a58832fa03eae3459204a593ffc74444962fc7da20206e17d1bbe5dc-3.jpg").then(res => console.log(res)).catch(err => console.log(err))
// towise.bodyDetect("https://zdnet2.cbsistatic.com/hub/i/r/2017/06/23/9d1f9937-49c1-49fd-9a76-f550441a4e6c/resize/570x428/fcd7e8d8a6542c146955fdf9885a60ac/a9e06206a58832fa03eae3459204a593ffc74444962fc7da20206e17d1bbe5dc-3.jpg")
// .then(res => console.log(res))
// .catch(err => console.log(err))
// towise.emotionDetect("https://zdnet2.cbsistatic.com/hub/i/r/2017/06/23/9d1f9937-49c1-49fd-9a76-f550441a4e6c/resize/570x428/fcd7e8d8a6542c146955fdf9885a60ac/a9e06206a58832fa03eae3459204a593ffc74444962fc7da20206e17d1bbe5dc-3.jpg")
// .then(res => console.log(res))
// .catch(err => console.log(err))
// towise.faceComparing("https://i.sozcu.com.tr/wp-content/uploads/2018/05/iecrop/ezhel30_16_9_1527256171.jpg")
// .then(res => console.log(res))
// .catch(err => console.log(err))
// towise.getAllPerson().then(res => console.log(res.data)).catch(err => console.log(err))
// towise.getPerson("05ca5c5bae754cb89bcb0e303b349b91").then(res => console.log(res)).catch(err => console.log(err));
// towise.addPerson("harun").then(res => console.log(res)).catch(err => console.log(err))
// towise.removePerson("08dd66073cf14117b9b2864dfaa5265c").then(res => console.log(res)).catch(err => console.log(err));
// towise.getAllFace("05ca5c5bae754cb89bcb0e303b349b91").then(res => console.log(res)).catch(err => console.log(err));
// towise.getFace("2af8881ea0f94f0493c8e3fd41db6ec6").then(res => console.log(res)).catch(err => console.log(err));
// towise.addFace("https://i.sozcu.com.tr/wp-content/uploads/2018/05/iecrop/ezhel30_16_9_1527256171.jpg","05ca5c5bae754cb89bcb0e303b349b91").then(res => console.log(res)).catch(res => console.log(res));
// towise.removeFace("1ecc45d793d74a68b06f8f6637478695").then(res => console.log(res)).catch(err => console.log(err))