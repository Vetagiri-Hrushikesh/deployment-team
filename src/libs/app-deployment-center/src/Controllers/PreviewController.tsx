import React from 'react';
import { useGlobalState } from '../providers/GlobalContext';
import AppConfiguratiion from '../components/settings/app-configuration/AppConfiguratiion';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const PreviewController: React.FC = () => {
    const { state, dispatch } = useGlobalState();
    const { features, selectedFeature } = state;

    // Function to determine which component to render based on the selected feature
    const renderFeature = (): JSX.Element => {
        switch (selectedFeature) {
            case 'AppConfiguration':
                return <AppConfiguratiion />;
            // Add cases for other features as needed
            default:
                return <div>Select a feature to view details</div>;
        }
    };

    // Handle changing the selected feature
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        dispatch({ type: 'SET_SELECTED_FEATURE', payload: newValue });
    };

    return (
        <Box sx={{ width: '100%' }}> {/* Ensure Box component properly wraps the content */}
            <h2>Feature Preview</h2>
            <Tabs
                value={selectedFeature || false} // Properly handle undefined or null selectedFeature
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="scrollable"
                scrollButtons="auto"
                aria-label="feature tabs"
            >
                {features.map((feature: string) => (
                    <Tab key={feature} label={feature} value={feature} />
                ))}
            </Tabs>
            <div className="feature-content">
                {renderFeature()}
            </div>
        </Box> 
    );
};

export default PreviewController;
