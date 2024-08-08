const json_server=require('json-server')
const middleware=json_server.defaults()
const crud_server=json_server.create()
const router=json_server.router('data.json')
const cors=require('cors')
crud_server.use(cors())
crud_server.use(middleware)
crud_server.use(router)
const port=7000
crud_server.listen(port,()=>{
    console.log(`The port started at ${port}`);
})