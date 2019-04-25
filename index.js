const request = require('request');
const constants = require('./constant')

class Towise {

    constructor(config) {
        this.headers = {
            'appid': config.appID,
            'appkey': config.appKey,
            'accept': 'application/json'
        }
    }
    checkImage(image) {
        const isBase64 = /(data:image\/jpeg;base63)/.test(image);
        const response = {}
        if (isBase64) {
            response.image_base64 = image;
            return response;
        }
        response.image_url = image;
        return response;
    }

    faceDetect(image) {
        const self = this;
        return new Promise((resolve, reject) => {
            request.post({
                url: constants.BASE_URL + constants.detect.face,
                headers: self.headers,
                form: self.checkImage(image)
            },
                function (err, res, body) {
                    if (err) {
                        return reject(err);
                    }
                    return resolve(JSON.parse(body));
                })
        });
    }

    bodyDetect(image) {
        const self = this;
        return new Promise((resolve, reject) => {
            request.post({
                url: constants.BASE_URL + constants.detect.body,
                headers: self.headers,
                form: self.checkImage(image)
            },
                function (err, res, body) {
                    if (err) {
                        return reject(err);
                    }
                    return resolve(JSON.parse(body));
                })
        });
    }

    faceComparing(image) {
        const self = this;
        return new Promise((resolve, reject) => {
            request.post({
                url: constants.BASE_URL + constants.recognize.face,
                headers: self.headers,
                form: self.checkImage(image)
            },
                function (err, res, body) {
                    if (err) {
                        return reject(err);
                    }
                    return resolve(JSON.parse(body));
                })
        });
    }

    emotionDetect(image) {
        const self = this;
        return new Promise((resolve, reject) => {
            request.post({
                url: constants.BASE_URL + constants.detect.emotion,
                headers: self.headers,
                form: self.checkImage(image)
            },
                function (err, res, body) {
                    if (err) {
                        return reject(err);
                    }
                    return resolve(JSON.parse(body));
                })
        });
    }

    getAllPerson() {
        const self = this;
        return new Promise((resolve, reject) => {
            request.get({
                url: constants.BASE_URL + constants.persons,
                headers: self.headers
            },
                function (err, res, body) {
                    if (err) {
                        return reject(err);
                    }
                    return resolve(JSON.parse(body));
                })
        });
    }

    getPerson(personId) {
        const self = this;
        return new Promise((resolve, reject) => {
            request.get({
                url: constants.BASE_URL + constants.persons + '?person_id=' + personId,
                headers: self.headers,
                useQuerystring: true
            },
                function (err, res, body) {
                    if (err) {
                        return reject(err);
                    }
                    return resolve(JSON.parse(body));
                })
        });
    }
    addPerson(name) {
        const self = this;
        return new Promise((resolve, reject) => {
            request.post({
                url: constants.BASE_URL + constants.persons,
                headers: self.headers,
                form: {
                    name: name
                }
            },
                function (err, res, body) {
                    if (err) {
                        return reject(err);
                    }
                    return resolve(JSON.parse(body));
                })
        });
    }

    removePerson(personId) {
        const self = this;
        return new Promise((resolve, reject) => {
            request.delete({
                url: constants.BASE_URL + constants.persons,
                headers: self.headers,
                form: {
                    person_id: personId
                }
            },
                function (err, res, body) {
                    if (err) {
                        return reject(err);
                    }
                    return resolve(JSON.parse(body));
                })
        });
    }

    getAllFace(personId) {
        const self = this;
        return new Promise((resolve, reject) => {
            request.get({
                url: constants.BASE_URL + constants.faces + "?person_id=" + personId,
                headers: self.headers,
                useQuerystring: true
            },
                function (err, res, body) {
                    if (err) {
                        return reject(err);
                    }
                    return resolve(JSON.parse(body));
                })
        });
    }

    getFace(faceId) {
        const self = this;
        return new Promise((resolve, reject) => {
            request.get({
                url: constants.BASE_URL + constants.faces + "?face_id=" + faceId,
                headers: self.headers,
                useQuerystring: true
            },
                function (err, res, body) {
                    if (err) {
                        return reject(err);
                    }
                    return resolve(JSON.parse(body));
                })
        });
    }

    addFace(image, personId) {
        const self = this;
        return new Promise((resolve, reject) => {
            request.post({
                url: constants.BASE_URL + constants.faces,
                headers: self.headers,
                form: { ...self.checkImage(image), person_id: personId }
            },
                function (err, res, body) {
                    if (err) {
                        return reject(err);
                    }
                    return resolve(JSON.parse(body));
                })
        });
    }

    removeFace(faceId) {
        const self = this;
        return new Promise((resolve, reject) => {
            request.delete({
                url: constants.BASE_URL + constants.faces,
                headers: self.headers,
                form: { face_id: faceId }
            },
                function (err, res, body) {
                    if (err) {
                        return reject(err);
                    }
                    return resolve(JSON.parse(body));
                })
        });
    }
}

module.exports= Towise;