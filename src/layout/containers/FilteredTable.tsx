import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { StickyHeadTable, StickyHeadTableColumn } from 'layout/components/StickyHeadTable';
import { allProperties } from 'services/getData';

export default function FilteredTable() {
  const { t } = useTranslation()

  const columns: StickyHeadTableColumn[] = [
    { id: 'prominent', label: t('filteredTable.tableHeadCells.column1') },
    { id: 'code', label: t('filteredTable.tableHeadCells.column2') },
    { id: 'zone', label: t('filteredTable.tableHeadCells.column3') }
  ];

  const rows = allProperties.map(
    (property) => (
      { 
        prominent: "mocked", //TODO Fix
        code: property.idProperty, 
        zone: property.zone 
      }))

  return (
    <Grid container item xs={12} spacing={1} paddingTop={2} paddingX={2}>
      <Grid item xs={12}>
        <Typography variant="subtitle1" component="div" sx={{ flexGrow: 1 }}>
          {t('filteredTable.title')}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <StickyHeadTable id="properties" columns={columns} rows={rows} />
      </Grid>
    </Grid>
  );
}