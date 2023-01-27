import config from 'config'
import app from './app'

const server = app.listen(config.get('api.expressPort'), () => {
    console.log(
        '  App is running at %s in %s mode',
        config.get('api.url'),
        app.get('env')
    )
    console.log('  Press CTRL-C to stop\n')
})
server.on('error', console.error)
