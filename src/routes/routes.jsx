import React, { lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const HomeScreen = lazy(() => import('../components/molecules/HomeScreen'))
const ContactUsScreen = lazy(() => import('../components/molecules/ContactUsScreen'))

// in case of react-router-dom = 5.2.0

// const RouteConfig = ({ match }) => {
//   let selectedRoute = null

//   switch (match.params[0]) {
//     case 'home':
//       selectedRoute = <HomeScreen />
//       break
//     case 'contact':
//       selectedRoute = <ContactUsScreen />
//       break
//     default:
//       selectedRoute = <HomeScreen />
//       break
//   }
//   return selectedRoute
// }

const RouteConfig = () => {
  let selectedRoute = null

  switch ((window?.location?.pathname.replace('/', ''))) {
    case 'home':
      selectedRoute = <HomeScreen />
      break
    case 'contact':
      selectedRoute = <ContactUsScreen />
      break
    default:
      selectedRoute = <HomeScreen />
      break
  }
  return selectedRoute
}

const routeBasePath = '/*'

// in case of react-router-dom = 5.2.0

// const routes = (
//   <BrowserRouter>
//     <Switch>
//       <Route
//         path={routeBasePath}
//         render={(props) => {
//           return <RouteConfig {...props} />
//         }}
//       />
//     </Switch>
//   </BrowserRouter>
// )

const routes = (
  <BrowserRouter>
    <Routes>
      <Route exact path={routeBasePath} element={ <RouteConfig />}/>
    </Routes>
  </BrowserRouter>
)

export default routes