import 'translations/i18n'
import 'assets/styles/fonts.css'
import Filters from './layout/containers/Filters';
import Header from './layout/containers/Header';
import { ThemeProvider } from '@mui/material/styles';
import { useThemeStore } from 'state/useThemeStore';
import { Grid } from '@mui/material';
import FilteredTable from 'layout/containers/FilteredTable';

function App() {
  const { theme } = useThemeStore();
  return (
    <ThemeProvider theme={theme}>
      <Grid container xs={12}>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid container item xs={12}>
          <Grid container item xs={4}>
            <Filters />
            <FilteredTable />
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
