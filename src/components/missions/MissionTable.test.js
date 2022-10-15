import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { create } from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import MissionTable from './MissionTable';

const createMissionsComponent = create(
    <Provider store={store}>
      <MissionTable />
    </Provider>,
);

const renderMissionsComponent = () => {
    render(
      <Provider store={store}>
        <MissionTable />
      </Provider>,
    )
}

describe('Tests for the MissionTable component', () => {
    test('Missions data should be in a table', () => {
      const missionComponent = createMissionsComponent.toJSON();
      expect(missionComponent.children[0].type).toEqual('table')
    })
    
    test('should render mission title', () => {
        renderMissionsComponent();
        expect(screen.getByText('Mission')).toBeInTheDocument()
    });

    test('Should render mission description title', () => {
        renderMissionsComponent();
        expect(screen.getByText('Description')).toBeInTheDocument();
    });
})