import { createTheme, MantineProvider } from '@mantine/core';
import Homepage from './Pages/Homepage';
import './index.css';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const theme = createTheme({
  colors: {
    'brightSun': [
      '#fffbeb', '#fff3c6', '#ffe588', '#ffd149', '#ffbd20','#f99b07', '#dd7302', '#b75006', '#943c0c', '#7a330d',],
    'mineShaft': [
      '#f6f6f6', '#e7e7e7', '#d1d1d1', '#b0b0b0', '#888888','#6d6d6d', '#5d5d5d', '#4f4f4f', '#454545', '#3d3d3d',],
  },
});

function App() {
  return (
    <MantineProvider theme={theme}>
      <BrowserRouter>
      <Routes>
        <Route path='*' element={<Homepage/>}/> 
      </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
