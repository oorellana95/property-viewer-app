import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useThemeStore } from 'state/useThemeStore';
import { ThemesEnum } from 'assets/styles/theme/ThemesEnum';

export default function MenuAppBar(props: any) {
  const { theme, changeTheme } = useThemeStore();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { t } = useTranslation()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    changeTheme(event.target.checked ? ThemesEnum.DARKBLUE_THEME : ThemesEnum.LIGHTORANGE_THEME)
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Grid
            container
            alignItems="center"
          >
            <Grid item xs={4}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={() => props.onClickFilterIcon()}
                sx={{ mr: 2 }}
              >
                {props.showFilters? <FilterAltOffIcon /> : <FilterAltIcon />}
              </IconButton>
            </Grid>
            <Grid item xs={4} textAlign="center">
              <Typography variant="h6" component="div">
                {t('header.title')}
              </Typography>
            </Grid>
            <Grid item xs={4} display="flex" justifyContent="right">
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                style={{ gap: '0.5rem'}}
              >
                <AccountCircle />
                <Typography component="div">
                  Oscar Orellana
                </Typography>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>{t('header.menuProfile.profile')}</MenuItem>
                <MenuItem><FormGroup>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={theme.key === ThemesEnum.DARKBLUE_THEME}
                        onChange={handleChange}
                        aria-label="theme switch"
                      />
                    }
                    label={theme.key === ThemesEnum.DARKBLUE_THEME ? t('header.menuProfile.darkTheme') : t('header.menuProfile.lightTheme')}
                  />
                </FormGroup></MenuItem>
              </Menu>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}