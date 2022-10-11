import 'translations/i18n'
import 'assets/styles/fonts.css'
import Filters from './layout/containers/Filters';
import Header from './layout/containers/Header';
import { ThemeProvider } from '@mui/material/styles';
import { useThemeStore } from 'state/useThemeStore';
import { Grid } from '@mui/material';
import FilteredTable from 'layout/containers/FilteredTable';
import { useState } from 'react';
import SliderCarousel from 'layout/containers/SliderCarousel';

function App() {
  const { theme } = useThemeStore();
  const [showFilters, setShowFilters] = useState<boolean>(true);

  function onClickFilterIcon(){
    showFilters ? setShowFilters(false) : setShowFilters(true)
    return showFilters
  };
  
  return (
    <ThemeProvider theme={theme}>
      <Grid container xs={12}>
        <Grid item xs={12}>
          <Header showFilters={showFilters} onClickFilterIcon={onClickFilterIcon}/>
        </Grid>
        <Grid container item xs={12}>
          <Grid container item xs={4}>
            {showFilters && <Filters />}
            <FilteredTable />
          </Grid>
          <Grid container item xs={8}>
            <SliderCarousel />
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
