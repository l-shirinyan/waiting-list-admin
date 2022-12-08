import RootRouter from './routes/RootRouter'
import { Provider } from 'react-redux'
import { store } from './redux/store'

function App() {
  return (
    <div>
      <Provider store={store}>
        <RootRouter />
      </Provider>
    </div>
  )
}

export default App
