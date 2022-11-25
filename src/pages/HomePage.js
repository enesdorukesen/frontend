import React from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

const HomePage = () => {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ width: '90vw', paddingLeft: '5vw' }}>
			<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
				<Tabs
					value={value}
					onChange={handleChange}
					aria-label="basic tabs example"
				>
					<Tab label="Introduction to Python" />
					<Tab label="Data Science" />
					<Tab label="Cyber Security" />
					<Tab label="Project Management" />
				</Tabs>
			</Box>
			<TabPanel value={value} index={0}>
				Python Content Here
			</TabPanel>
			<TabPanel value={value} index={1}>
				Data Science Content Here
			</TabPanel>
			<TabPanel value={value} index={2}>
				Cyber Security Content Here
			</TabPanel>
			<TabPanel value={value} index={3}>
				Project Content Here
			</TabPanel>
		</Box>
	);
};

export default HomePage;
