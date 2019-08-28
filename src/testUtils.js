import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';


import App from './components/App';


export const appWrapper = path => {
    return (
        mount(
            <MemoryRouter initialEntries={[path]}>
                <App isTestEnviroment={true} />
            </MemoryRouter>
        )
    )
}