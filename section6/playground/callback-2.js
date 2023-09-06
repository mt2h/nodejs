//asynchronous
setTimeout(() => {
    console.log('Two seconds are up')
    }, 2000)

//synchronous
const names = ['Andrew', 'Jen', 'Jess']
const shortNames = names.filter((name) => {
    return name.length <= 4
    })

console.log(shortNames)

const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 0,
            longitude: 0
            }
        callback(data) //return when is a callback
        }, 2000)
    }

geocode('Philadelphia', (data) => {
    console.log(data)
    })

const add = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b)
        }, 2000)
    }

add(1, 4, (sum) => {
    console.log(sum)
    })