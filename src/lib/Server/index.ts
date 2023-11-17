import express from 'express'
import cors from 'cors'
const port = process.env.PORT || 3333

export const Router = express.Router
export type Router = express.Router

export default function server(routes?: Router, callback?: () => void) {
  const app = express()
  app.use(express.urlencoded({ extended: true }))
  app.use(express.json())
  app.use(cors())

  if (routes) {
    app.use(routes)
  }

  app.listen(port, callback)
}
