import config from 'config'

export default (server) => {
  server.listen(config.get('server.http.port'))
}