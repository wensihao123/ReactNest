import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { axiosInstance } from './axios';

const fetch = async () => {
    const response = await axiosInstance.request<boolean>({
        url: '/cat',
        data: {
            name: 'Meow',
            age: 1,
            // breed: '123',
        },
        method: 'POST',
    });

    console.log(response.data);
};

const App = () => {
    React.useEffect(() => {
        fetch();
    }, []);
    return <div>hello world</div>;
};

ReactDOM.render(<App />, document.querySelector('#app'));
