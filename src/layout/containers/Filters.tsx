import Typography from '@mui/material/Typography';
import { AutocompleteOption, AutocompleteMultipleCheckbox } from '../components/AutocompleteMultipleCheckbox';
import { Grid, TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';
import useFiltersStore from 'state/useFiltersStore'
import shallow from 'zustand/shallow'
import { allCities, allComunas, ComunaWithCity } from 'services/getData';
import { useEffect, useState } from 'react';
import { NumericToggleButton } from 'layout/components/NumericToggleButton';

export default function Filters() {
  const { t } = useTranslation()
  const [filteredComunas, setFilteredComunas] = useState<ComunaWithCity[]>(allComunas);
  const [comunaOptions, setComunaOptions] = useState<AutocompleteOption[]>(buildComunaOptions());
  
  const typeOptions: AutocompleteOption[] = [
    { value: 'apartment', label: t('filters.type.options.apartment') },
    { value: 'house', label: t('filters.type.options.house') },
    { value: 'office', label: t('filters.type.options.office') },
    { value: 'local', label: t('filters.type.options.local') },
    { value: 'warehouse', label: t('filters.type.options.warehouse') },
    { value: 'lot', label: t('filters.type.options.lot') },
    { value: 'estate', label: t('filters.type.options.estate') },
  ]
  const stateOptions: AutocompleteOption[] = [
    { value: 'offPlan', label: t('filters.state.options.offPlan') },
    { value: 'inConstruction', label: t('filters.state.options.inConstruction') },
    { value: 'remodeling', label: t('filters.state.options.remodeling') },
    { value: 'new', label: t('filters.state.options.new') },
    { value: 'old', label: t('filters.state.options.old') },
  ]
  const cityOptions: AutocompleteOption[] = allCities.map((city: any) => ({ value: city.code, label: city.name }))
  function buildComunaOptions() {
    return filteredComunas.map((comuna) => ({ value: { cityCode: comuna.city.code, comunaNumber: comuna.number }, label: comuna.name + " (" + comuna.city.name + ")" }))
  }

  const { selectedTypes, selectedStates, selectedCities, updateFilter } = useFiltersStore(
    (state: any) => ({
      selectedTypes: state.selectedTypes,
      selectedStates: state.selectedStates,
      selectedCities: state.selectedCities,
      updateFilter: state.updateFilter
    }),
    shallow
  ) //TODO Fix and use selectedTypes, selectedStates & selectedCities as placeholders

  const updateStateFilter = (key: string, values: any[]) => {
    const mappedValues = values.map((value) => value.value)
    updateFilter(key, mappedValues)
  }

  useEffect(() => {
    setComunaOptions(buildComunaOptions())
  }, [filteredComunas]); //TODO Fix react-hooks/exhaustive-deps with buildComunaOptions

  const onChangeCityFilter = (key: string, values: any[]) => {
    const cityCodes = values.map((cityOption) => cityOption.value)
    setFilteredComunas(cityCodes.length ? allComunas.filter(comuna => cityCodes.includes(comuna.city.code)) : allComunas)
    updateFilter(key, cityCodes)
  }

  return (
    <Grid container spacing={1} paddingTop={2} paddingX={2}>
      <Grid item>
        <Typography variant="subtitle1" component="div" sx={{ flexGrow: 1 }}>
          {t('filters.title')}
        </Typography>
      </Grid>
      <Grid container item xs={12} spacing={1}>
        <Grid item xs={6}>
          <AutocompleteMultipleCheckbox
            id="cities"
            size="small"
            label={t('filters.city.label')}
            placeholder={t('filters.city.placeholder')}
            defaultValues={[]}
            options={cityOptions}
            onChange={onChangeCityFilter}
          />
        </Grid>
        <Grid item xs={6}>
          <AutocompleteMultipleCheckbox
            id="comunas"
            size="small"
            label={t('filters.comuna.label')}
            placeholder={t('filters.comuna.placeholder')}
            defaultValues={[]}
            options={comunaOptions}
            onChange={updateStateFilter}
          />
        </Grid>
      </Grid>
      <Grid container item xs={12} spacing={1}>
        <Grid item xs={6}>
          <AutocompleteMultipleCheckbox
            id="types"
            size="small"
            label={t('filters.type.label')}
            placeholder={t('filters.type.placeholder')}
            defaultValues={[]} //typeOptions.filter(type => selectedTypes.includes(type.value))
            options={typeOptions}
            onChange={updateStateFilter}
          />
        </Grid>
        <Grid item xs={6}>
          <AutocompleteMultipleCheckbox
            id="states"
            size="small"
            label={t('filters.state.label')}
            placeholder={t('filters.state.placeholder')}
            defaultValues={[]}
            options={stateOptions}
            onChange={updateStateFilter}
          />
        </Grid>
      </Grid>
      <Grid container item xs={12} spacing={1}>
        <Grid item xs={6}>
          <TextField
            id="fromPrice"
            size="small"
            label={t('filters.fromToPrice.labelFrom')}
            placeholder={t('filters.fromToPrice.labelFrom')}
            type="number"
            onChange={(e) => updateFilter(e.target.id, e.target.value)}
            inputProps={{ min: 0, step: 10000 }}
            style={{ width: '100%' }}
          ></TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="toPrice"
            size="small"
            label={t('filters.fromToPrice.labelTo')}
            placeholder={t('filters.fromToPrice.labelTo')}
            type="number"
            onChange={(e) => updateFilter(e.target.id, e.target.value)}
            inputProps={{ min: 0, step: 10000 }}
            style={{ width: '100%' }}
          ></TextField>
        </Grid>
      </Grid>
      <Grid container item xs={12} spacing={1}>
        <Grid item xs={6}>
          <TextField
            id="fromArea"
            size="small"
            label={t('filters.fromToArea.labelFrom')}
            placeholder={t('filters.fromToArea.labelFrom')}
            type="number"
            onChange={(e) => updateFilter(e.target.id, e.target.value)}
            inputProps={{ min: 0, step: 10000 }}
            style={{ width: '100%' }}
          ></TextField>
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="toArea"
            size="small"
            label={t('filters.fromToArea.labelTo')}
            placeholder={t('filters.fromToArea.labelTo')}
            type="number"
            onChange={(e) => updateFilter(e.target.id, e.target.value)}
            inputProps={{ min: 0, step: 10000 }}
            style={{ width: '100%' }}
          ></TextField>
        </Grid>
      </Grid>
      <Grid container item lg={12} paddingY={1} spacing={2}>
        <Grid item lg={4} style={{ display: "flex", gap: '1rem' }}>
          <NumericToggleButton id="bedrooms" label={t('filters.rooms.labelBedrooms')} size="small" />
        </Grid>
        <Grid item lg={4} style={{ display: "flex", gap: '1rem' }}>
          <NumericToggleButton id="bathrooms" label={t('filters.rooms.labelBathrooms')} size="small" />
        </Grid>
        <Grid item lg={4} style={{ display: "flex", gap: '1rem' }}>
          <NumericToggleButton id="garages" label={t('filters.rooms.labelGarages')} size="small" />
        </Grid>
      </Grid>
    </Grid>
  );
}