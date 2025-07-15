import * as database from "./utils/database.js"
import { getDataFromApi } from "./utils/api.js"

database.connectToDataBase("my-database")
database.desconnectDataBase()
getDataFromApi()