const { createServer } = require('@graphql-yoga/node')
const { getSchemas } = require('./modules')

async function start() {
    const schema = await getSchemas();
    const server = createServer({ schema,
        // https: true,
        cors: {
            origin: 'https://localhost:3000',
            credentials: true,
            // methods: ['POST'],
        },
    })
    await server.start().then(({ url }) => {
        console.log('Backend ready on ', url)
    })
}

start();
