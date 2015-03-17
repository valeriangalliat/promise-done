import { equal } from 'assert'
import done from './'
import Promise from 'promise'

const expectedError = new Error()
let foundError;

process.on('uncaughtException', err => foundError = err)
Promise.reject(expectedError).then(null, done)
setTimeout(() => equal(foundError, expectedError), 100)
