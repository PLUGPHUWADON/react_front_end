import Hello from './assets/Hello'
import Contact from './assets/Contact'
import Counter from './assets/Counter'

function App() {
	const helloData = [
		{ name: 'Phuwadon', message: 'Hi there' },
		{ name: 'Phuwadon', message: 'Hello world...' }
	]

	return (
		<div className='App'>
			<Counter />
			{ helloData.map((data, index) => (
				<Hello key={index} name={data.name} message={data.message} />
			))}

			<Contact email="ppuwdon@gmail.com" phone="0926437604" />
		</div>
	)
}

export default App