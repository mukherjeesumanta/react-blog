import Counter from './Counter';

const App = () => {
    const num = 'ss';

    return (
        <>
            <h1>
                React Typescript webpack starter template.{' '}
                {process.env.NODE_ENV} - {process.env.name}
            </h1>
            <Counter />
        </>
    );
};

export default App;
